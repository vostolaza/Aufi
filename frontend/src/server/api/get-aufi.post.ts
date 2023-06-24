import { Outfit } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  const url = process.env.GCP_ROUTE;
  const body = await readBody(event);
  const res = await $fetch<Outfit>(
    `${url}/getOutfit?tag=${body.tag}&username=${body.username}`
  );
  return res;
});
