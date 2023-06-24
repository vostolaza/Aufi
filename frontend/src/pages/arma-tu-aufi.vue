<script lang="ts" setup>
import { User, emptyOutfit } from '~/lib/constants';


const getClothes = async () => {
    const res: User = await $fetch("/api/get-user", {
        method: "POST",
        body: { username: "crutheo" }
    });
    return res;
}

const user: User = await getClothes();

const open = useGuardarModal();
const outfit = useCreateOutfit(emptyOutfit());

const buttonDisabled = computed(() => {
    // TODO cambiarlo para que si no hay las 3, no se puede, poner handler
    return false;
    return outfit.value.top == "" && outfit.value.bottom == "" && outfit.value.footwear == "";
});
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
            <img class="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" />
        </div>
        <div class="flex flex-col items-center justify-center">
            <Carousel item="top" :images="user.tops" v-if="user.tops.length > 0" />
            <Carousel item="bottom" :images="user.bottoms" v-if="user.bottoms.length > 0" />
            <Carousel item="footwear" :images="user.footwear" v-if="user.footwear.length > 0" />
            <Carousel item="accessory" :images="user.accessories" v-if="user.accessories.length > 0" />
        </div>
        <Modal :outfit="outfit" />
        <div class="flex items-center justify-center">
            <button @click="open = true"
                class="text-xl bg-black hover:bg-indigo-900 text-white font-bold py-2 px-4 border rounded"
                :class="{ 'opacity-50 cursor-not-allowed': buttonDisabled }" :disabled="buttonDisabled">
                Guardar
            </button>
        </div>
    </div>
</template>
