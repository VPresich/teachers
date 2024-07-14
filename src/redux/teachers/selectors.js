import { createSelector } from "reselect";
import { selectQueryParams } from "../filters/selectors";

export const selectTeachersState = (state) => state.teachers;
export const selectTeachers = (state) => state.teachers.items;
export const selectFavorites = (state) => state.teachers.favorites;
export const selectItemsPerPage = (state) => state.teachers.itemsPerPage;
export const selectCurrentPage = (state) => state.teachers.currentPage;
export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectError = (state) => state.teachers.error;

const selectTotalItems = (state) => state.teachers.totalItems;
const selectTeachersNumber = (state) => state.teachers.items.length;

export const selectIsMore = createSelector(
  [selectTeachersNumber, selectTotalItems],
  (teachersNum, teachersMax) => teachersNum < teachersMax
);

export const selectTeacherById = createSelector(
  [selectTeachers, (state, teacherId) => teacherId],
  (teachers, teacherId) => teachers.find((teacher) => teacher._id === teacherId)
);

export const selectTeachersByLanguage = createSelector(
  [selectTeachers, (state, language) => language],
  (teachers, language) => {
    if (language === "" || language === "all") return teachers;

    return teachers.filter((teacher) =>
      teacher.languages.some((lang) =>
        lang.toLowerCase().includes(language.toLowerCase())
      )
    );
  }
);

export const selectTeachersByLevel = createSelector(
  [selectTeachers, (state, level) => level],
  (teachers, level) => {
    if (level === "" || level === "all") return teachers;

    return teachers.filter((teacher) =>
      teacher.languages.some((lev) =>
        lev.toLowerCase().includes(level.toLowerCase())
      )
    );
  }
);

export const selectTeachersByPrice = createSelector(
  [selectTeachers, (state, price) => price],
  (teachers, price) => {
    const pricePerHour = parseFloat(price);
    if (isNaN(pricePerHour)) return teachers;
    return teachers.filter((teacher) => teacher.price_per_hour <= pricePerHour);
  }
);
