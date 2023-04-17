import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";

import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(
    `/${endpoint}/top_rated?api_key=b85707f617021e96f9b3422f44a6a0f4&language=fr-FR`
  );

  const onTabChange = (tab) => {
    setEndpoint(tab === "Films" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Les mieux notées</span>
        <SwitchTabs data={["Films", "Séries"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
