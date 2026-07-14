import { useState } from "react";
import CameraScanner from "../../components/scanner/CameraScanner";
import { getProductByBarcode } from "../../services/Api";

function ScanProduct() {
  const [product, setProduct] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleScan = async (barcode) => {
    try {
      console.log("Scanned:", barcode);

      const data = await getProductByBarcode(barcode);

      console.log(data);

      setProduct(data.product);

      setShowCamera(false);

    } catch (error) {
      console.error(error);
      alert("Product not found!");
      setShowCamera(false);
    }
  };

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        OpenFood Barcode Scanner
      </h1>


      {!showCamera && (
        <div className="text-center">

          <button
            className="btn btn-primary btn-lg"
            onClick={() => setShowCamera(true)}
          >
            📷 Open Camera
          </button>

        </div>
      )}

      {/* Camera */}

      {showCamera && (
        <CameraScanner
          onScan={handleScan}
          onClose={() => setShowCamera(false)}
        />
      )}


      {product && (

        <div className="card mt-5 shadow p-4">

          <div className="row">

            <div className="col-md-4 text-center">

              <img
                src={product.image_front_url}
                alt={product.product_name}
                className="img-fluid"
              />

            </div>

            <div className="col-md-8">

              <h2>{product.product_name}</h2>

              <hr />

              <p>
                <strong>Barcode:</strong> {product.code}
              </p>

              <p>
                <strong>Brand:</strong> {product.brands}
              </p>

              <p>
                <strong>Quantity:</strong> {product.quantity}
              </p>
              <p>
                <strong>Nutri Score:</strong>{" "}
                {product.nutriscore_grade}
              </p>

              <button
                className="btn btn-success mt-3"
                onClick={() => {
                  setProduct(null);
                  setShowCamera(true);
                }}
              >
                🔄 Scan Another Product
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default ScanProduct;