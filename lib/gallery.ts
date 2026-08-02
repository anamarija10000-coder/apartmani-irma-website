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
    .filter((file) => file.endsWith(".webp"))
    .sort(
      (a, b) =>
        Number(path.parse(a).name) -
        Number(path.parse(b).name)
    );

  return images.map(
    (image) => `/images/apartments/${id}/${image}`
  );
}
