<script lang="ts" setup>
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/solid/esm/index";
import { AuthResponse, Outfit, tags } from "~/lib/constants";

const { outfit } = defineProps<{
    outfit: Outfit;
}>();

const open = useGuardarModal();
const label = "Seleccione una prenda";
const selected = useTag(label);
const cookie = useCookie("logged_in");

const buttonDisabled = computed(() => {
    return selected.value == label;
});

const authResponse = ref<AuthResponse>({ error: "", success: "" });

const uploadAufi = async () => {
    try {
        const res = await $fetch("/api/upload-aufi", {
            method: "POST",
            body: { outfit: { ...outfit, tag: selected.value }, username: cookie.value }
        });
        authResponse.value.success = "Outfit subido."
        setTimeout(() => {
            authResponse.value.success = ""
        }, 5000);
    }
    catch {
        authResponse.value.error = "Error. Inténtelo en un minuto."
        setTimeout(() => {
            authResponse.value.error = ""
        }, 5000);
    }
}

</script>

<template>
    <div>
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-50" @close="open = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-lg bg-white px-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                                <div>
                                    <div class="absolute right-5 top-5">
                                        <button type="button"
                                            class="rounded-md bg-white text-gray-400 hover:border-aufi focus:border-aufi focus:outline-none focus:ring-2 focus:ring-offset-2"
                                            @click="open = false">
                                            <span class="sr-only">Close</span>
                                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div class="mt-3 text-center sm:mt-5">
                                        <img class="mx-auto mb-10 h-10 w-auto" src="/logo.png" alt="Your Company" />
                                        <h1 class="title-1 text-indigo-900 mb-6 text-center font-bold">
                                            ¿Para qué ocasión usarás este conjunto?</h1>
                                        <DropDown :options="tags" :label="label" />
                                        <p class="mt-10 text-center text-sm text-red-500" v-if="authResponse.error != ''">
                                            {{ authResponse.error }}
                                        </p>

                                        <p class="mt-10 text-center text-sm text-green-500"
                                            v-if="authResponse.success != ''">
                                            {{ authResponse.success }}
                                        </p>
                                        <button
                                            class="mt-6 text-sm bg-black hover:bg-indigo-900 text-white font-bold py-2 px-4 border rounded"
                                            :class="{ 'opacity-50 cursor-not-allowed': buttonDisabled }"
                                            :disabled="buttonDisabled" @click="uploadAufi()">
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
