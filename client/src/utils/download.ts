export const download = () => {
  const canvas = document.getElementById("canvas");
  // @ts-ignore
  const dataUrl = canvas?.toDataURL();

  // Create an image element from the data URL:
  const img = document.createElement("img");
  img.src = dataUrl;
  document.body.appendChild(img);

  // Download the image as a file:
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = "myDrawing.png";
  link.click();
};
