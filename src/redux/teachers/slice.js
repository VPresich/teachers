import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
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
    totalPages: 1,
    itemsPerPage: 4,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    resetStore(state) {
      state.currentPage = 1;
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.totalItems = 20;
      state.totalPages = 1;
      state.itemsPerPage = 4;
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
        state.error = null;
      })
      .addCase(getTeachersPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;

        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.teachers];
        else {
          state.items = action.payload.teachers;
        }
      })

      .addCase(getTeachersPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getTeachersWithParams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeachersWithParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.totalRecords;

        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.teachers];
        else {
          state.items = action.payload.teachers;
        }
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
      })

      //-----------------------------------------------
      .addCase(logOut.fulfilled, (state) => {
        resetStore();
        state.favorites = [];
      });
    //-------------------------------------------------
  },
});

export const { addToFavorites, removeFromFavorites, setPage, resetStore } =
  teachersSlice.actions;
export default teachersSlice.reducer;
