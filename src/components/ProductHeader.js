import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductAddForm from "./ProductAddForm";
import {
  sortByAscending,
  sortByDescending,
  sortByPopularity,
} from "../utils/productsSlice";

const sortByList = [
  {
    id: 1,
    title: "Popularity",
    dispatchFunc: sortByPopularity,
    sortBy: "popularity",
  },
  {
    id: 2,
    title: "Price -- Low to High",
    dispatchFunc: sortByAscending,
    sortBy: "priceAscending",
  },
  {
    id: 3,
    title: "Price -- High to Low",
    dispatchFunc: sortByDescending,
    sortBy: "priceDescending",
  },
];

const ProductHeader = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const sortBy = useSelector((state) => state.products.sortBy);
  const dispatch = useDispatch();

  const handleShow = () => {
    setIsModal(true);
  };
  const handleClose = () => {
    setIsModal(false);
  };

  // if (isLoading) {
  //   return "Loading";
  // }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center b-bottom-primary">
        <div className="sort-box fs-18">
          <span className="d-inline-block fw-500 p-2">Sort By</span>
          {sortByList.map((item) => (
            <span
              key={item?.id}
              className={
                "d-inline-block mx-2 py-2 " +
                (sortBy === item.sortBy && "active")
              }
              onClick={() => dispatch(item.dispatchFunc())}
            >
              {item?.title}
            </span>
          ))}
        </div>
        <button
          className="btn primary-btn"
          type="button"
          onClick={() => handleShow()}
        >
          Add Product
        </button>
      </div>

      <ProductAddForm show={isModal} handleClose={handleClose} />
    </>
  );
};

export default ProductHeader;
