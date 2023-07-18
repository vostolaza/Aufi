import { SERVICE } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  const url = process.env.GCP_ROUTE;
  const body = await readBody(event);
  try {
    const res = await $fetch(`${url}${SERVICE.AUTH}/signup`, {
      method: "POST",
      body,
    });
    return res;
  } catch (error) {
    return error;
  }
});
