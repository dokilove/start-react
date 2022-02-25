import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          <h1>{detail.title_long}</h1>
          <img src={detail.large_cover_image} />
          <h2>
            {detail.rating} / {detail.runtime} min / {detail.year}
          </h2>
          <img src={detail.background_image} />
        </div>
      )}
    </div>
  );
}

export default Detail;
