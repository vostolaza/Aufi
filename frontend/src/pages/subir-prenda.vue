<script lang="ts" setup>
import { tipos } from '~/lib/constants';

const cookie = useCookie("logged_in");
const label = "Selecciona el tipo de prenda";
const selected = useTag(label);
definePageMeta({ middleware: "auth" })
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
            <img class="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" />
        </div>
        <div class="mt-10 sm:mx-auto sm:max-w-sm">
            <form method="post" action="/api/upload-clothing" enctype="multipart/form-data">
                <div class="mx-auto max-w-2xl mb-6">
                    <input name="userFile" type="file" accept="image/*">
                </div>
                <DropDown :options="tipos" :label="label" />
                <input name="tag" v-model="selected" class="hidden">
                <input name="username" v-model="cookie" class="hidden">
                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subir</button>
                </div>
            </form>
        </div>
    </div>
</template>
