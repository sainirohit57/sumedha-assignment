import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByColor,
  filterByPrice,
  filterByRating,
} from "../utils/productsSlice";

const filterPriceList = [
  {
    id: 1,
    title: "Under ₹1,000",
    price_slug: "under1000",
  },
  {
    id: 2,
    title: "₹1,000 - ₹5,000",
    price_slug: "1000to5000",
  },
  {
    id: 3,
    title: "₹5,000 - ₹10,000",
    price_slug: "5000to10000",
  },
  {
    id: 4,
    title: "Above - ₹10,000",
    price_slug: "above10000",
  },
];

const filterRatingList = [
  {
    id: 1,
    title: "4 and Above",
    rating_slug: 4,
  },
  {
    id: 2,
    title: "3 and Above",
    rating_slug: 3,
  },
];

const filterColorList = [
  {
    id: 1,
    title: "Black",
    color_slug: "Black",
  },
  {
    id: 2,
    title: "Brown",
    color_slug: "Brown",
  },
  {
    id: 3,
    title: "Red",
    color_slug: "Red",
  },
  {
    id: 4,
    title: "Tan",
    color_slug: "Tan",
  },
];

const ProductFilters = () => {
  const filters = useSelector((state) => state.products.filters);
  const dispatch = useDispatch();

  return (
    <div className="shadow-primary bg-white">
      <h3 className="fw-500 fs-22 p-3 b-bottom-primary">Filters</h3>
      <div className="p-3">
        <h4 className="fs-14">PRICE</h4>
        <ul className="list-unstyled ps-3 pt-2 mb-0">
          {filterPriceList.map((item) => (
            <li
              key={item.id}
              className={`fs-14 lh-base cursor-pointer ${
                filters.price === item?.price_slug && "text-blue fw-500"
              }`}
              onClick={() =>
                dispatch(filterByPrice({ priceRange: item?.price_slug }))
              }
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3">
        <h4 className="fs-14">RATING</h4>
        <ul className="list-unstyled ps-3 pt-2 mb-0">
          {filterRatingList.map((item) => (
            <li
              key={item?.id}
              className={`fs-14 lh-base cursor-pointer ${
                filters.rating === item?.rating_slug && "text-blue fw-500"
              }`}
              onClick={() => dispatch(filterByRating(item?.rating_slug))}
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3">
        <h4 className="fs-14">COLORS</h4>
        <ul className="list-unstyled ps-3 pt-2 mb-0">
          {filterColorList.map((item) => (
            <li
              key={item?.id}
              className={`fs-14 lh-base cursor-pointer ${
                filters.color === item?.color_slug && "text-blue fw-500"
              }`}
              onClick={() =>
                dispatch(filterByColor({ color: item?.color_slug }))
              }
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilters;
