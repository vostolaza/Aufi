export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie("logged_in");
  if (!cookie.value) {
    return navigateTo("/login");
  }
});
