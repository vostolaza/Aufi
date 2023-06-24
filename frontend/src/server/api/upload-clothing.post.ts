export default defineEventHandler(async (event) => {
  const obj = {
    url: "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F2136%2FACCESORIOS%2FTGP-080_201614479749_21.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4acced13b61862a3266a369583ba8a98",
    username: "crutheo",
    tag: "accessory",
  };
  const res = await $fetch(
    "https://us-central1-aufi-0079.cloudfunctions.net/userService/uploadClothing",
    {
      method: "POST",
      body: obj,
    }
  );
  return res;
});
