import React, { useState } from "react";
import "../medical-tourism/MedicalTourism.css";
import Services from "../../components/Services";
import Faqs from "../../components/Faqs";
import glimps from "../../assets/glimps.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import test from "../../assets/test.png";
import quote from "../../assets/quotes.png";
import coin from "../../assets/icon/coin.png";
import Why from "../../assets/Why.png";
import indiareason from "../../assets/indiareason.png";
import baldgraft from "../../assets/icon/baldgraft.png";
import buildstar from "../../assets/icon/buildstar.png";
import capman from "../../assets/icon/capman.png";
import downhand from "../../assets/icon/downhand.png";
import grating from "../../assets/icon/grating.png";
import hathplus from "../../assets/icon/hathplus.png";
import plane from "../../assets/icon/plane.png";
import plusbag from "../../assets/icon/plusbag.png";
import ungli from "../../assets/icon/ungli.png";
import uphand from "../../assets/icon/uphand.png";
import mtism from "../../assets/mtism.png";

const testimonialsData = [
  {
    id: 1,
    name: "Priyanka Das",
    age: 26,
    location: "India",
    rating: 5,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade III",
  },
  {
    id: 2,
    name: "Abhishek Kumar",
    age: 22,
    location: "India",
    rating: 3,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade II",
  },
  {
    id: 3,
    name: "Amardeep Singh",
    age: 45,
    location: "India",
    rating: 5,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade III",
  },
  {
    id: 4,
    name: "Amardeep Singh",
    age: 45,
    location: "India",
    rating: 5,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade III",
  },
  {
    id: 5,
    name: "Amardeep Singh",
    age: 45,
    location: "India",
    rating: 5,
    text: "Very good place for hair transplant and everything went smoothly. All staff including Digant brother and receptionist Ma'am were so cooperative...",
    image: test,
    grade: "Grade III",
  },
];

const countryData = [
  {
    country: "UAE",
    flag: "https://flagcdn.com/w40/ae.png",
    price: "$4,000",
    desc: "UAE clinics provide luxury care with modern techniques, especially in Dubai—offering premium services at costs higher than India or Turkey.",
  },
  {
    country: "U.S.A",
    flag: "https://flagcdn.com/w40/us.png",
    price: "$7,000",
    desc: "USA hair transplants offer advanced technology and premium care, delivering excellent results but with significantly higher costs and surgeon fees.",
  },
  {
    country: "Turkey",
    flag: "https://flagcdn.com/w40/tr.png",
    price: "$1,500",
    desc: "Turkey offers affordable hair transplants with skilled surgeons, all-inclusive packages, and attracts international patients seeking quality, cost-effective care.",
  },
  {
    country: "India",
    flag: "https://flagcdn.com/w40/in.png",
    price: "$800",
    desc: "India offers affordable, world-class hair transplant services with expert surgeons, modern clinics, advanced techniques, and significant cost savings.",
  },
];

const sections = [
  {
    title: "Before Visit",
    icon: ungli, // yahan apna icon path do
  },
  {
    title: "Your Stay",
    icon: buildstar,
  },
  {
    title: "The Treatment",
    icon: baldgraft,
  },
  {
    title: "Departure",
    icon: plane,
  },
];

const rows = [
  {
    feature: "Growth factor concentration",
    qht: "Higher the concentration of the growth factors, better are the results",
    fue: "Even lower plasma concentration is enough",
  },
  {
    feature: "Pain & discomfort",
    qht: "Minimal, due to the use of latest technology",
    fue: "Moderate due to the less refined technological process",
  },
  {
    feature: "Effectiveness",
    qht: "More consistent results can be achieved",
    fue: "Lesser consistent results",
  },
  {
    feature: "Risk of side effects",
    qht: "Very low",
    fue: "Comparatively higher",
  },
  {
    feature: "Cost",
    qht: "Moderately priced & is effective",
    fue: "Comparatively lower in price",
  },
];

const MedicalTourism = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      {/* Banner */}
      <div className="sec-pad Mbanner">
        <div className="container just-align-center h-100">
          <div className="row">
            <h1 className="text-white text-center display-3 fw-normal">
              Medical Tourism By Qht Hair <br /> Transplant Clinic
            </h1>
            <h4 className="text-white text-center fw-light">
              Affordable, high-quality hair transplants abroad with expert
              medical care.
            </h4>
            <div className="just-align-center mt-5">
              <span className="border text-white display-3 hw-100 just-align-center rounded-circle">
                ↓
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Choice */}
      <div className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="p-head">
                Why India is the top choice <br /> for hair transplant.
              </h2>
            </div>
            <div className="col-md-5">
              <p className="sec-c">
                The city offers a high level of luxury at a cost-effective
                price. Many patients visit QHT Clinic with their families, who
                can enjoy an extended vacation.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div>
                <img src={indiareason} className="w-100" alt="" />
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="sec-bg p-4 rounded-4">
                <img src={capman} width="60" alt="" />
                <h4 className="py-3">
                  Cost-Effective <br /> Treatments
                </h4>
                <p className="h-100px">
                  Hair transplants in India cost much less than in Western
                  countries, offering exceptional value without sacrificing
                  quality or safety.
                </p>
              </div>
              <div className="sec-bg p-4 mt-4 rounded-4">
                <img src={plusbag} width="60" alt="" />
                <h4 className="py-3">
                  State of the Art <br /> Technology
                </h4>
                <p className="h-100px">
                  Clinics use modern equipment and the latest techniques like
                  FUE and DHI, ensuring minimally invasive, safe, and
                  natural-looking hair restoration.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="sec-bg p-4 rounded-4">
                <img src={baldgraft} width="60" alt="" />
                <h4 className="py-3">
                  Highly Skilled <br /> Surgeons
                </h4>
                <p className="h-100px">
                  Indian surgeons are internationally trained and experienced,
                  specializing in advanced hair restoration with high success
                  and satisfaction rates.
                </p>
              </div>
              <div className="sec-bg p-4 mt-4 rounded-4">
                <img src={hathplus} width="60" alt="" />
                <h4 className="py-3">
                  Seamless Medical <br /> Travel Support
                </h4>
                <p className="h-100px">
                  Clinics use advanced tools and techniques like FUE and DHI for
                  safe, natural, minimally invasive hair restoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="sec-pad g-gradient">
        <div className="container">
          <img src={Why} className="w-100" alt="" />
        </div>
      </div>

      {/* Comparison */}
      <div className="sec-pad pb-0" id="comp">
        <div className="container">
          <div className="row text-md-center text-start">
            <h2 className="p-head">
              FUE vs QHT clear comparisons <br /> with strong benefits
            </h2>
            <p className="sec-c">
              QHT offers advanced hair transplant solutions with personalized
              care, often preferred over <br /> Delhi/Mumbai clinics for
              quality, technology, and results.
            </p>
          </div>

          <div className="container my-4">
            <div className="table-responsive">
              <table
                className="table table-bordered text-center"
                style={{ borderRadius: "20px", overflow: "hidden" }}
              >
                <thead>
                  <tr>
                    <th className="fw-medium fs-4 text-start">Feature</th>
                    <th className="fw-medium fs-4 text-start primary-c">
                      <span className="me-2"><img src={uphand} alt="" /></span> QHT Benefits
                    </th>
                    <th className="fw-medium fs-4 text-start">
                      <span className="me-2"><img src={downhand} alt="" /></span> FUE Technique
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="text-start">{row.feature}</td>
                      <td className="text-start">{row.qht}</td>
                      <td className="text-start">{row.fue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container primary-bg p-md-4 p-5 rounded-md-4">
        <div className="row gap-4 gap-md-0">
          <div className="col-md-4 just-align-center">
            <img src={grating} className="w-100 px-5" alt="" />
          </div>
          <div className="col-md-6 border-start border-sm-none pe-md-5 pe-0 just-align-center justify-content-end">
            <h2 className="p-head text-white text-center text-md-start fw-normal">
              Connect with <br className="d-none d-md-block"/> hair transplant expert.
            </h2>
          </div>
          <div className="col-md-2 just-align-center">
            <button className="btn bg-white primary-c py-2 px-4 rounded-pill fw-medium">
              Consult Now
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container sec-pad">
        <h2 className="p-head w-md-75 px-2 px-md-0">
          Benefits you’ll receive during your visit for a seamless, satisfying
          experience.
        </h2>
        <p className="pt-4 pb-5 px-2 px-md-0">
          During your visit to QHT Hair Transplant, you’ll experience expert
          consultation, personalized treatment planning, advanced hair
          restoration techniques, compassionate care, hygienic facilities, and
          transparent pricing—ensuring a comfortable, satisfying, and
          results-driven journey toward natural hair regrowth.
        </p>
        <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 mb-4 pe-md-5">
            <div className="list-group rounded-3 sec-bg p-4">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className={`list-group-item border-bottom border-none rounded-3 text-black d-flex justify-content-start gap-3 align-items-center  p-4 list-group-item-action ${
                    activeSection === index
                      ? "primary-bg text-white shadow"
                      : "sec-bg"
                  }`}
                  onClick={() => setActiveSection(index)}
                >
                  <img
                    src={section.icon} // Use section.icon, not baal if you want different icons
                    alt=""
                    width="40"
                  />
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-8 px-5">
            <h2 className="p-head mb-3">
              What we do for your premium stay and seamless experience
            </h2>
            <p>
              We ensure your visit is as smooth and stress-free as possible.
              From the moment you arrive, our team offers support with
              accommodation, transport, and local assistance. Our priority is to
              make you feel relaxed so you can focus on your transformation.
            </p>
            <img src={mtism} className="w-100 rounded-4" alt="" />
            <ul className="my-3 m-0 ps-3">
              <li>
                Travel Assistance, Support with booking flights and airport
                transfers.
              </li>
              <li>
                Comfortable Accommodation, Assistance in finding safe, hygienic,
                and convenient hotels near the clinic.
              </li>
              <li>
                On-Ground Support, Friendly team available for local guidance
                and logistical help.
              </li>
            </ul>
            <p>
              Whether you’re visiting from another city or abroad, you’ll
              receive personal attention and local guidance. Our goal is to
              ensure your journey is hassle-free, letting you focus on your
              treatment and recovery.
            </p>
          </div>
        </div></div>
      </div>

      {/* Cost Comparison */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <h2 className="p-head">
            Cost Comparison between hair transplant <br /> in USA, indian,
            turkey and UAE.
          </h2>

          <div className="row g-4 py-5">
            {countryData.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="card h-100 border-0 rounded-4 shadow-sm">
                  <div className="card-body p-4">
                    <p className="mb-1">Starts at</p>
                    <h2 className="card-title fs-1">{item.price}</h2>
                    <hr className=" sec-c" />
                    <h5>
                      <img
                        src={item.flag}
                        alt={`${item.country} flag`}
                        width="30"
                        height="30"
                        className="me-2 my-3 rounded-circle"
                      />
                      {item.country}
                    </h5>
                    <p className="card-text sec-c">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row know-bg py-4 m-2 text-center text-md-start rounded-4 text-white">
            <div className="col-md-2 just-align-center">
              <img src={coin} className="w-md-50 w-25" alt="" />
            </div>
            <div className="col-md-8 just-align-center justify-content-start">
              <h2>Get your hair transplant cost estimation.</h2>
            </div>
            <div className="col-md-2 just-align-center">
              <button className="btn bg-white primary-c py-2 px-4 rounded-pill fw-medium">
                Consult Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="sec-pad primary-bg" id="MDtest">
        <div className="container">
          <h2 className="p-head border-bottom text-white border-grey pb-4 mb-5">
            Hear from our satisfied international <br /> clients around the
            world.
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
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
            style={{ paddingBottom: "6rem" }}
          >
            {testimonialsData.length > 0 ? (
              testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="p-4 bg-white border rounded-4 d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <div className="mb-2 fs-4 primary-c">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                              {i < testimonial.rating ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                        <div>
                          <img src={quote} alt="" />
                        </div>
                      </div>
                      <h5>Exceptional Service & Results!</h5>
                      <p className="text-muted">{testimonial.text}</p>
                    </div>
                    <div className="d-flex align-items-center border-top pt-4 mt-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        width="40"
                        height="40"
                      />
                      <div>
                        <div>{testimonial.name}</div>
                        <small className="text-muted">
                          Age {testimonial.age}, {testimonial.location}
                        </small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center">
                No testimonials available for this grade.
              </p>
            )}
          </Swiper>
        </div>
      </div>

      {/* Glimps */}
      <div className="sec-pad">
        <div className="container text-center">
          <h2 className="p-head">
            Glimpse of our infrastructure <br /> & hospitality
          </h2>
          <p className="sec-c">
            Experience our state-of-the-art infrastructure and exceptional
            hospitality, designed to <br /> ensure comfort, care, and
            outstanding results.
          </p>
          <img src={glimps} className="w-100 mt-4" alt="" />
        </div>
      </div>

      {/* FAQ & Form */}
      <div className="container border-top">
        <div className="row">
          <div className="col-md-7" id="MTfaq">
            <Faqs />
          </div>
          <div className="col-md-5 p-md-5">
            <div className="sec-bg p-5 m-md-4 rounded-4 gap-5 just-align-center flex-column align-items-start">
              <input
                type="text"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="Last Name"
              />
              <input
                type="tel"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="Mobile"
              />
              <input
                type="email"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="Email Address"
              />
              <input
                type="interested"
                className="form-control input-underline bg-transparent border-none border-bottom border-black rounded-0"
                placeholder="Interested In?"
              />
              <button type="submit" className="primary-btn px-5">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Services />
    </>
  );
};

export default MedicalTourism;
