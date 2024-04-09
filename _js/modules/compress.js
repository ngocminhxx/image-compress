import Compressor from "compressorjs";
import JSZip from "jszip"; // Ensure JSZip is included for multiple files

document.getElementById("compress-btn").addEventListener("click", () => {
  const files = document.getElementById("file-input").files;
  const quality = parseFloat(document.getElementById("quality-input").value);
  const output = document.getElementById("result");

  if (files.length === 1) {
    // If only one file is selected, compress it and provide a download link
    new Compressor(files[0], {
      quality: quality,
      success(result) {
        const compressedFile = new File([result], result.name, {
          type: result.type,
          lastModified: Date.now(),
        });

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
    // For multiple files, compress and add to zip
    const zip = new JSZip();
    let count = 0;

    for (let i = 0; i < files.length; i++) {
      new Compressor(files[i], {
        quality: quality,
        success(result) {
          const compressedFile = new File([result], result.name, {
            type: result.type,
            lastModified: Date.now(),
          });

          zip.file(compressedFile.name, compressedFile);
          count++;

          if (count === files.length) {
            // Once all files are compressed, provide a download link for the zip
            zip.generateAsync({ type: "blob" }).then((content) => {
              const link = document.createElement("a");
              link.href = URL.createObjectURL(content);
              link.download = "compressed_images.zip";
              link.textContent = "Download All Compressed Images";
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

// Update the displayed quality value when the slider changes
document.getElementById("quality-input").addEventListener("input", () => {
  const qualityValue = document.getElementById("quality-input").value;
  document.getElementById("quality-value").textContent = qualityValue;
});
