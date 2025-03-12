import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Product Details {params.productId}</h1>
      <Link to=".." relative="path">Back</Link>
    </>
  );
}
