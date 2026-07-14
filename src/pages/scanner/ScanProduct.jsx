import { useState } from "react";
import CameraScanner from "../../components/scanner/CameraScanner";
import { getProductByBarcode } from "../../services/Api";
import ProductCard from "../../components/scanner/ProductCard";
import "../../styles/Scanner.css";
function ScanProduct() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [error, setError] = useState("");

  const handleScan = async (barcode) => {
    setLoading(true);
    setError("");
    try {
      console.log("Scanned:", barcode);

      const data = await getProductByBarcode(barcode);

      console.log(data);

      setProduct(data.product);
      setLoading(false);
      setShowCamera(false);

    } catch (error) {
      console.error(error);

      setLoading(false);
      setProduct(null);

      setError("Product not found!");

      setShowCamera(false);
    }
  };

  return (
    <div className="scanner-container">

      <div className="page-header">

        <h1>📦 OpenFood Inventory Scanner</h1>

        <p>
          Scan a product barcode to instantly retrieve product information.
        </p>

      </div>


      {!showCamera && (
        <div className="text-center">

          <button
            className="btn btn-primary action-btn"
            onClick={() => setShowCamera(true)}
          >
            📷 Open Camera
          </button>

        </div>
      )}

      {/* Camera */}

      {showCamera && (
        <div className="camera-card">

          <CameraScanner
            onScan={handleScan}
            onClose={() => setShowCamera(false)}
          />

        </div>
      )}
      {loading && (
        <div className="text-center mt-5">

          <div
            className="spinner-border text-primary"
            style={{ width: "4rem", height: "4rem" }}
          ></div>

          <h4 className="mt-3">
            Fetching Product...
          </h4>

          <p className="text-muted">
            Please wait...
          </p>

        </div>
      )}
      {error && (
        <div className="card mt-5 shadow border-danger">

          <div className="card-body text-center">

            <h2 className="text-danger">
              ❌ Product Not Found
            </h2>

            <p className="text-muted">
              We couldn't find this barcode in the OpenFoodFacts database.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => {
                setError("");
                setShowCamera(true);
              }}
            >
              📷 Scan Again
            </button>

          </div>

        </div>
      )}
      {product && (
        <div className="product-card">

          <ProductCard product={product} />

          <div className="text-center mt-4">

            <button
              className="btn btn-success action-btn"
              onClick={() => {
                setProduct(null);
                setShowCamera(true);
              }}
            >
              🔄 Scan Another Product
            </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default ScanProduct;