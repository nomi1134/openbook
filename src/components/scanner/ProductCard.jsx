import { motion } from "framer-motion";
function ProductCard({ product }) {
    if (!product) return null;
    const getNutriColor = (grade) => {
        switch (grade?.toLowerCase()) {
            case "a":
                return "success";
            case "b":
                return "primary";
            case "c":
                return "warning";
            case "d":
                return "orange";
            case "e":
                return "danger";
            default:
                return "secondary";
        }
    };

    const getEcoColor = (grade) => {
        switch (grade?.toLowerCase()) {
            case "a":
                return "success";
            case "b":
                return "primary";
            case "c":
                return "warning";
            case "d":
                return "orange";
            case "e":
                return "danger";
            default:
                return "secondary";
        }
    };
    return (
        <motion.div
            className="card shadow-lg border-0 mt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="row g-0">

                {/* Product Image */}
                <div className="col-md-4 text-center p-4 bg-light">
                    <img
                        src={
                            product.image_front_url ||
                            product.image_url ||
                            "https://placehold.co/300x300?text=No+Image"
                        }
                        alt={product.product_name}
                        className="product-image"
                    />
                </div>

                {/* Product Details */}
                <div className="col-md-8">
                    <div className="card-body">

                        <h2 className="fw-bold">
                            {product.product_name || "Unknown Product"}
                        </h2>

                        <h5 className="text-muted mb-4">
                            {product.brands}
                        </h5>
                        <h3 className="info-title">
                            Product Information
                        </h3>
                        <table className="table table-borderless">

                            <tbody>

                                <tr>
                                    <th width="180">Barcode</th>
                                    <td>{product.code}</td>
                                </tr>

                                <tr>
                                    <th>Brand</th>
                                    <td>{product.brands}</td>
                                </tr>

                                <tr>
                                    <th>Quantity</th>
                                    <td>{product.quantity}</td>
                                </tr>

                                <tr>
                                    <th>Categories</th>
                                    <td>{product.categories}</td>
                                </tr>

                                <tr>
                                    <th>Countries</th>
                                    <td>{product.countries}</td>
                                </tr>

                                <tr>
                                    <th>Ingredients</th>
                                    <td>{product.ingredients_text}</td>
                                </tr>

                                <tr>
                                    <th>Packaging</th>
                                    <td>{product.packaging}</td>
                                </tr>

                                <tr>
                                    <th>Nutri Score</th>
                                    <td>
                                        <span
                                            className={`badge bg-${getNutriColor(
                                                product.nutriscore_grade
                                            )} text-uppercase px-3 py-2`}
                                        >
                                            {product.nutriscore_grade || "-"}
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Nova Group</th>
                                    <td>{product.nova_group}</td>
                                </tr>

                                <tr>
                                    <th>Ecoscore</th>
                                    <td>
                                        <span
                                            className={`badge bg-${getEcoColor(
                                                product.ecoscore_grade
                                            )} text-uppercase px-3 py-2`}
                                        >
                                            {product.ecoscore_grade || "-"}
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Labels</th>
                                    <td>{product.labels}</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>
                </div>

            </div>
        </motion.div>);
}

export default ProductCard;