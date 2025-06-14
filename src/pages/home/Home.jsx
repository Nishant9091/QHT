import React, { useState, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Kapil from "../../assets/kapil.png";
import Anil from "../../assets/anil.png";
import surgery from "../../assets/surgery.png";
import surgery2 from "../../assets/surgery2.png";
import surgery3 from "../../assets/surgery3.png";
import book from "../../assets/book.png";
import after from "../../assets/after.png";
import ban from "../../assets/ban.png";
import Process from "../../assets/process.png";
import Process1 from "../../assets/Process1.png";
import Process2 from "../../assets/Process2.png";
import i1 from "../../assets/icon/1.png";
import i2 from "../../assets/icon/2.png";
import i3 from "../../assets/icon/3.png";
import i4 from "../../assets/icon/4.png";
import i5 from "../../assets/icon/5.png";
import Testimonials from "../../components/Testimonials";
import Booknow from "../../components/Booknow";
import Faqs from "../../components/Faqs";
import Services from "../../components/Services";

const tabs = [
  { id: 0, label: "Who Performs your surgery?" },
  { id: 1, label: "Technology" },
  { id: 2, label: "Graft Handling" },
  { id: 3, label: "Naturalness" },
  { id: 4, label: "Safety" },
];

const Home = () => {
  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const stages = [
    { label: "Consultation", percent: 0, image: Process },
    { label: "Pre-Surgery Prep", percent: 30, image: Process1 },
    { label: "Surgery", percent: 60, image: Process2 },
    { label: "Recovery", percent: 100, image: Process2 },
  ];

  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % stages.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  const [sliderValue, setSliderValue] = useState([50, 50, 50]);

  const getEmoji = (value) => {
    if (value < 25) return "😢";
    if (value < 75) return "😐";
    return "😄";
  };

  const handleSliderChange = (val, index) => {
    const updated = [...sliderValue];
    updated[index] = val;
    setSliderValue(updated);
  };

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(240, 246, 242, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)",
          overflowX: "hidden",
        }}
      >
        {/* Banner */}
        <div className="container pt-4">
          <div
            className="row justify-content-center align-items-center gap-4 gap-md-0 h-fit-content"
            style={{ height: "400px" }}
          >
            <h1
              className="text-center w-md-75 w-100 fw-500 fs-sm-1"
              style={{ fontSize: "50px" }}
            >
              Get your younger looks back <br className="d-none d-md-block" />{" "}
              today with{" "}
              <span className="primary-c">
                {" "}
                hair transplant <br className="d-none d-md-block" /> clinic in
                india.
              </span>
            </h1>
            <h5
              className="text-center w-md-75 w-100 fs-6"
              style={{ color: "#777" }}
            >
              Regain your hair, rebuild confidence, and transform your life with
              expert hair <br className="d-none d-md-block" /> restoration
              solutions tailored to your unique needs
            </h5>
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn text-white rounded-pill p-3 primary-bg"
                style={{ width: "250px" }}
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Celeb Slider */}
        <div className="container-fluid my-md-5 py-5">
          <Swiper
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <img className="rounded-4 w-100" src={Kapil} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="rounded-4 w-100" src={Anil} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="rounded-4 w-100" src={Kapil} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="rounded-4 w-100" src={Anil} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="rounded-4 w-100" src={Kapil} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Truth */}
        <div
          className="container my-4 primary-bg rounded-md-4 p-md-5 pt-5 g-gradient"
          id="truth"
        >
          <h2 className="text-white fs-1 mt-5">The Bald Truth.</h2>
          <h6 className="text-white mb-5 fw-normal">
            Most transplant fail - beacuse no one tells you what really matters.
          </h6>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <div className="d-flex justify-content-center align-items-start">
                  <div>
                    <h1 className="truth-h mx-3">1.</h1>
                  </div>
                  <div>
                    <h2 className="text-white fw-bold h-120 h-fit-content fs-2">
                      70% of hair transplant fail in 3 years.
                    </h2>
                    <h5 className="text-white">
                      Because most clinic chase looks, not longevity.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="d-flex justify-content-center align-items-start">
                  <div>
                    <h1 className="truth-h mx-3">2.</h1>
                  </div>
                  <div>
                    <h2 className="text-white fw-bold h-120 h-fit-content fs-2">
                      Donor hair never grows back once it is removed.
                    </h2>
                    <h5 className="text-white">
                      Bad planning equals permanent loss with no recovery.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="d-flex justify-content-center align-items-start">
                  <div>
                    <h1 className="truth-h mx-3">3.</h1>
                  </div>
                  <div>
                    <h2 className="text-white fw-bold h-120 h-fit-content fs-2">
                      One bad transplant = lifelong regret
                    </h2>
                    <h5 className="text-white">
                      Scars. Fewer grafts. No second chances.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="d-flex justify-content-center align-items-start">
                  <div>
                    <h1 className="truth-h mx-3">1.</h1>
                  </div>
                  <div>
                    <h2 className="text-white fw-bold">
                      70% of hair transplant fail in 3 years.
                    </h2>
                    <h5 className="text-white">
                      Because most clinic chase looks, not longevity.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className='d-flex justify-content-end gap-3 my-5 align-items-center'>
            <div className='bg-white p-3 fw-bold rounded-circle' style={{ transform: "rotate(180deg)" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></div>
            <div className='bg-white p-3 fw-bold rounded-circle'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></div>
          </div> */}
        </div>

        {/* Our Promise */}
        <div className="container my-5">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
              <h2 className="fs-1">Our Promise</h2>
              <h6 className="border py-1 px-2 rounded text-secondary">1</h6>
            </div>
            <div className="col-md-6">
              <h4>
                No shortcuts. No surprises. Just results that last a lifetime.
              </h4>
            </div>
            <div className="col-md-6">
              <ol className="custom-ol">
                <li>
                  <h5> Surgeon-Only Transplants</h5>
                  <p className="text-secondary fs-5">
                    No technicians playing doctor. Every graft placed by
                    certified surgeons only.
                  </p>
                </li>
                <li>
                  <h5> Smart Graft Planning</h5>
                  <p className="text-secondary fs-5">
                    We plan for your future hair loss, not just today's bald
                    spots.
                  </p>
                </li>
                <li>
                  <h5> Natural-Looking Density</h5>
                  <p className="text-secondary fs-5">
                    No pluggy look. No weird hairlines. Just seamless, natural
                    results.
                  </p>
                </li>
                <li>
                  <h5> One-Time Procedure, Lifetime Results</h5>
                  <p className="text-secondary fs-5">
                    We don't build repeat customers. We build permanent
                    confidence.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Surg Slider */}
        <div className="container-fluid my-md-5 py-md-5">
          <Swiper
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <img
                  className="rounded-4 w-100 h-500 object-fit-cover"
                  src={surgery}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="rounded-4 w-100 h-500 object-fit-cover"
                  src={surgery2}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="rounded-4 w-100 h-500 object-fit-cover"
                  src={surgery}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="rounded-4 w-100 h-500 object-fit-cover"
                  src={surgery3}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* See differce */}
        <div className="container py-5 text-center" id="differnce">
          <h2 className="fw-500 fs-1">
            Slide to See the Difference That Matters
          </h2>
          <p className="text-muted fw-500 fs-6">
            Most clinics promise dreams, but we focus on delivering real,
            <br className="d-none d-md-block" /> lifelong transformative
            results.
          </p>

          <div className="d-flex justify-content-center gap-md-5 align-items-center icons mt-5">
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              className="badge"
              title="Who Performs your surgery? "
            >
              <img src={i1} alt="icon1" />
            </div>
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              className="badge"
              title="Who Performs your surgery? "
            >
              <img src={i2} alt="icon2" />
            </div>
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              className="badge"
              title="Who Performs your surgery? "
            >
              <img src={i3} alt="icon3" />
            </div>
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              className="badge"
              title="Who Performs your surgery? "
            >
              <img src={i4} alt="icon4" />
            </div>
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              className="badge"
              title="Who Performs your surgery? "
            >
              <img src={i5} alt="icon5" />
            </div>
          </div>
          {/* Tabs */}
          {/* <div className="d-flex justify-content-center gap-4 mt-4 mb-5">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                className={`circle-tab btn ${activeTab === idx ? 'active-tab' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="circle-label">{idx + 1}</span>
              </button>
            ))}
          </div> */}

          {/* Content Box */}
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white rounded-5 border p-4 mt-4 w-md-75">
              {[...Array(3)].map((_, i) => {
                return (
                  <div
                    className="row align-items-center my-4 border-bottom emoji"
                    key={i}
                  >
                    <div className="col-md-3 my-4 text-end px-5">
                      <p className="fw-semibold mb-0 text-muted fw-bold">
                        Most Clinics ❎
                      </p>
                      <small className="text-muted text-light">
                        Technicians, not <br /> surgeons
                      </small>
                    </div>

                    <div className="col-md-6 my-4 position-relative">
                      <div
                        className="comparison-bar position-relative"
                        style={{
                          height: "6px",
                          background: "#e2e6de",
                          borderRadius: "3px",
                        }}
                      >
                        <div
                          className="fill-line"
                          style={{
                            width: `${sliderValue[i]}%`,
                            height: "6px",
                            backgroundColor: "#5c6e4a",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "3px",
                          }}
                        ></div>

                        <div
                          className="smiley"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: `${sliderValue[i]}%`,
                            transform: "translate(-50%, -50%)",
                            background: "white",
                            borderRadius: "50%",
                            padding: "6px",
                            fontSize: "20px",
                            boxShadow: "0 0 6px rgba(0,0,0,0.15)",
                            zIndex: 2,
                          }}
                        >
                          {getEmoji(sliderValue[i])}
                        </div>

                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderValue[i]}
                          onChange={(e) =>
                            handleSliderChange(Number(e.target.value), i)
                          }
                          style={{
                            position: "absolute",
                            top: "-12px",
                            left: 0,
                            width: "100%",
                            height: "30px",
                            background: "transparent",
                            zIndex: 3,
                            WebkitAppearance: "none",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3 my-4 text-start px-5">
                      <p className="fw-semibold primary-c fw-bold mb-0">
                        QHT PROMISE ✅
                      </p>
                      <small>
                        Only experienced <br /> touch your scalp.
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev/Next Buttons */}
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-between w-75 mt-4">
              <button
                className="btn text-white rounded-pill px-4"
                style={{ backgroundColor: "#C7C7C7" }}
                onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
              >
                « &nbsp;&nbsp;&nbsp; PREV
              </button>
              <button
                className="btn primary-bg text-white rounded-pill px-4"
                onClick={() =>
                  setActiveTab((prev) => Math.min(tabs.length - 1, prev + 1))
                }
              >
                NEXT &nbsp;&nbsp;&nbsp; »
              </button>
            </div>
          </div>
        </div>

        {/* Process */}
        <div id="process" className="py-5">
          <div className="container py-md-5">
            <div className="text-center mb-4">
              <h2 className="fs-1 fw-500">A Team of Experts, Focused on You</h2>
              <p className="text-muted fw-500 mt-3 mb-5 fs-6">
                Hair restoration <strong>isn’t a one-person job</strong>. At
                QHT, a team of seasoned specialists — from surgeons to nurses —{" "}
                <br />
                works in sync to give you natural, lasting results with zero
                compromise.
              </p>
            </div>

            {/* Timeline */}
            <div
              className="position-relative mb-5 mx-5"
              style={{ height: "100px" }}
            >
              {/* Moving Label (Top Center) */}
              <div
                className="position-absolute translate-middle-x text-center"
                style={{
                  top: "-10%",
                  left: `${stages[stageIndex].percent}%`,
                  transition: "left 0.5s ease-in-out",
                  zIndex: 2,
                }}
              >
                <div className="badge primary-bg p-2 px-3 fs-6 text-white fw-normal rounded-1 tag-box">
                  {stages[stageIndex].label}
                </div>
              </div>

              {/* Progress Bar (Middle) */}
              <div
                className="position-absolute start-0 end-0"
                style={{
                  top: "40%",
                }}
              >
                <div
                  className="progress"
                  style={{ height: "8px", backgroundColor: "#D5E6C3" }}
                >
                  <div
                    className="progress-bar primary-bg primary-c"
                    role="progressbar"
                    style={{
                      width: `${stages[stageIndex].percent}%`,
                      transition: "width 0.5s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>

              {/* Percentage (Bottom Center) */}
              <div
                className="position-absolute translate-middle-x text-center"
                style={{
                  top: "55%",
                  left: `${stages[stageIndex].percent}%`,
                  transition: "left 0.5s ease-in-out",
                }}
              >
                <div className="text-af">|</div>
                <div className="small fw-semibold text-af">
                  {stages[stageIndex].percent}%
                </div>
              </div>
            </div>

            {/* Image for Current Stage */}
            <div className="row g-4 justify-content-center">
              <img
                src={stages[stageIndex].image}
                alt="Stage"
                className="img-fluid w-75"
              />
            </div>
          </div>
        </div>

        {/* Img */}
        <div className="container-fluid p-0">
          <div className="row">
            <img src={ban} className="w-100" alt="" />
          </div>
        </div>

        <Services />

        {/* Result */}
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-5">
              <h2 className="p-head">Regrowth Gallery</h2>
              <h6 className="border py-1 px-2 rounded text-secondary">3</h6>
            </div>
            <div className="col-md-4">
              <h4 className="fs-2">
                Every ‘before’ has an ‘after’ see how we bring hairlines (and
                smiles) back.
              </h4>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <ReactCompareSlider
                style={{ borderRadius: "20px" }}
                itemOne={<ReactCompareSliderImage src={after} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={after} alt="After" />}
              />
            </div>
            <div className="col-md-4">
              <ReactCompareSlider
                style={{ borderRadius: "20px" }}
                itemOne={<ReactCompareSliderImage src={after} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={after} alt="After" />}
              />
            </div>
            <div className="text-md-end text-center my-5">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn text-white rounded-pill px-4 py-2"
                style={{ backgroundColor: "#627251" }}
                data-bs-toggle="modal"
                data-bs-target="#resultsModal"
              >
                Explore More Results +
              </button>

              {/* Modal */}
              <div
                className="modal fade"
                id="resultsModal"
                tabIndex="-1"
                aria-labelledby="resultsModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered gallery-model mx-md-auto">
                  <div className="modal-content text-start p-md-5">
                    <div className="modal-header border-none">
                      <h2 className="modal-title" id="resultsModalLabel">
                        Hair Transplant Gallery
                      </h2>
                      <button
                        type="button"
                        className="btn-close close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row justify-content-start gap-4 gap-md-0 border-bottom pb-5">
                        <h4 className="pb-3">Grade I (3)</h4>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-start gap-4 gap-md-0 border-bottom py-5">
                        <h4 className="pb-3">Grade II (2)</h4>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-start gap-4 gap-md-0 border-bottom py-5">
                        <h4 className="pb-3">Grade III (3)</h4>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-start gap-4 gap-md-0 border-bottom py-5">
                        <h4 className="pb-3">Grade IV (2)</h4>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-start gap-4 gap-md-0 border-bottom py-5">
                        <h4 className="pb-3">Grade V (3)</h4>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-start gap-4 gap-md-0 border-bottom py-5">
                        <h4 className="pb-3">Grade VI (1)</h4>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-start gap-4 gap-md-0 pt-5">
                        <h4 className="pb-3">Grade VII (3)</h4>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <ReactCompareSlider
                            style={{ borderRadius: "20px" }}
                            itemOne={
                              <ReactCompareSliderImage
                                src={after}
                                alt="Before"
                              />
                            }
                            itemTwo={
                              <ReactCompareSliderImage
                                src={after}
                                alt="After"
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book */}
        <div
          className="sec-pad"
          id="book"
          style={{ backgroundColor: "#627251" }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Left side - Books Image */}
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src={book}
                  alt="Hair Transplant Guide 1"
                  className="animate-book w-100"
                />
              </div>

              {/* Right side - Text + Form */}
              <div className="col-md-6 text-white">
                <h2 className="fw-bold mb-4">
                  Thinking About a Hair <br /> Transplant? Read This First.
                </h2>
                <p className="mb-4" style={{ lineHeight: 1.6 }}>
                  A free doctor-reviewed guide that answers all your questions
                  about cost, results, pain, recovery, and more.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">• See real patient transformations</li>
                  <li className="mb-2">• Know what to expect – step-by-step</li>
                  <li className="mb-2">
                    • Get expert tips to avoid bad results
                  </li>
                </ul>

                {/* Simple Form */}
                <form className="d-flex flex-column flex-md-row align-items-center gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control border-none bg-transparent text-white border-bottom rounded-0"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control border-none bg-transparent text-white border-bottom rounded-0"
                  />
                  <button
                    type="submit"
                    className="btn btn-light rounded-pill px-4 py-2 w-100"
                    style={{ color: "#627251", width: "500px" }}
                  >
                    Download Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <Faqs />

        {/* Actions */}
        <div id="action">
          <div className="container">
            <h1 className="text-white fw-bold">Time To Take Action</h1>
            <h4 className="text-white text-center fw-normal mx-4 mt-3 mb-4">
              It’s time to invest in yourself and your confidence. Take the
              first step toward fuller, healthier hair with a treatment plan
              tailored just for you. Your journey to transformation begins
              today.
            </h4>
            <button className="btn rounded-pill bg-white px-4 py-3 fw-normal">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
