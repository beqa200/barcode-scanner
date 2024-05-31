import { useBarcode } from "next-barcode";

function Generator({ barcode }: { barcode: string }) {
  const { inputRef } = useBarcode({
    value: barcode,
    options: {
      background: "#ffffff",
    },
  });

  const downloadBarcode = () => {
    const canvas = document.getElementById("mybarcode") as HTMLCanvasElement;
    const pngUrl = canvas
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "mybarcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <div>
        {barcode ? (
          <canvas id="mybarcode" ref={inputRef} />
        ) : (
          <p>No barcode preview</p>
        )}
      </div>
      <div>
        {barcode ? (
          <div style={{ marginTop: 30 }}>
            <textarea
              style={{ fontSize: 18, width: 250, height: 100 }}
              rows={4}
              defaultValue={barcode}
              value={barcode}
            />
            <button
              onClick={downloadBarcode}
              style={{ marginLeft: 10, backgroundColor: "red", color: "white" }}
            >
              Download
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Generator;
