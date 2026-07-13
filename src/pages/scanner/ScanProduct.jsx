import CameraScanner from "../../components/scanner/CameraScanner";

function ScanProduct() {
  const handleScan = (barcode) => {
    console.log("Scanned Barcode:", barcode);

    alert(`Barcode: ${barcode}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Barcode Scanner</h2>

      <CameraScanner onScan={handleScan} />
    </div>
  );
}

export default ScanProduct;