import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import { Button } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PopularPlan = () => {
  const jsonData = [
    {
      title: "The New York Trip",
      country: "USA",
      days: 4,
      image:
        "https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?cs=srgb&dl=pexels-kai-pilger-597909.jpg&fm=jpg",
    },
    {
      title: "The Paris Trip",
      country: "USA",
      days: 4,
      image: "https://images2.alphacoders.com/546/546391.jpg",
    },
    {
      title: "The Dubai Trip",
      country: "USA",
      days: 4,
      image:
        "https://mrwallpaper.com/images/hd/dubai-dark-sky-cp602tc58f8i1l8x.jpg",
    },
    {
      title: "The Manali Trip",
      country: "USA",
      days: 4,
      image:
        "https://t4.ftcdn.net/jpg/03/04/01/79/360_F_304017914_06ibltT3eX4UID80q0dSUybLsrfzUubL.jpg",
    },
    {
      title: "The Tokyo Trip",
      country: "USA",
      days: 4,
      image: "https://live.staticflickr.com/547/20332197581_1ab178231d_h.jpg",
    },
    {
      title: "Mumbai Darshan",
      country: "India",
      days: 4,
      image:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww",
    },
  ];
  return (
    <div className="popularPlan-main-div d-flex flex-column">
      <div className="background"></div>
      <div className="inner-div1 d-flex flex-column justify-content-center align-items-center">
        <p className="div-header-text">
          Discover your next favorite destination
        </p>
        <p className="div-header-content-text">
          Get inspired from guides around the world — with expert tips and
          recommendations from the Wanderlog community.{" "}
          <a href="#">See all Wanderlog travel guides.</a>
        </p>
      </div>

      <div className="inner-div2 d-flex justify-content-center align-items-center">
        <div className="swiper-button image-swiper-button-next">
          <IoIosArrowForward />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <IoIosArrowBack />
        </div>
        <Swiper
          slidesPerView={2}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {jsonData.map((item, index) => (
            <SwiperSlide key={index} className="temp2">
              <a href="">
                <div className="swiper-slide-div">
                  <div class="card text-bg-dark">
                    <img src={item.image} class="card-img" alt="..." />
                    <div class="card-img-overlay d-flex flex-column">
                      <div>
                        <p class="card-title">{item.title}</p>
                      </div>
                      <div className="d-flex">
                        <p class="card-text col-9">{item.country}</p>
                        <p class="card-text col-3">{item.days}d</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button as="a" href="#" filled className="exporemore-btn">
          Explore More!
        </Button>
      </div>
    </div>
  );
};

export default PopularPlan;
