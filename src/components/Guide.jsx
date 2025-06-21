import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import blogimg from "../assets/blogimg.png";

const guides = [
  {
    title: "Top 10 Trending Hairstyles for Men in 2025",
    date: "04ᵗʰ May 2025",
    desc: "Explore the latest stylish haircuts and grooming trends every man should try this year.",
    image: blogimg,
  },
  {
    title: "Top 10 Trending Hairstyles for Women to Try Today",
    date: "04ᵗʰ May 2025",
    desc: "Discover popular and easy-to-maintain hairstyles perfect for any occasion in 2025.",
    image: blogimg,
  },
  {
    title: "Top 10 Hair Care Tips to Keep Your Hair Healthy and Shiny",
    date: "04ᵗʰ May 2025",
    desc: "What is a Hair Transplant? A hair transplant is a cosmetic surgical procedure which involves the...",
    image: blogimg,
  },
  {
    title: "Top 10 Hair Care Tips to Keep Your Hair Healthy and Shiny",
    date: "04ᵗʰ May 2025",
    desc: "What is a Hair Transplant? A hair transplant is a cosmetic surgical procedure which involves the...",
    image: blogimg,
  },
];

const Guide = () => {
  return (
    <>
      <div className="sec-pad primary-bg" id="guide">
        <div className="container text-white">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="p-head">Hair Care Guides</h2>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {guides.map((guide, idx) => (
              <SwiperSlide key={idx}>
                <div className="card bg-transparent text-white border-0">
                  <img
                    src={guide.image}
                    className="card-img-top rounded"
                    alt="..."
                  />
                  <div className="card-body px-0">
                    <small className="text-parot">{guide.date}</small>
                    <h4 className="fw-normal mt-2">{guide.title}</h4>
                    <h6 className="sec-c fw-light text-white mt-3 h-100px">
                      {guide.desc}
                    </h6>
                    <a href="#" className="primary-c d-block text-parot">
                      Read more
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Guide;
