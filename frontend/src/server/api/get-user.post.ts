import { SERVICE, User } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  const url = process.env.GCP_ROUTE;
  const body = await readBody(event);
  const res = await $fetch<User>(`${url}${SERVICE.USER}/user/${body.username}`);
  console.log(res);
  return res;
});
