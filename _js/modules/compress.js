import Compressor from "compressorjs";
import JSZip from "jszip";

document.getElementById("convert-to-webp-btn").addEventListener("click", () => {
  const files = document.getElementById("file-input").files;
  const quality = parseFloat(document.getElementById("quality-input").value);
  const output = document.getElementById("result");

  if (files.length === 1) {
    new Compressor(files[0], {
      quality: quality,
      mimeType: "image/webp", // Force conversion to WebP
      convertSize: 1000000,
      success(result) {
        const compressedFile = new File(
          [result],
          result.name.replace(/\.[^/.]+$/, "") + ".webp",
          {
            type: "image/webp",
            lastModified: Date.now(),
          }
        );

        const url = URL.createObjectURL(compressedFile);
        const link = document.createElement("a");
        link.href = url;
        link.download = compressedFile.name;
        link.textContent = `Download Compressed ${compressedFile.name}`;
        link.className = "btn btn-warning me-4 mb-4";
        output.appendChild(link);
      },
      error(err) {
        console.error(err.message);
      },
    });
  } else {
    const zip = new JSZip();
    let count = 0;

    for (let i = 0; i < files.length; i++) {
      new Compressor(files[i], {
        quality: quality,
        mimeType: "image/webp", // Force conversion to WebP
        success(result) {
          const compressedFile = new File(
            [result],
            result.name.replace(/\.[^/.]+$/, "") + ".webp",
            {
              type: "image/webp",
              lastModified: Date.now(),
            }
          );

          zip.file(compressedFile.name, compressedFile);
          count++;

          if (count === files.length) {
            zip.generateAsync({ type: "blob" }).then((content) => {
              const link = document.createElement("a");
              link.href = URL.createObjectURL(content);
              link.download = "compressed_images_webp.zip";
              link.textContent = "Download All Compressed Images in WebP";
              link.className = "btn btn-warning me-4 mb-4";
              output.appendChild(link);
            });
          }
        },
        error(err) {
          console.error(err.message);
        },
      });
    }
  }
});
