<script lang="ts" setup>
import { AuthRequest, AuthResponse } from '~/lib/constants';

const authRequest = reactive<AuthRequest>({
    username: "",
    password: ""
});
const authResponse = ref<AuthResponse>({ error: "", success: "" });

const signup = async () => {
    authResponse.value.success = authResponse.value.error = "";
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!regex.test(authRequest.password)) {
        authResponse.value.success = "";
        authResponse.value.error = "La contraseña debe tener 8 caracteres: al menos 1 número, 1 letra minúscula y 1 letra mayúscula.";
        return;
    }
    try {
        const res: AuthResponse = await $fetch("/api/signup", {
            method: "POST",
            body: { username: authRequest.username, password: authRequest.password }
        });
        authResponse.value.error = "";
        authResponse.value.success = `Username ${authRequest.username} creado satisfactoriamente. Inicie sesión.`;
    } catch (error) {
        authResponse.value.success = "";
        authResponse.value.error = "Username existente. Intenta con otro.";
    }
}

</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account
            </h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="space-y-6" action="#" method="POST">
                <div>
                    <label for="text" class="block text-sm font-medium leading-6 text-black">Username</label>
                    <div class="mt-2">
                        <input id="text" name="text" type="text" v-model="authRequest.username"
                            class="block w-full rounded-md border-1 text-black focus:ring-indigo-900" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-black">Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" v-model="authRequest.password"
                            class="block w-full rounded-md border-1 text-black focus:ring-indigo-900" />
                    </div>
                </div>

                <p class="mt-10 text-center text-sm text-red-500" v-if="authResponse.error != ''">
                    {{ authResponse.error }}
                </p>

                <p class="mt-10 text-center text-sm text-green-500" v-if="authResponse.success != ''">
                    {{ authResponse.success }}
                </p>

                <div>
                    <button @click="signup()"
                        class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Registrarme</button>
                </div>
            </div>

            <p class="mt-10 text-center text-sm text-gray-400">
                ¿Ya tienes una cuenta?
                {{ ' ' }}
                <a href="/login/" class="font-semibold leading-6 text-black hover:text-indigo-900">Inicia sesión
                    aquí</a>
            </p>
        </div>
    </div>
</template>