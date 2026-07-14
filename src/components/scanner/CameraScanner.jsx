import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

function CameraScanner({ onScan, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {

    const codeReader = new BrowserMultiFormatReader();

    codeReader.decodeFromVideoDevice(
      undefined,
      videoRef.current,
      (result, error) => {

        if (result) {

          const barcode = result.getText();

          console.log("Detected:", barcode);

          onScan(barcode);

          codeReader.reset();
        }

      }
    );

    return () => {
      codeReader.reset();
    };

  }, [onScan]);

  return (

    <div className="text-center">

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "100%",
          maxWidth: "600px",
          border: "2px solid #0d6efd",
          borderRadius: "10px",
        }}
      />

      <div className="mt-3">

        <button
          className="btn btn-danger"
          onClick={onClose}
        >
          ❌ Close Camera
        </button>

      </div>

      <p className="mt-3">
        Point your barcode at the camera...
      </p>

    </div>

  );
}

export default CameraScanner;