import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // getTeachersPerPage,
  getTeachersWithParams,
} from "../../redux/teachers/operations";
import { fetchFavorites } from "../../redux/favorites/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectQueryParams } from "../../redux/filters/selectors";
import { setPage } from "../../redux/teachers/slice";
import CardList from "../../components/CardsList/CardsList";
import Filters from "../../components/Filters/Filters";
import {
  selectTeachers,
  selectCurrentPage,
  selectIsLoading,
  selectItemsPerPage,
  selectIsMore,
} from "../../redux/teachers/selectors";
import AppLayout from "../../components/AppLayout/AppLayout";
import Button from "../../components/UI/Button/Button";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./Teachers.module.css";

export default function Teachers() {
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachers);
  // console.log("TEACHERS", teachers);

  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const isMore = useSelector(selectIsMore);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const queryParams = useSelector(selectQueryParams);
  console.log("queryParams", queryParams);

  useEffect(() => {
    dispatch(
      getTeachersWithParams({
        page: currentPage,
        limit: itemsPerPage,
        query: queryParams,
      })
    );
    isLoggedIn && dispatch(fetchFavorites());
  }, [dispatch, currentPage, itemsPerPage, isLoggedIn, queryParams]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };
  return (
    <>
      <DocumentTitle>Teachers catalog</DocumentTitle>
      <AppLayout>
        <section className={css.container}>
          <h2 className="visually-hidden"> Teachers catalog</h2>
          <Filters />
          <div className={css.catalog}>
            <CardList teachers={teachers} />
          </div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            isMore && (
              <Button onClick={handleLoadMore} btnAuxStyles={css.btnAuxStyles}>
                Load More
              </Button>
            )
          )}
        </section>
      </AppLayout>
    </>
  );
}
