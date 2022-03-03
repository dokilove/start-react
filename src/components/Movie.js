import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../CSS/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.main}>
      <button className={styles.title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </button>
      <div className={styles.innerText}>
        <img className={styles.coverImg} src={coverImg} />
        <div className={styles.summaryAndGenres}>
          <div className={styles.summary}>
            {summary.length > 265 ? `${summary.slice(0, 265)}...` : summary}
          </div>
          <ul className={styles.genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
