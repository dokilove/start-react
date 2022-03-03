import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../CSS/Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img className={styles.coverImg} src={detail.large_cover_image} />
          <h1 className={styles.title}>{detail.title_long}</h1>
          <h2 className={styles.info}>
            {detail.rating} / {detail.runtime} min / {detail.year}
          </h2>
          <img className={styles.bgImg} src={detail.background_image} />
        </div>
      )}
    </div>
  );
}

export default Detail;
