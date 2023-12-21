import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../constants";

const initialState = {
  products: productsData.sort((a, b) => b.rating - a.rating),
  sortBy: "popularity",
  filters: {
    rating: null,
    price: null,
    color: null,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct(state, action) {
      // const productIndex = state.products.findIndex(
      //   (product) => product.id === action.payload.id
      // );

      // if (productIndex !== -1) {
      //   state.products[productIndex] = action.payload;
      // }
      // const productIndex = state.products.findIndex(
      //   (product) => product.id === action.payload.id
      // );

      state.products.push(action.payload);
    },
    sortByPopularity(state) {
      state.products = state.products.sort((a, b) => b.rating - a.rating);
      state.sortBy = "popularity";
    },
    sortByAscending(state) {
      state.products = state.products.sort((a, b) => a.sp - b.sp);
      state.sortBy = "priceAscending";
    },
    sortByDescending(state) {
      state.products = state.products.sort((a, b) => b.sp - a.sp);
      state.sortBy = "priceDescending";
    },
    filterByPrice(state, action) {
      const { priceRange } = action.payload;
      state.products = productsData.filter((product) => {
        switch (priceRange) {
          case "under1000":
            return product.sp < 1000;
          case "1000to5000":
            return product.sp >= 1000 && product.sp < 5000;
          case "5000to10000":
            return product.sp >= 5000 && product.sp < 10000;
          case "above10000":
            return product.sp >= 10000;
          default:
            return true;
        }
      });
      state.filters.price = priceRange;
    },
    filterByRating(state, action) {
      const rating = action.payload;
      state.products = productsData.filter(
        (product) => product.rating >= rating
      );
      state.filters.rating = rating;
    },
    filterByColor(state, action) {
      const { color } = action.payload;
      state.products = productsData.filter((product) => {
        switch (color) {
          case "Black":
            return product.color === "Black";
          case "Brown":
            return product.color === "Brown";
          case "Red":
            return product.color === "Red";
          case "Tan":
            return product.color === "Tan";
          default:
            return true;
        }
      });
      state.filters.color = color;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateProduct,
  sortByAscending,
  sortByDescending,
  sortByPopularity,
  filterByPrice,
  filterByRating,
  filterByColor,
} = productsSlice.actions;
export default productsSlice.reducer;
