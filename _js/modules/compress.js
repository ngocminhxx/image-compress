import Compressor from "compressorjs";
import JSZip from "jszip";

document.getElementById("compress-btn").addEventListener("click", () => {
    const files = document.getElementById("file-input").files;
    const quality = parseFloat(document.getElementById("quality-input").value);
    const mimeType = document.getElementById("mime-type-select").value;
    const output = document.getElementById("result");

    if (files.length === 1) {
        new Compressor(files[0], {
            quality: quality,
            mimeType: mimeType,
            convertSize: 1000000,
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
        const zip = new JSZip();
        let count = 0;

        for (let i = 0; i < files.length; i++) {
            new Compressor(files[i], {
                quality: quality,
                mimeType: mimeType,
                success(result) {
                    const compressedFile = new File([result], result.name, {
                        type: result.type,
                        lastModified: Date.now(),
                    });

                    zip.file(compressedFile.name, compressedFile);
                    count++;

                    if (count === files.length) {
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

document.getElementById("quality-input").addEventListener("input", () => {
    const qualityValue = document.getElementById("quality-input").value;
    document.getElementById("quality-value").textContent = qualityValue;
});
