import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectFavorites } from "../../redux/favorites/selectors";
import { fetchFavorites } from "../../redux/favorites/operations";
import CardsList from "../../components/CardsList/CardsList";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./Favorites.module.css";
import { Link } from "react-router-dom";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchFavorites())
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        toast.error("Error fetching");
      });
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div className={css.container}>
        <section className={css.content}>
          <h2 className="visually-hidden"> Favorites</h2>
          {favorites && favorites.length !== 0 ? (
            <CardsList teachers={favorites} />
          ) : (
            <Link to="/teachers" className={css.link}>
              <span className={css.text}>
                Looks like you have not selected any favorites yet...
              </span>
            </Link>
          )}
        </section>
      </div>
    </>
  );
}
