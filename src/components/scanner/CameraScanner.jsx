import { useState } from "react";
import { useZxing } from "react-zxing";

function CameraScanner({ onScan }) {
  const [cameraOn, setCameraOn] = useState(false);

  const { ref } = useZxing({
    paused: !cameraOn,

    onDecodeResult(result) {
      const barcode = result.getText();

      console.log("✅ Barcode Detected:", barcode);

      setCameraOn(false);
      onScan(barcode);
    },
  });

  return (
    <div className="text-center">
      {!cameraOn ? (
        <button
          className="btn btn-primary"
          onClick={() => setCameraOn(true)}
        >
          📷 Open Camera
        </button>
      ) : (
        <>
          <video
            ref={ref}
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
              onClick={() => setCameraOn(false)}
            >
              Close Camera
            </button>
          </div>

          <p className="mt-3 text-muted">
            Point your camera at a barcode...
          </p>
        </>
      )}
    </div>
  );
}

export default CameraScanner;