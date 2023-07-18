import { SERVICE } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  const url = process.env.GCP_ROUTE;
  const body = await readBody(event);

  try {
    const res = await $fetch(`${url}${SERVICE.AUTH}/login`, {
      method: "POST",
      body,
    });
    setCookie(event, "logged_in", body.username);
    return res;
  } catch (error) {
    return { message: "Error", status: 400 };
  }
});
