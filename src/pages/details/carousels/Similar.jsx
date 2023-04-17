import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/similar?api_key=b85707f617021e96f9b3422f44a6a0f4&language=fr-FR`
  );

  const title = mediaType === "tv" ? "Séries Similaires" : "Films Similaires";

  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Similar;
