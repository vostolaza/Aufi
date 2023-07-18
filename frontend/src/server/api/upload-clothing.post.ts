import { Storage } from "@google-cloud/storage";
import { randomUUID } from "crypto";
import formidable from "formidable";
import { createReadStream } from "fs";
import { IncomingMessage } from "http";
import { SERVICE } from "~/lib/constants";

function parseMultipartNodeRequest(req: IncomingMessage) {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true });
    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ ...fields, ...files });
    });
  });
}

export default defineEventHandler(async (event) => {
  const req = await parseMultipartNodeRequest(event.node.req);
  // @ts-ignore
  const file: formidable.File = req.userFile[0];
  // @ts-ignore
  const tag = req.tag[0];
  // @ts-ignore
  const username = req.username[0];

  const bucketName = "aufi";
  const config = useRuntimeConfig();
  const storage = new Storage({
    projectId: config.public.projectId,
    credentials: {
      client_email: config.public.clientEmail,
      private_key: config.public.privateKey.replace(/\\n/gm, "\n"),
    },
  });

  const bucket = storage.bucket(bucketName);
  const fileName = randomUUID();
  const fileBucket = storage.bucket(bucketName).file(fileName);
  createReadStream(file.filepath)
    .pipe(fileBucket.createWriteStream({ contentType: "image/jpeg" }))
    .on("finish", () => {
      console.log("success upload");
    })
    .on("error", (error) => {
      console.log(error);
    });

  const url = process.env.GCP_ROUTE;

  const res = await $fetch(`${url}${SERVICE.USER}/uploadClothing`, {
    method: "POST",
    body: { username, tag, uuid: fileName },
  });

  const [files] = await bucket.getFiles();
  //files.forEach((f) => console.log(f.name));

  return sendRedirect(event, "/success");
});
