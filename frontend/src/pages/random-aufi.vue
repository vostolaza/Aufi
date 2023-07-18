<script lang="ts" setup>
import { Outfit, tags } from '~/lib/constants';

const cookie = useCookie("logged_in");
const label = "Escoge una ocasión";
const selected = useTag(label);
const ready = ref(false)
const aufi = ref<Outfit>({} as Outfit);

const getAufi = async () => {
    const res = await $fetch<Outfit>("/api/get-aufi", {
        method: "POST",
        body: { tag: selected.value, username: cookie.value }
    });
    return res;
}

watch(selected, async () => {
    if (selected.value !== label) {
        const res = getAufi();
        aufi.value = await res;
        ready.value = true;
    }
})

definePageMeta({ middleware: "auth" })
</script>

<template>
    <div>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
                <img class="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" />
            </div>
        </div>
        <DropDown :options="tags" :label="label" />
        <div v-if="ready">
            <div class="flex items-center mx-auto max-w-2xl justify-center flex-col">
                <img :src="aufi.top" class="max-h-[200px] w-auto" v-if="aufi.top != ''" />
                <img :src="aufi.bottom" class="max-h-[200px] w-auto" v-if="aufi.bottom != ''" />
                <img :src="aufi.footwear" class="max-h-[200px] w-auto" v-if="aufi.footwear != ''" />
                <img :src="aufi.accessory" class="max-h-[200px] w-auto" v-if="aufi.accessory != ''" />
            </div>
        </div>
    </div>
</template>
