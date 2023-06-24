export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const res = await $fetch(
    "https://us-central1-aufi-0079.cloudfunctions.net/userService/uploadOutfit",
    {
      method: "POST",
      body,
    }
  );
  return res;
});
