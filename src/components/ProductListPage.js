import ProductFilters from "./ProductFilters";
import ProductHeader from "./ProductHeader";
import ProductItems from "./ProductItems";

const ProductListPage = () => {
  return (
    <div className="container-fluid">
      <div className="row g-4">
        <div className="col-lg-2">
          <ProductFilters />
        </div>
        <div className="col-lg-10">
          <div className="shadow-primary">
            <div className="row bg-white">
              <ProductHeader />
            </div>
            <div className="row bg-white">
              <ProductItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
