import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card/Card";
import { useRef, useState, useCallback, useMemo } from "react";

import leftArr from "../../assets/LeftArrow.svg";
import rightArr from "../../assets/RightArrow.svg";
import Style from "./Section.module.css";
import { Typography, Grid, Box, Tooltip } from "@mui/material";
import Filter from "../Filter/filter";

function CardsSwiper({ albumData, type }) {
  const swiperRef = useRef();

  const renderSlides = useCallback(() => {
    return type === "album"
      ? albumData.map((item) => (
          <SwiperSlide key={item.id}>
            <Tooltip title={item.songs.length + " songs"} placement="top" arrow>
              <Box>
                <Card
                  id={item.id}
                  follows={item.follows}
                  image={item.image}
                  title={item.title}
                  type={type}
                />
              </Box>
            </Tooltip>
          </SwiperSlide>
        ))
      : albumData.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              id={item.id}
              follows={item.likes}
              image={item.image}
              title={item.title}
              type={type}
            />
          </SwiperSlide>
        ));
  }, [albumData, type]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={Style.swiper}
      breakpoints={{
        300: { slidesPerView: 2 },
        550: { slidesPerView: 3 },
        700: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {renderSlides()}
      <div
        className={Style.left}
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <img src={leftArr} alt="left" />
      </div>
      <div
        className={Style.right}
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <img src={rightArr} alt="right" />
      </div>
    </Swiper>
  );
}

export default function Section({ albumData, albumName, type, filters }) {
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = useState("all");

  const filteredData = useMemo(() => {
    if (value === "all") return albumData;
    return albumData.filter((item) => item.genre.key === value);
  }, [albumData, value]);

  const handleClick = useCallback(() => {
    setShowAll((prevShowAll) => !prevShowAll);
  }, []);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  return (
    <>
      <div className={Style.sectionHead}>
        <Typography className={Style.albumName} variant="h5">
          {albumName}
        </Typography>

        <Typography className={Style.btn} variant="h6" onClick={handleClick}>
          {showAll ? "Collapse" : "Show All"}
        </Typography>
      </div>
      <div>
        {type === "song" && (
          <Filter filters={filters} handleChange={handleChange} value={value} />
        )}
      </div>
      {showAll ? (
        type === "album" ? (
          <Box padding="2vw" width="92vw" margin="auto">
            <Grid container spacing={2} sx={{margin:'auto'}}>
              {filteredData.map((item) => (
                <Tooltip
                  title={item.songs.length + " songs"}
                  placement="top"
                  arrow
                  key={item.id}
                >
                  <Grid mb={2} xs={6} sm={4} md={2}>
                    <Card
                      id={item.id}
                      follows={item.follows}
                      image={item.image}
                      title={item.title}
                      type={type}
                    />
                  </Grid>
                </Tooltip>
              ))}
            </Grid>
          </Box>
        ) : (
          <Box padding="2vw" width="92vw" margin="auto">
            <Grid container spacing={2} sx={{margin:'auto'}}>
              {filteredData.map((item) => (
                <Grid key={item.id} mb={2} xs={6} sm={4} md={2}>
                  <Card
                    id={item.id}
                    follows={item.likes}
                    image={item.image}
                    title={item.title}
                    type={type}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )
      ) : (
        <CardsSwiper albumData={filteredData} type={type} />
      )}
    </>
  );
}
