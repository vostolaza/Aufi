<script lang="ts" setup>
import { User, emptyOutfit } from '~/lib/constants';


const getClothes = async () => {
    const res: User = await $fetch("/api/get-user");
    return res;
}

const user: User = await getClothes();
console.log(user);

/*
const top = "https://i.ebayimg.com/thumbs/images/g/m4sAAOSw-HNkK2Kc/s-l300.jpg";
const tops: string[] = [top, top, top, top];

const bottom = "https://i.ebayimg.com/thumbs/images/g/5F0AAOSwQz9iyDqE/s-l300.jpg";
const bottoms: string[] = [bottom, bottom, bottom, bottom, bottom]

const shoe = "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw909b3290/images/42787001/Rebel_42787001_white_hi-res.jpg?sw=750&sh=750&sm=fit&q=60";
const shoes: string[] = [shoe, shoe]

const accessory = "https://grimey.com/media/catalog/product/g/r/grh337-prp_gorro_grimey_22snow_fox_22_-_purple_winter_22_02.jpg";
const accessories: string[] = [accessory, accessory, accessory, accessory];
*/

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
