<script lang="ts" setup>
import "swiper/css";
import IconArrow from "~/assets/arrow.svg?component";
import { emptyOutfit } from "~/lib/constants";

const { item, images } = defineProps<{
    item: string;
    images: string[];
}>();

const navigationOptions = {
    prevEl: `#btn-prev-${item}`,
    nextEl: `#btn-next-${item}`,
    disabledClass: "opacity-50",
};
const paginationOptions = {
    el: `#pagination-${item}`,
    clickable: true,
    bulletClass:
        "w-2.5 h-2.5 rounded-full inline-block rounded-full bg-black bg-opacity-20 cursor-pointer",
    horizontalClass: "max-w-none",
    bulletActiveClass: "bg-aufi !bg-opacity-100",
};

const activeSlideIndex = ref(0);
const outfit = useCreateOutfit(emptyOutfit());

const image = images[0];
switch (item) {
    case "top": {
        outfit.value.top = image;
        break;
    }
    case "bottom": {
        outfit.value.bottom = image;
        break;
    }
    case "footwear": {
        outfit.value.footwear = image;
        break;
    }
    case "accessory": {
        outfit.value.accessory = image;
        break;
    }
}

const changeActiveSlideIndex = (swiper: any) => {
    activeSlideIndex.value = swiper.activeIndex;
    const image = images[swiper.activeIndex];
    switch (item) {
        case "top": {
            outfit.value.top = image;
            break;
        }
        case "bottom": {
            outfit.value.bottom = image;
            break;
        }
        case "footwear": {
            outfit.value.footwear = image;
            break;
        }
        case "accessory": {
            outfit.value.accessory = image;
            break;
        }
    }
}

</script>

<template>
    <div class="flex items-center mx-auto max-w-2xl justify-center">
        <button type="button" :id="`btn-prev-${item}`" class="hidden lg:flex">
            <span class="sr-only">Previous</span>
            <IconArrow class="rotate-180 h-8 w-8 md:h-10 md:w-10" />
        </button>
        <Swiper :modules="[SwiperNavigation, SwiperPagination, SwiperFreeMode]" :slides-per-view="1" :slides-per-group="1"
            :free-mode="true" :navigation="navigationOptions" :pagination="paginationOptions"
            @slideChange="changeActiveSlideIndex">
            <SwiperSlide v-for="image in images" :key="image">
                <div class="flex items-center justify-center">
                    <img :src="image" class="max-h-[200px] w-auto" />
                </div>
            </SwiperSlide>
        </Swiper>
        <button type="button" :id="`btn-next-${item}`" class="hidden lg:flex">
            <span class="sr-only">Next</span>
            <IconArrow class="h-8 w-8 md:h-10 md:w-10" />
        </button>
    </div>
</template>