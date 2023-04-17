import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations?api_key=b85707f617021e96f9b3422f44a6a0f4&language=fr-FR`
  );

  return (
    <Carousel
      title="Recommandations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Recommendation;
