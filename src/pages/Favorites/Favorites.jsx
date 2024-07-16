// import DocumentTitle from "../../components/DocumentTitle";
// import css from "./Favorites.module.css";
// import { Link } from "react-router-dom";

// export default function Favorites() {
//   return (
//     <>
//       <DocumentTitle>Favorites</DocumentTitle>
//       <div className={css.container}>
//         <section className={css.favorites}>
//           <h2> Favorites</h2>

//           <Link to="/teachers" className={css.link}>
//             <p className={css.text}>
//               Looks like you have not selected any favorites yet...
//             </p>
//           </Link>
//         </section>
//       </div>
//     </>
//   );
// }

import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectFavorites } from "../../redux/teachers/selectors";
import { fetchFavorites } from "../../redux/favorites/operations";
import CardsList from "../../components/CardsList/CardsList";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./Favorites.module.css";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const dispatch = useDispatch();

  const favoritsIdx = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchFavorites(favoritsIdx))
      .unwrap()
      .then((data) => {
        setFavorites(data);
      })
      .catch(() => {
        toast.error("Error fetching");
      });
  }, [favoritsIdx, dispatch]);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div className={css.container}>
        <section className={css.favoritesContent}>
          <h2 className="visually-hidden"> Favorites</h2>
          {favorites && favorites.length !== 0 ? (
            <CardsList teachers={favorites} />
          ) : (
            <Link to="/teachers" className={css.link}>
              <p className={css.text}>
                Looks like you have not selected any favorites yet...
              </p>
            </Link>
          )}
        </section>
      </div>
    </>
  );
}
