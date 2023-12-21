import { images } from "../assets/images/images";

const ProductCard = ({ productData }) => {
  const { title, color, mrp, sp, img, rating, num_reviews } = productData;
  const discount = Math.trunc(((mrp - sp) / mrp) * 100);

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 p-1">
      <div className="product-card bg-white p-3 rounded-1 h-100">
        <div className="product-img m-auto py-4">
          <img
            src={
              typeof img === "object" ? URL.createObjectURL(img) : images[img]
            }
            className="h-100 w-100 object-fit-contain"
            alt="Product"
          />
        </div>
        <div className="card-body">
          <h3 className="fs-16 mb-2 title">{title}</h3>
          <h5 className="text-light fs-14 fw-400 mb-2">{color}</h5>
          <p className="fw-500 mb-1">
            <span className="bg-green py-1 px-2 rounded-1 text-white">
              {parseFloat(rating).toFixed(1)} &#9733;
            </span>
            <span className="ms-2 text-light">({num_reviews})</span>
          </p>
          <p className="fw-500">
            <span className="fs-18">₹{sp}</span>
            <del className="fs-16 text-light ms-1">₹{mrp}</del>
            {discount !== 0 && (
              <span className="text-green fs-14 ms-1">{discount}% off</span>
            )}
          </p>
          <p className="text-green fw-700">Bank Offer</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
