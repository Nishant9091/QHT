import React, { useState } from "react";
import "./Service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Testimonials from "../../components/Testimonials.jsx";
import QuickForm from "../../components/QuickForm.jsx";
import Bangalore from "../../assets/city/bangalore.png";
import Ahmedabad from "../../assets/city/ahmedabad.png";
import Chandigarh from "../../assets/city/chandigarh.png";
import Chennai from "../../assets/city/chennai.png";
import Gurgaon from "../../assets/city/gurgaon.png";
import Hairdwar from "../../assets/city/hairdwar.png";
import Hyderabad from "../../assets/city/hyderabad.png";
import Indore from "../../assets/city/indore.png";
import Jaipur from "../../assets/city/jaipur.png";
import Kolkata from "../../assets/city/kolkata.png";
import Lucknow from "../../assets/city/lucknow.png";
import Mumbai from "../../assets/city/mumbai.png";
import Noida from "../../assets/city/noida.png";
import Pune from "../../assets/city/pune.png";
import Rishikesh from "../../assets/city/rishikesh.png";
import S1 from "../../assets/s1.png";
import S2 from "../../assets/s2.png";
import S3 from "../../assets/s3.png";
import Llogo from "../../assets/llogo.png";
import Booked from "../../assets/booked.png";
import Men from "../../assets/men.png";
import Psurgery from "../../assets/psurgery.png";
import Natural from "../../assets/natural.png";
import Care from "../../assets/care.png";
import Expert from "../../assets/expert.png";
import Facility from "../../assets/facility.png";
import Celeb from "../../assets/celeb.png";
import Age from "../../assets/icon/age.png";
import Alopecia from "../../assets/icon/alopecia.png";
import Genetics from "../../assets/icon/genetics.png";
import Hormonal from "../../assets/icon/hormonal.png";
import Scarring from "../../assets/icon/scarring.png";
import GoogleRating from "../../assets/GoogleRating.png";
import TwoFace from "../../assets/twoface.png";
import Banner from "../../assets/banner.png";
import D1 from "../../assets/d1.png";
import D2 from "../../assets/d2.png";
import Question from "../../assets/question.png";
import FUE from "../../assets/fue.jpg";
import Cost from "../../assets/icon/cost.png";
import Graft from "../../assets/icon/graft.png";
import Result from "../../assets/icon/result.png";
import Time from "../../assets/icon/time.png";
import beforeAfterImage from "../../assets/procedure.png";
import Bijli from "../../assets/icon/bijli.png";
import alchol from "../../assets/icon/alchol.png";
import hairwash from "../../assets/icon/hairwash.png";
import glass from "../../assets/icon/glass.png";
import cut from "../../assets/icon/cut.png";
import doctor from "../../assets/icon/doctor.png";
import graftp from "../../assets/icon/graftp.png";
import bald from "../../assets/icon/bald.png";
import location from "../../assets/icon/location.png";
import GetInTouch from "../../components/GetInTouch.jsx";
import Videos from "../../components/Videos.jsx";
import Results from "../../components/Results.jsx";

const cities = [
  { name: "Bangalore", img: Bangalore },
  { name: "Kolkata", img: Kolkata },
  { name: "Hyderabad", img: Hyderabad },
  { name: "Chennai", img: Chennai },
  { name: "Mumbai", img: Mumbai },
  { name: "Ahmedabad", img: Ahmedabad },
  { name: "Jaipur", img: Jaipur },
  { name: "Indore", img: Indore },
  { name: "Noida", img: Noida },
  { name: "Lucknow", img: Lucknow },
  { name: "Chandigarh", img: Chandigarh },
  { name: "Gurgaon", img: Gurgaon },
  { name: "Pune", img: Pune },
  { name: "Rishikesh", img: Rishikesh },
  { name: "Haridwar", img: Hairdwar },
];

const clinicsData = [
  {
    title: "Celebrity Clinic",
    description:
      "QHT is a celebrity hair transplant clinic in India with a proven track record of delivering exceptional results.",
    bg: Celeb,
  },
  {
    title: "Expertise",
    description:
      "With years of experience and expertise in hair transplantation, our hair transplant surgeon ensures that each patient receives personalized care and the best possible outcome.",
    bg: Expert,
  },
  {
    title: "Natural Looking Results",
    description:
      "Our skilled surgeon’s artistic approach and attention to detail result in natural-looking hairlines and fuller, thicker hair.",
    bg: Natural,
  },
  {
    title: "State of the Art Facility",
    description:
      "Our clinic is equipped with cutting-edge technology and modern facilities to provide patients with a comfortable and seamless experience throughout their hair transplant journey.",
    bg: Facility,
  },
  {
    title: "Comprehensive Care",
    description:
      "From the initial consultation to post-transplant follow-up, our team at QHT Clinic is dedicated to providing extensive care and support.",
    bg: Care,
  },
  {
    title: "",
    description: "",
    bg: Care,
  },
];

const benefits = [
  {
    icon: Graft,
    title: "Permanent Hair Transplant For Lasting Results",
    description:
      "Hair transplant provides a long-term solution for hair loss as transplanted follicles continue to grow naturally.",
  },
  {
    icon: Cost,
    title: "Cost-Effective Hair Solution That Saves Money",
    description:
      "Despite initial expenses, hair transplant proves cost-effective over time, eliminating the need for ongoing treatments or products.",
  },
  {
    icon: Result,
    title: "Natural Looking Results With Real Hair",
    description:
      "Unlike other methods, hair transplant yields natural-looking outcomes, seamlessly blending with your existing hair.",
  },
  {
    icon: Time,
    title: "Quick Recovery After Hair Transplant Procedure",
    description:
      "Patients typically resume normal activities within days post-transplant, with full results visible in months.",
  },
];

const steps = [
  {
    title: "Consultation & Assessment",
    description:
      "A thorough evaluation of hair loss and donor area suitability is done.",
    number: "01",
  },
  {
    title: "Donor Hair Extraction",
    description:
      "Follicles are harvested from the donor area using methods like FUE or FUT.",
    number: "02",
  },
  {
    title: "Recovery & Aftercare",
    description:
      "Post-procedure instructions are provided for healing, hair growth, and maintenance.",
    number: "03",
  },
  {
    title: "Preparation & Implantation",
    description:
      "Follicles are prepared and implanted precisely into thinning or bald scalp areas.",
    number: "04",
  },
];

const Service = () => {
  return (
    <>
      {/* Float Button */}
      {/* <Booknow /> */}

      {/* Banner */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <div className="row">
            <div
              id="dottedCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Banner} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src={Banner} className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src={Banner} className="d-block w-100" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                  <img src={Banner} className="d-block w-100" alt="Slide 3" />
                </div>
              </div>

              {/* Indicators (dots) */}
              <div className="carousel-indicators position-static m-0 justify-content-start">
                <button
                  type="button"
                  data-bs-target="#dottedCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#dottedCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#dottedCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#dottedCarousel"
                  data-bs-slide-to="3"
                  aria-label="Slide 3"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickForm />

      {/* Description */}
      <div className="sec-pad">
        <div className="container mt-md-5 sec-c">
          <div className="row">
            <div className="col-md-6 just-align-center flex-column align-items-start">
              <h2 className="p-head text-black m-0">
                What is a Hair Transplant?
              </h2>
              <h3 className="fw-normal text-black my-3">
                Restore your hairline naturally with expert transplant
                solutions.
              </h3>
              <p>
                A hair transplant is a surgical procedure in which hair
                follicles are moved from the back or sides of the scalp to the
                thinning or balding areas. This process helps restore your
                natural receding hairline and adds density  to areas affected by
                hair loss.
              </p>
              <p>
                It’s a popular solution for men looking to regain their
                confidence and achieve a fuller head of hair. The results are
                natural-looking and permanent. This makes it a reliable choice
                for hair replacement treatment for men.
              </p>
            </div>
            <div className="col-md-6 just-align-center">
              <img src={D1} className="w-md-75 w-100 rounded-4" alt="" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 just-align-center">
              <img src={D2} className="w-md-75 w-100 rounded-4" alt="" />
            </div>
            <div className="col-md-6 just-align-center flex-column align-items-start">
              <h2 className="p-head text-black mt-4 mt-md-0">
                Hair Transplant In India?
              </h2>
              <p>
                Hair loss is a common issue among men, with over
                60% experiencing significant hair loss by age 50. If you’re
                seeking an effective way to address this problem, a hair
                transplant for men in India might be your solution.
              </p>
              <p>
                At QHT Hair Transplant Clinic in India, we understand the
                emotional and psychological impact of hair loss. Our team of
                dedicated hair transplant professionals offers
                comprehensive hair treatment for men, using advanced techniques
                to ensure natural-looking results.
              </p>
              <p className="fw-bold">
                Now, let’s have a quick overview of hair transplantation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Results />

      {/* Who is ideal */}
      <div className="sec-pad">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="p-head">
                Who is an ideal candidate? <br />
                for hair transplant.
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="fw-light sec-c">
                An ideal candidate for a hair transplant typically has stable
                hair loss, sufficient donor hair, is in good overall health, and
                desires a long-term, natural-looking solution to restore
                thinning or balding areas.
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img src={Question} className="w-75" alt="" />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="border rounded-3 p-3 h-100">
                    <div className="me-3 text-white primary-bg fw-light rounded-circle just-align-center hw-20 fs-6 mb-3 p-3">
                      ✔
                    </div>
                    <h4 className="fw-500">Stable Hair Loss</h4>
                    <p className="text-muted small">
                      Candidates should have stable or progressive hair loss
                      instead of active shedding, leading to more predictable
                      results.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="border rounded-3 p-3 h-100">
                    <div className="me-3 text-white primary-bg fw-light rounded-circle just-align-center hw-20 fs-6 mb-3 p-3">
                      ✔
                    </div>
                    <h4 className="fw-500">Sufficient Donor Hair</h4>
                    <p className="text-muted small">
                      A healthy donor area with adequate hair density is
                      necessary for effective grafting.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="border rounded-3 p-3 h-100">
                    <div className="me-3 text-white primary-bg fw-light rounded-circle just-align-center hw-20 fs-6 mb-3 p-3">
                      ✔
                    </div>
                    <h4 className="fw-500">Good Overall Health</h4>
                    <p className="text-muted small">
                      Good health is essential, with no underlying medical
                      issues that could hinder healing or hair growth.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="border rounded-3 p-3 h-100">
                    <div className="me-3 text-white primary-bg fw-light rounded-circle just-align-center hw-20 fs-6 mb-3 p-3">
                      ✔
                    </div>
                    <h4 className="fw-500">Absence of Scalp Conditions</h4>
                    <p className="text-muted small">
                      Candidates should not have active scalp issues, such as
                      infections or inflammation, that might complicate the
                      procedure.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="row mx-1 p-5 rounded-4 bg-qu">
                    <div className="col-md-8">
                      <h5 className="text-white">Still Confused?</h5>
                      <h3 className="text-white">Talk to our experts</h3>
                    </div>
                    <div className="col-md-4 just-align-center">
                      <button className="primary-btn bg-white text-black px-4">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="p-head text-center">Types of Hair Transplant</h2>
            <h5 className="sec-c fw-light text-center w-md-75 my-3">
              As you explore male hair transplant options, it’s essential to
              understand the different techniques available. Here are the main
              types:
            </h5>
          </div>

          <div className="row mt-5 gap-5 gap-md-0">
            <div className="col-md-4">
              <h4>Follicular Unit Extraction (FUE)</h4>
              <p>
                Minimally invasive technique extracting individual hair
                follicles precisely.
              </p>
              <img src={FUE} className="w-100 rounded-4 mt-3 mb-4" alt="" />
              <ul>
                <li>Follicles extracted then implanted into thinning areas.</li>
                <li>Minimally invasive, leaves tiny, hardly visible scars.</li>
                <li>Shorter recovery time compared to other methods.</li>
              </ul>
              <button className="btn border border-grey rounded-pill px-4 bg-transparent sec-c">
                Read more
              </button>
            </div>
            <div className="col-md-4">
              <h4>Follicular Unit Extraction (FUE)</h4>
              <p>
                Minimally invasive technique extracting individual hair
                follicles precisely.
              </p>
              <img src={FUE} className="w-100 rounded-4 mt-3 mb-4" alt="" />
              <ul>
                <li>Follicles extracted then implanted into thinning areas.</li>
                <li>Minimally invasive, leaves tiny, hardly visible scars.</li>
                <li>Shorter recovery time compared to other methods.</li>
              </ul>
              <button className="btn border border-grey rounded-pill px-4 bg-transparent sec-c">
                Read more
              </button>
            </div>
            <div className="col-md-4">
              <h4>Follicular Unit Extraction (FUE)</h4>
              <p>
                Minimally invasive technique extracting individual hair
                follicles precisely.
              </p>
              <img src={FUE} className="w-100 rounded-4 mt-3 mb-4" alt="" />
              <ul>
                <li>Follicles extracted then implanted into thinning areas.</li>
                <li>Minimally invasive, leaves tiny, hardly visible scars.</li>
                <li>Shorter recovery time compared to other methods.</li>
              </ul>
              <button className="btn border border-grey rounded-pill px-4 bg-transparent sec-c">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benifits */}
      <div className="g-gradient sec-pad">
        <div className="container">
          <div className="row border-bottom pb-5">
            <div className="col-md-9">
              <h2 className="p-head text-white">Benefits of Hair Transplant</h2>
              <h5 className="mt-3 text-white fw-light lh-base">
                Hair transplant restores natural hair growth, boosts confidence,
                offers permanent results, and requires minimal maintenance
                long-term.
              </h5>
            </div>
          </div>

          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="row align-items-center py-5 border-bottom"
            >
              <div className="col-md-2">
                <img
                  src={item.icon}
                  alt={`icon-${idx}`}
                  className="w-md-75 mb-4 mb-md-0 w-25"
                />
              </div>
              <div className="col-md-4">
                <h4 className="fw-normal text-white lh-base">{item.title}</h4>
              </div>
              <div className="col-md-6">
                <h5 className="text-white fw-light lh-base">
                  {item.description}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Procedure */}
      <div className="sec-pad">
        <div className="container py-md-5">
          <div className="row mb-4 justify-content-between">
            <div className="col-md-6">
              <h2 className="p-head">
                Procedure Used For Hair Transplant In India
              </h2>
              <h5 className="sec-c fw-normal">
                Hair transplant involves extracting follicles from a donor area
                and implanting them into thinning spots, using methods like FUT,
                FUE, and DHI for natural, permanent results.
              </h5>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6 col-6">
                  <div className="hw-200 rounded-4 text-start border rounded p-4">
                    <h2
                      className="primary-c fw-normal"
                      style={{ fontSize: "70px" }}
                    >
                      05
                    </h2>
                    <h4 className="primary-c">Week Recovery</h4>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="hw-200 rounded-4 text-start border rounded p-4">
                    <img src={Bijli} className="w-25" alt="" />
                    <h4 className="primary-c mt-4">Minimal Pain</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 align-items-center">
            <div className="col-md-5 text-md-start text-center justify-content-between">
              <img
                src={beforeAfterImage}
                alt="Before and After"
                className="img-fluid w-md-75 mb-5"
              />
              <button className="primary-btn px-4 mb-5 mb-md-0 mt-5">
                Book Free Consultation
              </button>
            </div>
            <div className="col-md-7 border-bottom">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="d-flex justify-content-between align-items-start border-top py-5"
                >
                  <div>
                    <h4 className="fw-500">{step.title}</h4>
                    <p className="sec-c">{step.description}</p>
                  </div>
                  <h2 className="hollow-number">{step.number}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Procedure tip */}
      <div className="sec-pad pt-5">
        <div className="container border-top border-lgrey pt-5">
          <div className="row pt-0 pt-md-5">
            <div className="col-md-5">
              <h2 className="p-head">Pre Procedure Tips</h2>
            </div>
            <div className="col-md-7">
              <h5 className="fw-normal sec-c">
                The cost of hair transplants in India varies depending on
                factors like clinic reputation, surgeon experience, location,
                and the type of procedure (FUE, FUT). On average, prices range
                from.
              </h5>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-3 border-x border-lgrey px-md-5 px-3">
              <img src={glass} alt="" />
              <h4>Medical Evaluation</h4>
              <p className="sec-c">
                Assess overall health and scalp condition.
              </p>
            </div>
            <div className="col-md-3 border-x border-lgrey px-md-5 px-3">
              <img src={cut} alt="" />
              <h4>Avoid Blood Thinners</h4>
              <p className="sec-c">
                Stop medications that increase bleeding risk.
              </p>
            </div>
            <div className="col-md-3 border-x border-lgrey px-md-5 px-3">
              <img src={alchol} alt="" />
              <h4>No Smoking or Alcohol</h4>
              <p className="sec-c">
                Prevent healing complications and poor graft survival.
              </p>
            </div>
            <div className="col-md-3 border-x border-lgrey px-md-5 px-3">
              <img src={hairwash} alt="" />
              <h4>Hair Wash & Scalp Cleanliness</h4>
              <p className="sec-c">Ensure a clean scalp before surgery day.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost */}
      <div className="sec-pad sec-bg" id="Cost">
        <div className="container">
          <h2 className="p-head mb-4"></h2>
          <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
            <h2 className="p-head">Hair Transplant Cost In India</h2>
            <h6 className="border py-1 px-2 rounded text-secondary">5</h6>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <p className="sec-c">
                The cost of hair transplants in India varies depending on
                factors like clinic reputation, surgeon experience, location,
                and the type of procedure (FUE, FUT). On average, prices range
                from ₹30,000 to ₹1,50,000 for a session. Clinics in metro cities
                like Delhi, Mumbai, and Bangalore may charge higher rates, but
                the overall cost remains affordable compared to international
                standards, without compromising quality.
              </p>
              <div className="mt-5">
                <span className="d-none d-md-flex fs-1 sec-c border hw-100 border-secondary just-align-center rounded-circle">
                  ↓
                </span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="bg-white rounded-4 px-3 shadow-sm">
                <table className="table table-borderless mb-0">
                  <thead>
                    <tr>
                      <th className="fs-5 fw-semibold border-end">
                        Type of hair transplant
                      </th>
                      <th className="fs-5 fw-semibold">
                        Approximate Cost (INR)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-end">
                        Follicular Unit Extraction (FUE)
                      </td>
                      <td className="sec-c">30,000 – 1,50,000</td>
                    </tr>
                    <tr>
                      <td className="border-end">
                        Follicular Unit Transplantation (FUT)
                      </td>
                      <td className="sec-c">25,000 – 1,25,000</td>
                    </tr>
                    <tr>
                      <td className="border-end">
                        Direct Hair Implantation (DHI)
                      </td>
                      <td className="sec-c">40,000 – 2,00,000</td>
                    </tr>
                    <tr>
                      <td className="border-end">Robotic Hair Transplant</td>
                      <td className="sec-c">75,000 – 3,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-5">
              <h3>
                Factors affecting <br /> the cost of hair transplant
              </h3>
            </div>
            <div className="col-md-6">
              <h6 className="sec-c fw-normal">
                The cost of hair transplants in India varies depending on
                factors like clinic reputation, surgeon experience, location,
                and the type of procedure (FUE, FUT). On average, prices range
                from.
              </h6>
            </div>
          </div>

          <div className="row align-items-center my-5">
            <div className="col-md-3 text-start border-lgrey px-md-5 px-3">
              <img
                src={doctor}
                alt="Surgeon Icon"
                className="mb-3 hw-100 object-fit-contain"
              />
              <h5 className="fw-500">Surgeon's Skill and Experience</h5>
              <p className="text-muted small">
                Experienced surgeons charge more for precision, expertise, and
                proven results.
              </p>
            </div>
            <div className="col-md-3 text-start border-x border-lgrey px-md-5 px-3">
              <img
                src={bald}
                alt="Technique Icon"
                className="mb-3 hw-100 object-fit-contain"
              />
              <h5 className="fw-500">Hair Transplant Technique Chosen</h5>
              <p className="text-muted small">
                FUE and FUT vary in complexity, effectiveness, and pricing for
                hair transplant procedures.
              </p>
            </div>
            <div className="col-md-3 text-start border-x border-lgrey px-md-5 px-3">
              <img
                src={graftp}
                alt="Grafts Icon"
                className="mb-3 hw-100 object-fit-contain"
              />
              <h5 className="fw-500">Total Grafts Transplant Needed</h5>
              <p className="text-muted small">
                More grafts raise cost due to longer procedure time, resources,
                and expertise.
              </p>
            </div>
            <div className="col-md-3 text-start border-lgrey px-md-5 px-3">
              <img
                src={location}
                alt="Clinic Icon"
                className="mb-3 hw-100 object-fit-contain"
              />
              <h5 className="fw-500">Clinic Location and Facilities</h5>
              <p className="text-muted small">
                Metro clinics charge more for advanced facilities, services, and
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why we are */}
      <div className="primary-bg sec-pad text-white">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-8">
              <h2 className="p-head">
                Why we are amongst the most trusted <br />
                hair transplant clinic in india
              </h2>
              <p className="mt-3 text-white">
                Learn about the recovery timeline and essential aftercare tips
                following a hair transplant to ensure proper healing, optimal
                results, and long-lasting, healthy hair growth.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <img
                src={GoogleRating}
                alt="Google Rating"
                className="img-fluid w-75"
              />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-center flex-column d-flex">
              <img
                src={TwoFace}
                alt="Transplant illustration"
                className="img-fluid"
                style={{ maxWidth: "350px" }}
              />
              <button className="btn btn-light rounded-pill mt-5 px-4 py-2 fw-medium w-md-50">
                Book Free Consultation
              </button>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="row g-4">
                {[
                  { value: "325+", label: "Transplant Completed" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "05+", label: "Clinics All Over India" },
                  { value: "200+", label: "Experts Workforces" },
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <h3 className="peacock fw-500 fs-2">{item.value}</h3>
                    <h4 className="fw-normal fs-4">{item.label}</h4>
                    <p className="text-white small">
                      Over 325 successful transplants completed with expert care
                      and precision.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Videos />

      {/* Cause */}
      <div className="sec-pad pt-0">
        <div className="container pt-5 border-grey border-top">
          <div className="row">
            <div className="col-md-4 just-align-center flex-column">
              <h2 className="p-head">Cause of Early Hair Loss.</h2>
              <h5 className="sec-c fw-normal my-3">
                Understanding the causes of beard hair loss can help you choose
                the proper treatment. Several factors contribute to thinning or
                patchy beard hair:
              </h5>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-5 sec-bg rounded-4 h-350">
                <img src={Genetics} className="mb-5" alt="" />
                <h4>Genetics</h4>
                <h6 className="sec-c fw-normal">
                  Just like scalp hair, the density and pattern of your beard
                  are primarily determined by your genetic makeup. If your
                  family has a history of sparse beards, you might experience
                  the same.
                </h6>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-5 sec-bg rounded-4 h-350">
                <img src={Hormonal} className="mb-5" alt="" />
                <h4>Hormonal Imbalances</h4>
                <h6 className="sec-c fw-normal">
                  Low levels of certain hormones, such as testosterone, can lead
                  to patchy beard growth.
                </h6>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-5 sec-bg rounded-4 h-350">
                <img src={Age} className="mb-5" alt="" />
                <h4>Age</h4>
                <h6 className="sec-c fw-normal">
                  As you age, beard growth can slow down, resulting in a thinner
                  beard over time.
                </h6>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-5 sec-bg rounded-4 h-350">
                <img src={Alopecia} className="mb-5" alt="" />
                <h4>Alopecia Areata</h4>
                <h6 className="sec-c fw-normal">
                  This autoimmune condition can cause hair loss in various
                  areas, including the beard.
                </h6>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-5 sec-bg rounded-4 h-350">
                <img src={Scarring} className="mb-5" alt="" />
                <h4>Scarring or Injury</h4>
                <h6 className="sec-c fw-normal">
                  Trauma to the face can damage hair follicles, leading to
                  patchy growth.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="sec-pad g-gradient">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-5">
              <h2 className="p-head text-white">
                Why choose QHT hair transplant?
              </h2>
            </div>
            <div className="col-md-7">
              <h5 className="text-white fw-light">
                QHT Hair Transplant offers advanced techniques, natural results,
                minimal downtime, and expert care for lasting confidence.
              </h5>
            </div>
          </div>
          <div className="row">
            {clinicsData.map((clinic, index) => (
              <div className="col-md-4" key={index}>
                {index === 5 ? (
                  // ✅ Sixth box custom design
                  <div
                    className="text-dark p-5 mb-4 d-flex flex-column justify-content-between"
                    style={{
                      backgroundColor: "#C5ED82", // Light green
                      minHeight: "400px",
                      borderRadius: "12px",
                      color: "#000",
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={Booked}
                          alt=""
                          className="object-fit-cover"
                          height="80"
                          width="185"
                          style={{ objectPosition: "left" }}
                        />
                      </div>
                      <h4 className="fw-500">4,700 satisfied patients</h4>
                      <h4 className="fw-light">
                        achieved lasting results with a 100% success rate.
                      </h4>
                    </div>
                    <div>
                      <button className="primary-btn px-5">Book Now</button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="text-white p-4 mb-4 d-flex justify-content-end align-items-start flex-column"
                    style={{
                      background: `
              linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 42.06%,
                rgba(0, 0, 0, 0.28) 59.86%,
                rgba(0, 0, 0, 0.514) 76.66%,
                #000000 104.98%
              ),
              url(${clinic.bg}) center center / cover no-repeat
            `,
                      minHeight: "400px",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="h-150 mb-2">
                      <h4>{clinic.title}</h4>
                      <p className="fw-light">{clinic.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonals */}
      <Testimonials />

      {/* Post Surgery Support*/}
      <div className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="p-head mb-4">Post Surgery Support</h2>
              <img src={Psurgery} className="w-md-75 w-100" alt="" />
            </div>
            <div className="col-md-6">
              <h5 className="sec-c fw-light mb-3 border-bottom pb-4 mt-4 mt-md-0">
                We provide comprehensive post-surgery support, ensuring a smooth
                recovery through personalized care plans, regular follow-ups,
                and expert guidance—helping patients achieve optimal healing
              </h5>
              <div>
                <div className="border-bottom pb-4 mb-4 d-flex">
                  <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">
                    ✔
                  </div>
                  <div>
                    <h4 className="fw-500 mb-1">Consultation & Assessment</h4>
                    <p className="mb-0 text-muted">
                      A thorough evaluation of hair loss and donor area
                      suitability is done.
                    </p>
                  </div>
                </div>

                <div className="border-bottom pb-4 mb-4 d-flex">
                  <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">
                    ✔
                  </div>
                  <div>
                    <h4 className="fw-500 mb-1">Donor Hair Extraction</h4>
                    <p className="mb-0 text-muted">
                      Follicles are harvested from the donor area using methods
                      like FUE or FUT.
                    </p>
                  </div>
                </div>

                <div className="border-bottom pb-4 mb-4 d-flex">
                  <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">
                    ✔
                  </div>
                  <div>
                    <h4 className="fw-500 mb-1">Recovery & Aftercare</h4>
                    <p className="mb-0 text-muted">
                      Post-procedure instructions are provided for healing, hair
                      growth, and maintenance.
                    </p>
                  </div>
                </div>

                <div className="border-bottom pb-4 mb-4 d-flex">
                  <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">
                    ✔
                  </div>
                  <div>
                    <h4 className="fw-500 mb-1">Preparation & Implantation</h4>
                    <p className="mb-0 text-muted">
                      Extracted follicles are carefully prepared and then
                      implanted into the thinning or bald areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Dont's */}
      <div className="sec-pad primary-bg">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="p-head text-white text-center">
              Do’s and Don’ts After Hair Transplantation
            </h2>
            <h5 className="sec-c fw-light w-md-75 my-3 text-white text-center">
              After undergoing a hair transplant in Haridwar at QHT Clinic, it’s
              crucial to follow these guidelines to ensure optimal recovery and
              results:
            </h5>
          </div>
          <div className="container py-5">
            <div className="row g-5">
              {/* Don'ts */}
              <div className="col-md-6">
                <div className="p-5 rounded-5 shadow bg-white h-100">
                  <h4 className="fw-bold fs-3 mb-3 border-bottom border-lgrey pb-4">
                    Don’ts
                  </h4>
                  <ul className="list-unstyled">
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content">
                      <span className="bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                        ✖
                      </span>
                      &nbsp;
                      <span>
                        Avoid direct sunlight and UV rays for the first few
                        weeks. Keep your scalp protected.
                      </span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content">
                      <span className="bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                        ✖
                      </span>
                      &nbsp;
                      <span>
                        Avoid heavy exercise or activities that cause excessive
                        sweating.
                      </span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content">
                      <span className="bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                        ✖
                      </span>
                      &nbsp;
                      <span>
                        Avoid touching, scratching, or picking at the
                        transplanted area to prevent dislodging grafts.
                      </span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content">
                      <span className="bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                        ✖
                      </span>
                      &nbsp;
                      <span>
                        Refrain from using hair products like gels, sprays, or
                        dyes for at least a few weeks.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Do’s */}
              <div className="col-md-6">
                <div className="p-5 rounded-5 shadow bg-white h-100">
                  <h4 className="fw-bold fs-3 mb-3 border-bottom border-lgrey pb-4">
                    Do’s
                  </h4>
                  <ul className="list-unstyled">
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content">
                      <span className="primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                        ✓
                      </span>
                      &nbsp;
                      <span>
                        Adhere to the recommended post-operative care
                        instructions.
                      </span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content">
                      <span className="primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                        ✓
                      </span>
                      &nbsp;
                      <span>
                        Gently wash your scalp as advised to prevent infection.
                      </span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content">
                      <span className="primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                        ✓
                      </span>
                      &nbsp;
                      <span>
                        Maintain a healthy diet and stay hydrated to support
                        healing.
                      </span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px h-sm-fit-content">
                      <span className="primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center">
                        ✓
                      </span>
                      &nbsp;
                      <span>
                        Take prescribed medications to manage pain and prevent
                        infection.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <div className="row">
            <h2 className="p-head">
              Recovery time & after care of hair transplant.
            </h2>
            <h5 className="sec-c fw-light w-md-75 my-3">
              Learn about the recovery timeline and essential aftercare tips
              following a hair transplant to ensure proper healing, optimal
              results, and long-lasting, healthy hair growth.
            </h5>
          </div>
          <div className="container py-5">
            <div className="row">
              {/* Tabs Navigation */}
              <div className="col-md-2">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {["Week 01", "Week 02", "Week 03", "Week 04", "Week 05"].map(
                    (week, index) => (
                      <button
                        key={index}
                        className={`nav-link sec-c rounded-pill tab-btn text-center mb-4 w-md-75 ${
                          index === 3 ? "active" : ""
                        }`}
                        id={`v-pills-${index}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#v-pills-${index}`}
                        type="button"
                        role="tab"
                      >
                        {week}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Tab Content */}
              <div className="col-md-10">
                <div className="tab-content" id="v-pills-tabContent">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className={`tab-pane fade ${
                        index === 3 ? "show active" : ""
                      }`}
                      id={`v-pills-${index}`}
                      role="tabpanel"
                    >
                      <div className="row">
                        {/* Image */}
                        <div className="col-md-6">
                          <img
                            src={Men}
                            alt="Week Image"
                            className="img-fluid rounded w-100 object-fit-cover"
                            style={{ height: "560px" }}
                          />
                        </div>

                        {/* Text Section */}
                        <div className="col-md-6">
                          {/* What to Expect */}
                          <div className="bg-light p-4 mb-3 rounded-4 mt-3 mt-md-3 shadow-sm">
                            <h6 className="primary-c fw-bold">
                              WHAT TO EXPECT
                            </h6>
                            <ul className="list-unstyled fw-light">
                              <li className="py-4 border-bottom border-lgrey">
                                <span className="primary-bg text-white rounded-circle px-1 fs-20px">
                                  ✓
                                </span>
                                Transplanted hairs may shed significantly (don’t
                                panic)
                              </li>
                              <li className="py-4">
                                <span className="primary-bg text-white rounded-circle px-1 fs-20px">
                                  ✓
                                </span>
                                Redness reduces, scalp feels more normal
                              </li>
                            </ul>
                          </div>

                          {/* How to Care */}
                          <div className="bg-light p-4 mb-3 rounded-4 shadow-sm">
                            <h6 className="primary-c fw-bold">HOW TO CARE</h6>
                            <ul className="list-unstyled fw-light">
                              <li className="py-4 border-bottom border-lgrey">
                                <span className="primary-bg text-white rounded-circle px-1 fs-20px">
                                  ✓
                                </span>
                                Resume light physical activities
                              </li>
                              <li className="py-4 border-bottom border-lgrey">
                                <span className="primary-bg text-white rounded-circle px-1 fs-20px">
                                  ✓
                                </span>
                                Keep scalp clean and moisturized (if advised)
                              </li>
                              <li className="py-4">
                                <span className="primary-bg text-white rounded-circle px-1 fs-20px">
                                  ✓
                                </span>
                                Stay patient — new growth hasn’t started yet
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sec-pad primary-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <h2 className="p-head text-white fw-normal">
                Get 20% off on your first booking!
              </h2>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center border-x px-4 border-white">
              <img src={Booked} className="w-100" alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <button className="btn rounded-pill fs-5 px-5 py-3 bg-white primary-c">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="sec-pad pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="p-head text-center">
              Comparison of GFC vs PRP Hair treatment
            </h2>
            <h5 className="sec-c fw-light text-center w-md-75 my-3">
              GFC injections are different from the PRP injections, though both
              of them are non-invasive, the following factors make them
              different from one to another:
            </h5>
          </div>
          <div className="row align-items-center py-4">
            <div className="col-md-4 p-0">
              <div className="treat-box tb-1">
                <h4 className="primary-c fw-500">Feature</h4>
                <ul>
                  <li>Growth factor concentration</li>
                  <li>Pain & discomfort</li>
                  <li>Effectiveness</li>
                  <li>Risk of side effects</li>
                  <li>Cost</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="treat-box tb-2">
                <h4 className="primary-c fw-500">GFC treatment</h4>
                <ul>
                  <li>
                    Higher the concentration of the growth factors, better are
                    the results
                  </li>
                  <li>Minimal, due to the use of latest technology</li>
                  <li>More consistent results can be achieved</li>
                  <li>Very low</li>
                  <li>Moderately priced & is effective</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="treat-box tb-3">
                <h4 className="primary-c fw-500">PRP treatment</h4>
                <ul>
                  <li>Even lower plasma concentration is enough</li>
                  <li>
                    Moderate due to the less refined technological process
                  </li>
                  <li>Lesser consistent results</li>
                  <li>Comparatively higher</li>
                  <li>Comparatively lower in price</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="sec-pad" id="faq">
        <div className="container border-top border-grey pt-5">
          <div className="row pt-5">
            <div className="col-md-6 justify-content-between d-flex flex-column">
              <div>
                <h2 className="p-head w-75">Frequently Asked Questions.</h2>
                <h5 className="sec-c fw-light my-3">
                  If you don’t find relevant answer please send us your queries
                  on support@qhtclinic.com or Call +91-9084726916
                </h5>
              </div>
              <img src={Llogo} width="250" alt="" />
            </div>
            <div className="col-md-6">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      What are the common causes of donor are a pain after a
                      hair transplant?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      Donor area pain post-transplant can stem from mild
                      inflammation, nerve irritation, or tension on the scalp.
                      It’s a normal part of the healing process and usually
                      subsides within a few days.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      What's the cost of hair transplant in India?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      The cost varies depending on several factors like
                      technique and grafts needed. Contact us for a free
                      estimate.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      Which are the different packages provided for hair
                      transplant India?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      We offer standard, premium, and VIP packages customized to
                      your needs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      Is there any impact of the type of hair surgery on the
                      cost?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      Yes, different techniques like FUE, FUT, or DHI have
                      varying costs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                    >
                      Does hair transplant damage existing hair?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body sec-c p-0 pb-5">
                      No, if performed correctly, the existing hair remains
                      unaffected.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="sec-pad" id="insights">
        <div className="container border-top border-grey pt-5">
          <h2 className="p-head mb-5">Hair Care & Transplant Insights</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
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
              <img src={S3} className="w-100 mb-4 h-250 rounded-3" alt="" />
              <h4>6 Hair Transplant Things To Know Before Hair Transplant</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={S2} className="w-100 mb-4 h-250 rounded-3" alt="" />
              <h4>
                Is Hair Transplantation the Best Solution for Thinning Hair?
              </h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={S1} className="w-100 mb-4 h-250 rounded-3" alt="" />
              <h4>Top 5 Benefits of Getting a Hair Transplant</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={S1} className="w-100 mb-4 h-250 rounded-3" alt="" />
              <h4>Top 5 Benefits of Getting a Hair Transplant</h4>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Locations */}
      <div className="g-gradient sec-pad" id="location">
        <div className="container">
          <h2 className="p-head text-center text-white py-5">
            Your City, Our Services - Now Available <br /> in 15 Locations
            Across India
          </h2>
          <div className="row">
            {cities.map((city, index) => (
              <div className="col-md-2 col-6 p-2 p-md-3" key={index}>
                <div className="box rounded-4">
                  <img src={city.img} alt={city.name} />
                  <h4 className="text-white fw-normal fs-5">{city.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default Service;
