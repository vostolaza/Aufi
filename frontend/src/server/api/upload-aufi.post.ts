import { SERVICE } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  const url = process.env.GCP_ROUTE;
  const body = await readBody(event);
  const res = await $fetch(`${url}${SERVICE.USER}/uploadOutfit`, {
    method: "POST",
    body,
  });
  return res;
});
