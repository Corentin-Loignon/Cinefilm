import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(
    `/${mediaType}/${id}/videos?api_key=b85707f617021e96f9b3422f44a6a0f4&language=fr-FR`
  );
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits?api_key=b85707f617021e96f9b3422f44a6a0f4&language=fr-FR`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
