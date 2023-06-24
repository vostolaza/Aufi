import { User } from "~/lib/constants";

export default defineEventHandler(async (event) => {
  //const body = await readBody(event);
  const res = await $fetch<User[]>(
    "https://us-central1-aufi-0079.cloudfunctions.net/userService/user/"
  );
  let userRes = {};
  res.forEach((user: User) => {
    if (user.username === "crutheo") userRes = user;
  });
  return userRes;
});
