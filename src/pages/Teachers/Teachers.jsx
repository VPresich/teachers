import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTeachersPerPage } from "../../redux/teachers/operations";
import { fetchFavorites } from "../../redux/favorites/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { setPage } from "../../redux/teachers/slice";
import CardList from "../../components/CardsList/CardsList";
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

  // const queryParams = useSelector(selectQueryParams);

  useEffect(() => {
    dispatch(
      getTeachersPerPage({
        page: currentPage,
        limit: itemsPerPage,
        // queryParams,
      })
    );
    isLoggedIn && dispatch(fetchFavorites());
  }, [dispatch, currentPage, itemsPerPage, isLoggedIn]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };
  return (
    <>
      <DocumentTitle>Teachers catalog</DocumentTitle>
      <AppLayout>
        <section className={css.container}>
          <h2 className="visually-hidden"> Teachers catalog</h2>
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
