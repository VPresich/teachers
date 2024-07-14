import { createSlice } from "@reduxjs/toolkit";
import {
  getTeachersPerPage,
  getTeacherById,
  getTeachersWithParams,
} from "./operations";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorites: [],
    currentPage: 1,
    totalItems: 20,
    itemsPerPage: 4,
    lastQuantity: 0,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    resetStore(state) {
      state.currentPage = 1;
      state.items = [];
      state.lastQuantity = 0;
    },

    addToFavorites: (state, action) => {
      const camperId = action.payload;
      if (!state.favorites.includes(camperId)) {
        state.favorites.push(camperId);
      }
    },

    removeFromFavorites: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter((id) => id !== camperId);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTeachersPerPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeachersPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.items];
        else {
          state.items = action.payload.items;
        }
      })
      .addCase(getTeachersPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getTeachersWithParams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeachersWithParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.items];
        else {
          state.items = action.payload.items;
        }
        state.lastQuantity = action.payload.items?.length;
      })
      .addCase(getTeachersWithParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getTeacherById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeacherById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const existingIndex = state.items.findIndex(
          (camper) => camper.id === action.payload.id
        );
        if (existingIndex !== -1) {
          state.items[existingIndex] = action.payload;
        } else {
          state.items.push(action.payload);
        }
      })
      .addCase(getTeacherById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addToFavorites, removeFromFavorites, setPage, resetStore } =
  teachersSlice.actions;
export default teachersSlice.reducer;
