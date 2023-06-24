<script lang="ts" setup>

// añadir una prenda

import IconPlus from "~/assets/plus.svg?component";
import IconPuzzle from "~/assets/puzzle.svg?component";
import FingerPrint from "~/assets/finger-print.svg?component";
import IconLogout from "~/assets/logout.svg?component";


</script>

<template>
    <div class="flex items-center mx-auto max-w-xl">
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
                <img class="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" />
            </div>

            <NavLink to="/subir-prenda/" class="my-1">
                <div class="flex items-center justify-between space-x-4 hover:bg-gray-100">
                    <div class="flex items-center">
                        <IconPlus class="h-8 w-8 md:h-10 md:w-10" />
                        <h3 class="subtitle-1 pl-2 font-semibold">Añade una prenda</h3>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/arma-tu-aufi/" class="my-1">
                <div class="flex items-center justify-between space-x-2 hover:bg-gray-100">
                    <div class="flex items-center">
                        <IconPuzzle class="h-8 w-8 md:h-10 md:w-10" />
                        <h3 class="subtitle-1 pl-2 font-semibold">Arma tu aufi</h3>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/random-aufi/" class="my-1">
                <div class="flex items-center justify-between space-x-2 hover:bg-gray-100">
                    <div class="flex items-center">
                        <FingerPrint class="h-8 w-8 md:h-10 md:w-10" />
                        <h3 class="subtitle-1 pl-2 font-semibold">Busca un aufi</h3>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/#" class="my-1">
                <div class="flex items-center justify-between space-x-2 hover:bg-gray-100">
                    <div class="flex items-center">
                        <IconLogout class="h-8 w-8 md:h-10 md:w-10" />
                        <h3 class="subtitle-1 pl-2 font-semibold">Cerrar sesión</h3>
                    </div>
                </div>
            </NavLink>
        </div>
    </div>
</template>
