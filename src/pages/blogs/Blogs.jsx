import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../blogs/Blogs.css";
import blogimg from "../../assets/blogimg.png";
import Guide from "../../components/Guide";

const categories = [
  "Hair Transplant Techniques",
  "Baldness Grade",
  "Patient Experiences",
  "Hair Care Tips",
  "Scalp & Hair Health",
];

const posts = [
  {
    title: "Best Hair Loss Treatment for Men | QHT Clinic India",
    date: "04th May 2025",
    desc: "Best Hair loss treatment for Men Hair loss though seems a common problem is really distressing...",
    image: blogimg,
    category: "Hair Transplant Techniques",
  },
  {
    title:
      "Success rate of Hair transplant treatment in India: Expert’s Analysis.",
    date: "04th May 2025",
    desc: "Hair transplant in India is increasing in demand in recent times as there has been increasing...",
    image: blogimg,
    category: "Baldness Grade",
  },
  {
    title:
      "What Is the Right Age for a Hair Transplant? Expert Guide for 20s, 30s & 40s",
    date: "04th May 2025",
    desc: "What is a Hair Transplant? hair transplant is a cosmetic surgical procedure which involves the...",
    image: blogimg,
    category: "Baldness Grade",
  },
  {
    title:
      "Success rate of Hair transplant treatment in India: Expert’s Analysis.",
    date: "04th May 2025",
    desc: "Hair transplant in India is increasing in demand in recent times as there has been increasing...",
    image: blogimg,
    category: "Patient Experiences",
  },
  {
    title: "Best Hair Loss Treatment for Men | QHT Clinic India",
    date: "04th May 2025",
    desc: "Best Hair loss treatment for Men Hair loss though seems a common problem is really distressing...",
    image: blogimg,
    category: "Hair Care Tips",
  },
  {
    title:
      "What Is the Right Age for a Hair Transplant? Expert Guide for 20s, 30s & 40s",
    date: "04th May 2025",
    desc: "What is a Hair Transplant? hair transplant is a cosmetic surgical procedure which involves the...",
    image: blogimg,
    category: "Scalp & Hair Health",
  },
];

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

const blogs = () => {
  const [activeCategory, setActiveCategory] = useState("Baldness Grade");

  const filteredPosts = posts.filter(
    (post) => post.category === activeCategory
  );

  return (
    <>
      {/* Banner */}
      <div className="sec-pad bbanner">
        <div className="container just-align-center h-100">
          <div className="row">
            <h1 className="text-white text-center display-3 fw-normal">
              Hair Transplant Insights, <br /> Tips, and Trends
            </h1>
            <h4 className="text-white text-center fw-light">
              Discover expert tips, trends, and insights on hair restoration
              treatments.
            </h4>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div className="sec-pad" id="blogs">
        <div className="container">
          <div className="mb-5 pb-5 border-bottom border-grey d-flex flex-wrap justify-content-between align-items-center gap-2">
            <h4 className="m-0 text-secondary">Categories</h4>
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`btn px-4 ${
                  cat === activeCategory ? "ter-bg text-white" : "border sec-c"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* <hr /> */}

          <div className="row">
            {filteredPosts.map((post, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card border-0 h-100">
                  <img src={post.image} alt="blog" className="card-img-top" />
                  <div className="card-body px-0">
                    <small className="sec-c">{post.date}</small>
                    <h4 className="fw-medium mt-2">{post.title}</h4>
                    <h6 className="sec-c fw-light mt-3 h-100px">{post.desc}</h6>
                    <a href="#" className="primary-c d-block">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Care Guide blogs */}
      <Guide />
    </>
  );
};

export default blogs;
