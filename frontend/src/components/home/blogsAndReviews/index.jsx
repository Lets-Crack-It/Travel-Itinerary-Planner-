import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogAndReview = () => {
  const jsonData = [
    {
      rating: 5,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
    {
      rating: 3.5,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
    {
      rating: 3,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
    {
      rating: 4,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
    {
      rating: 1,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
    {
      rating: 0,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
    {
      rating: 3,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
    {
      rating: 3,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
    {
      rating: 3,
      name: "temp1",
      feedback:
        "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
      profile_url:
        "https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="star">&#9733;</span>); // Full star
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); // Empty star
      }
    }
    return stars;
  };
  
  return (
    <div className="blog-main-container d-flex flex-column jusify-content-center align-items-center">
      <div className="blog-inner-div1 d-flex flex-column justify-content-center align-items-center">
        <p className="div-header-text">What travelers are rating about</p>
      </div>
      <div className="blog-inner-div2 d-flex flex-column justify-content-center align-items-center">
        <div className="swiper-button image-swiper-button-next">
          <IoIosArrowForward />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <IoIosArrowBack />
        </div>
        <Swiper
          // slidesPerView={2}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          breakpoints={{
            410: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            610: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            890: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1190: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {jsonData.map((item, index) => (
            <SwiperSlide>
              <a href="">
                <div className="swiper-slide-div">
                  <div class="card ">
                    <div class="card-img-overlay d-flex flex-column ">
                      <div className="">
                      <div className="stars">{renderStars(item.rating)}</div>
                      </div>
                      <div className="d-flex review-content">
                        <p>{item.feedback}</p>
                      </div>
                      <div className="d-flex revier-detail">
                        <img
                          className="picture"
                          src={item.profile_url}
                          alt="Profile"
                        />
                        <p className="reviwer-name">{item.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogAndReview;
