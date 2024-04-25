import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card/Card";
import { useRef, useState } from "react";

import leftArr from "../../assets/LeftArrow.svg";
import rightArr from "../../assets/RightArrow.svg";
import Style from "./Section.module.css";
import { Typography, Grid, Box } from "@mui/material";

export default function Section({ topAlbumData, albumName }) {
  const swiperRef = useRef();
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll(!showAll);
  }
  return (
    <>
      <div className={Style.sectionHead}>
        <Typography className={Style.albumName} variant="h5">
          {albumName}
        </Typography>
        {
          showAll ? (<Typography className={Style.btn} variant="h6" onClick={handleClick}>
          Collapse
        </Typography> ) : (<Typography className={Style.btn} variant="h6" onClick={handleClick}>
          Show All
        </Typography>)
        }
      </div>

      {!showAll && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={Style.swiper}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {topAlbumData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Card
                  id={item.id}
                  follows={item.follows}
                  image={item.image}
                  title={item.title}
                />
              </SwiperSlide>
            )
          })}

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
      )}
      {
        showAll && <Box ml={9} my={1}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {topAlbumData.map((item) => {
              return (
                <Grid xs={2} key={item.id} mb={2}>
                  <Card
                    id={item.id}
                    follows={item.follows}
                    image={item.image}
                    title={item.title}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      }
    </>
  );
}
