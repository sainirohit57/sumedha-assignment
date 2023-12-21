import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductItems = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </>
  );
};

export default ProductItems;
