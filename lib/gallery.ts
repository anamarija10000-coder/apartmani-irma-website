import fs from "fs";
import path from "path";

export function getGallery(id: string) {
  const folder = path.join(
    process.cwd(),
    "public",
    "images",
    "apartments",
    id
  );

  if (!fs.existsSync(folder)) {
    return [];
  }

  const images = fs
    .readdirSync(folder)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => Number(a.split(".")[0]) - Number(b.split(".")[0]));

  return images.map(
    (image) => `/images/apartments/${id}/${image}`
  );
}
