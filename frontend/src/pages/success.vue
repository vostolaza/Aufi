<script lang="ts" setup></script>
<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
            <img class="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" />
        </div>
        <div class="mt-10 sm:mx-auto sm:max-w-sm">
            <h1 class="title-1 text-indigo-900 mb-6 text-center font-bold">
                Prenda subida con éxito.</h1>
            <div>
                <button @click="navigateTo('/subir-prenda')"
                    class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Volver</button>
            </div>
        </div>
    </div>
</template>
