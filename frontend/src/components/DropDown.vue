<script lang="ts" setup>

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { options, label } = defineProps<{
    options: string[];
    label: string;
}>();

const selected = useTag(label);
</script>

<template>
    <div class="mx-auto max-w-2xl mb-6">
        <Menu as="div" class="">
            <div>
                <MenuButton
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {{ selected }}
                </MenuButton>
            </div>
            <MenuItems
                class="z-10 w-full mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                    <div v-for="option in options" :key="option">
                        <MenuItem v-slot="{ active }" @click="selected = option">
                        <a href="#"
                            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{ option }}</a>
                        </MenuItem>
                    </div>
                </div>
            </MenuItems>
        </Menu>
    </div>
</template>