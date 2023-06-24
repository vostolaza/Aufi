<script lang="ts" setup>
import { tags } from '~/lib/constants';

let imageUrl: string | null = null;

const upload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imageUrl = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
}



</script>

<template>
    <div>
        <input type="file" @change="upload" accept="image/*">
        <div v-if="imageUrl">
            <img :src="imageUrl" alt="Uploaded Image" class="m-10 max-w-[180px] h-auto">
            <DropDown :options="tags" label="Selecciona el tipo de prenda" :obj="{}" />
        </div>
    </div>
</template>
