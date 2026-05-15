import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";

const ogImagePath = new URL("../../public/astropaper-og.jpg", import.meta.url);

export const GET: APIRoute = async () => {
  const buffer = await readFile(ogImagePath);
  return new Response(buffer, {
    headers: { "Content-Type": "image/jpeg" },
  });
};
