import Compressor from "compressorjs";
import JSZip from "jszip"; // Make sure to include JSZip in your project

document.getElementById("compress-btn").addEventListener("click", () => {
  const files = document.getElementById("file-input").files;
  const imageNames = [];
  const zip = new JSZip();

  for (let i = 0; i < files.length; i++) {
    new Compressor(files[i], {
      quality: 0.8,
      success(result) {
        // Convert the Blob to a File and keep the original extension
        const compressedFile = new File([result], result.name, {
          type: result.type,
          lastModified: Date.now(),
        });

        // Store compressed file for download
        zip.file(compressedFile.name, compressedFile);

        // Add the name to the list
        imageNames.push(compressedFile.name);

        // If all files are processed, create a download button
        if (imageNames.length === files.length) {
          const button = document.createElement("button");
          button.textContent = "Download All Compressed Images";
          button.addEventListener("click", () => {
            zip.generateAsync({ type: "blob" }).then((content) => {
              const link = document.createElement("a");
              link.href = URL.createObjectURL(content);
              link.download = "compressed_images.zip";
              link.click();
            });
          });
          document.body.appendChild(button);

          // Display the names of all compressed images
          const list = document.createElement("ul");
          imageNames.forEach((name) => {
            const listItem = document.createElement("li");
            listItem.textContent = name;
            list.appendChild(listItem);
          });
          document.body.appendChild(list);
        }
      },
      error(err) {
        console.error(err.message);
      },
    });
  }
});
