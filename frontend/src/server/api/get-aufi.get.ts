import { Outfit } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  const res = await $fetch<Outfit>(
    "https://us-central1-aufi-0079.cloudfunctions.net/userService/getOutfit?tag=casual&username=crutheo"
  );
  return res;
});
