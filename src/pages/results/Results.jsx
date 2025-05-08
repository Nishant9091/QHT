import React from "react";
import "./Results.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Testimonials from "../../components/Testimonials.jsx";
import ResultBan from "../../assets/results.png";
import bald from "../../assets/bald.png";
import clock from "../../assets/icon/clock.png";
import lr from "../../assets/icon/lr.png";
import katori from "../../assets/icon/katori.png";
import wow from "../../assets/icon/wow.png";
import after from "../../assets/after.png";

const features = [
  "Real Results",
  "Confidence Restored",
  "100% Natural Look",
  "Graft By Graft Procedure",
  "No Visible Scarring",
  "Personalized",
];

const transformations = [
  {
    name: "Vicky",
    grafts: 3000,
    area: "Crown",
    grade: "5/6",
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
  {
    name: "Ankit",
    grafts: 2500,
    area: "Front",
    grade: "4/5",
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
  {
    name: "Aman",
    grafts: 3200,
    area: "Full",
    grade: "6",
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
  {
    name: "Rohit",
    grafts: 2800,
    area: "Front",
    grade: "4/5",
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
  {
    name: "Ravi",
    grafts: 3600,
    area: "Full",
    grade: "6/7",
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
  { promo: true },
  {
    video: true,
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
  {
    name: "Kunal",
    grafts: 3100,
    area: "Crown",
    grade: "5",
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
  {
    name: "Alok",
    grafts: 2900,
    area: "Full",
    grade: "6",
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
  {
    name: "Rakesh",
    grafts: 3400,
    area: "Front",
    grade: "6",
    result: "06 Months",
    beforeImage: after,
    afterImage: after,
  },
];

const Results = () => {
  return (
    <>
      {/* Banner */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <img src={ResultBan} className="w-100" alt="" />
        </div>
      </div>

      {/* marquee */}
      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-content">
            {features.map((item, index) => (
              <span key={index} className="marquee-item">
                {item}
                {index !== features.length - 1 && (
                  <span className="separator"> ◆ </span>
                )}
              </span>
            ))}
            {/* Duplicate content for seamless scrolling */}
            {features.map((item, index) => (
              <span key={`dup-${index}`} className="marquee-item">
                {item}
                {index !== features.length - 1 && (
                  <span className="separator"> ◆ </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="sec-pad" id="result">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-4">
            <h2 className="p-head">Browse Transformation Like Yours</h2>
            <h6 className="border py-1 px-2 rounded text-secondary">1</h6>
          </div>

          {/* Filters */}
          <div className="row border-bottom py-2 sec-c">
            <div className="col-md-2 border-end">
              <button className="btn">
                <i class="fa-solid fa-sliders"></i> &nbsp; Filters
              </button>
            </div>
            <div className="col-md-2 border-end">
              <select className="form-select border-white">
                <option>Baldness Grade</option>
              </select>
            </div>
            <div className="col-md-2 border-end">
              <select className="form-select border-white">
                <option>Area Treated</option>
              </select>
            </div>
            <div className="col-md-2 border-end">
              <select className="form-select border-white">
                <option>Grafts Range</option>
              </select>
            </div>
            <div className="col-md-2 border-end">
              <select className="form-select border-white">
                <option>First-Time Surgery</option>
              </select>
            </div>
            <div className="col-md-2 border-end">
              <select className="form-select border-white">
                <option>Age Group</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          <div className="row g-3 py-5">
            {transformations.map(
              (t, index) =>
                t.name && (
                  <div className="col-md-4 p-3" key={index}>
                    <div className="card h-100 rounded-4">
                      {/* Before-After Slider */}
                      <div className="card-img-top">
                        <ReactCompareSlider
                          style={{ borderRadius: "20px" }}
                          itemOne={
                            <ReactCompareSliderImage
                              src={t.beforeImage}
                              alt="Before"
                            />
                          }
                          itemTwo={
                            <ReactCompareSliderImage
                              src={t.afterImage}
                              alt="After"
                            />
                          }
                        />
                      </div>
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-md-4 border-bottom py-3 sec-c">
                            <p className="card-text ">
                              Grafts :{" "}
                              <span className="text-black">{t.grafts}</span>
                            </p>
                          </div>
                          <div className="col-md-8 border-bottom py-3 sec-c">
                            <p className="card-text ">
                              Grade :{" "}
                              <span className="text-black">{t.grade}</span>
                            </p>
                          </div>
                          <div>
                            <p className="card-text  border-bottom py-3 sec-c">
                              Area :{" "}
                              <span className="text-black">{t.area}</span>
                            </p>
                          </div>
                          <div>
                            <p className="card-text py-3 sec-c">
                              Result :{" "}
                              <span className="text-black">{t.result}</span>
                            </p>
                          </div>
                        </div>
                        <button className="btn btn-outline-dark rounded-pill w-100 mt-2 fs-6">
                          → &nbsp;&nbsp;&nbsp;Click to see full growth timeline
                        </button>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Load More */}
          <div className="d-flex justify-content-center gap-4  align-items-center mt-5">
            <div className="line"></div>
            <div>
              <button className="primary-btn px-5">Load More</button>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      {/* Best */}
      <div className="sec-pad">
        <div className="container sec-c">
          <h2 className="p-head text-black mb-3">
            Best Hair Transplant Clinic in India
          </h2>
          <p>
            When it comes to choosing the best hair transplant clinic in India,
            QHT Clinic consistently ranks at the top. Renowned for its advanced
            techniques, highly experienced surgeons, and exceptional patient
            outcomes, QHT Clinic has become a trusted name in the field of hair
            restoration.
          </p>
          <p>
            At QHT Clinic, patients benefit from the latest innovations such as
            FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation),
            combined with personalized care and state-of-the-art facilities.
            Whether you're dealing with male pattern baldness, thinning hair, or
            seeking beard and eyebrow transplants, QHT Clinic offers customized
            solutions designed to deliver natural, permanent results.
          </p>
          <h6 className="mb-3 mt-4">Why QHT Clinic is the Best</h6>
          <ul>
            <li>Board-certified hair transplant specialists</li>
            <li>High graft survival rate and natural hairline design</li>
            <li>Thousands of satisfied clients from India and abroad</li>
            <li>Hygienic, fully equipped operating suites</li>
            <li>Transparent pricing with no hidden charges</li>
          </ul>
        </div>
      </div>

      {/* Grade */}
      <div className="sec-pad primary-bg">
        <div className="container text-white">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
              <h2 className="p-head text-white fw-normal">
                What’s Your Baldness Grade
              </h2>
              <h6 className="border py-1 px-2 rounded text-secondary fw-light text-white">
                2
              </h6>
            </div>
          </div>

          <div className="row mt-5 ">
            <div className="col-md-6">
              <img src={bald} className="w-75 rounded-3" alt="" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-2 fw-normal">
                Finally, get the right treatment for your hair loss.
              </h3>
              <h6 className="fw-normal my-3">
                <span>
                  <img src={clock} width="20" alt="" />
                </span>
                &nbsp;&nbsp;Takes approximately 1 min
              </h6>
              <h5 className="fw-normal">
                Answer a few questions to see if Keeps is right for you and
                we'll recommend a plan based on your results.
              </h5>
              <ul className="list-unstyled my-4">
                <li className="my-4">
                  <span>
                    <img src={katori} width="40" alt="" />
                  </span>
                  &nbsp;&nbsp;&nbsp;Clinically proven formula
                </li>
                <li className="my-4">
                  <span>
                    <img src={lr} width="40" alt="" />
                  </span>
                  &nbsp;&nbsp;&nbsp;Guidance from hair loss experts
                </li>
                <li className="my-4">
                  <span>
                    <img src={wow} width="40" alt="" />
                  </span>
                  &nbsp;&nbsp;&nbsp;Affordable treatment options
                </li>
              </ul>
              <button className="btn bg-white rounded-pill px-5 mt-3 py-2 primary-c">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </>
  );
};

export default Results;
