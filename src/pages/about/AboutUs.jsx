import { React, useState } from "react";
import "../about/AboutUs.css";
import Videos from "../../components/Videos";
import Testimonials from "../../components/Testimonials";
import Services from "../../components/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import QuickForm from "../../components/QuickForm";
import milind from "../../assets/milind.png";
import celeb from "../../assets/icon/celeb.png";
import affordable from "../../assets/icon/affordable.png";
import cultural from "../../assets/icon/cultural.png";
import hygienic from "../../assets/icon/hygienic.png";
import luxurious from "../../assets/icon/luxurious.png";
import professional from "../../assets/icon/professional.png";
import certified from "../../assets/icon/certified.png";
import fda from "../../assets/icon/fda.png";
import calc from "../../assets/icon/calc.png";
import doctor from "../../assets/doctor.png";
import mission1 from "../../assets/m1.png";
import mission2 from "../../assets/m2.png";
import mission3 from "../../assets/m3.png";
import gal from "../../assets/gal.png";
import bhadwe from "../../assets/bhadwe.png";
import abouth1 from "../../assets/abouth1.png";

const celebrityTestimonials = [
  {
    name: "Milind Gunaji",
    title: "Actor, writer, model, television, presenter, author",
    review:
      "I am truly grateful to QHT Clinic for their exceptional hair transplant procedure.",
    details:
      "The entire hair transplant process was smooth, professional, reassuring — hair looks natural. Confidence restored.",
    stars: 5,
    image: milind,
  },
  {
    name: "Celebrity Name 2",
    title: "Profession or Designation",
    review: "Amazing transformation and care throughout the journey.",
    details:
      "The team was skilled, compassionate, and ensured top-notch quality in every aspect of the procedure.",
    stars: 5,
    image: milind,
  },
];

const features = [
  {
    title: "Cultural Heritage",
    description:
      "Haridwar is rich in India’s cultural heritage, known for being pollution-free, free from road congestion, and noise.",
    icon: cultural,
  },
  {
    title: "Luxurious & Cost-Effective",
    description:
      "The city offers high-level luxury at a cost-effective price. Many patients visit QHT Clinic with families.",
    icon: luxurious,
  },
  {
    title: "Professional Arrangements",
    description:
      "Patients from Tier 1 cities benefit from the QHT treatment arrangements during their stay.",
    icon: professional,
  },
  {
    title: "Celebrity Appeal",
    description:
      "Film actors choose QHT Clinic for its expertise and the positive energy it provides.",
    icon: celeb,
  },
  {
    title: "Hygienic Environment",
    description:
      "Ultra-hygienic clinic with the highest cleanliness, in a pollution-free city like Haridwar.",
    icon: hygienic,
  },
  {
    title: "Affordable",
    description:
      "Our goal is to provide the best possible results at an affordable price.",
    icon: affordable,
  },
];

const doctors = [
  {
    name: "Dr. Bhagirath Naik",
    degree: "(MBBS, M.D.)",
    spec: "Anesthetist & Critical Care Expert",
    image: doctor,
  },
  {
    name: "Dr. Himanshu Kumar",
    degree: "(MBBS, M.D.)",
    spec: "Dermatologist",
    image: doctor,
  },
  {
    name: "Dr. Mandakani",
    degree: "(MBBS, M.D.)",
    spec: "Anesthesiology",
    image: doctor,
  },
  {
    name: "Dr. Anand",
    degree: "(MBBS)",
    spec: "Hair Transplant Surgeon",
    image: doctor,
  },
];

const clinicData = {
  Uttarakhand: [],
  Hyderabad: [],
  Delhi: [gal, gal, gal, gal, gal, gal],
  Noida: [],
};

const timelineData = [
  {
    year: "1990",
    title: "Established first hair transplant clinic in Haridwar",
    desc: "Focused on innovation, patient care, and expanding our footprint as India’s most trusted name in hair restoration.",
  },
  {
    year: "2000",
    title: "10,000+ Lives Transformed",
    desc: "Crossed 10,000 successful transplants, backed by a team of 120+ certified experts and trained staff.",
  },
  {
    year: "2010",
    title: "Opened Clinics in Metro Cities",
    desc: "Expanded to Delhi, Noida, and Hyderabad—providing access to more patients nationwide.",
  },
  {
    year: "2020",
    title: "Recognized Internationally",
    desc: "QHT became a destination clinic for international patients seeking natural and lasting results.",
  },
];

const cities = Object.keys(clinicData);

const AboutUs = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");

  return (
    <>
      <div>
        {/* Banner */}
        <div className="sec-bg pt-md-5 pt-0 sec-pad">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <img src={abouth1} className="w-md-50 w-100 mb-4" alt="" />
              <p className="text-center sec-c">
                We are recognized for our world-class treatment, consistency,
                eye for aesthetics, and <br className="d-none d-md-block" />{" "}
                natural results. Our popularity is not limited to India alone.
              </p>

              <div>
                <img src={bhadwe} className="w-100 my-4" alt="" />
              </div>

              <div className="container">
                <div className="marquee-container">
                  <div className="marquee-text">
                    ✨ Wait! don’t miss these cost-saving secrets before you
                    scroll to prices
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Establish */}
        <div className="sec-pad pb-0">
          <div className="container">
            <div className="row gy-5">
              {/* Left Text Block */}
              <div className="col-lg-7">
                <h2 className="p-head">
                  Establishing one of the high-end clinics in Haridwar,
                  <br /> Uttarakhand, was driven by several reasons.
                </h2>
                <p className="mt-4 sec-c">
                  On the day of the treatment, the focus will be entirely on you
                  and we will do everything we can to make the big day go as
                  smoothly as possible. As well as the treatment itself, we can
                  also address any other concerns you may have. If you need to
                  arrange transport or stay overnight, we can take care of that.
                  We are happy to go the extra mile to make sure the treatment
                  day is as pleasant as possible for you. We at QHT Clinic
                  provide the best hair treatment and considered as the Best
                  Hair Transplant Clinic in India.
                </p>

                {/* Certifications */}
                <p className="mt-4">Our Certifications</p>
                <div className="d-flex gap-3 mt-3 flex-wrap flex-column">
                  <div className="border rounded-4 p-4 d-flex align-items-center gap-3">
                    <img src={fda} alt="FDA" width="40" />
                    <div>
                      <div className="fw-medium">
                        US-FDA approved <br /> technology
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-4 p-4 d-flex align-items-center gap-3">
                    <img src={certified} alt="FDA" width="30" />
                    <div>
                      <div className="fw-medium">
                        Certified Hair <br /> Transplant Surgeons
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right List Block */}
              <div className="col-lg-5">
                <div className="d-flex flex-column gap-4">
                  {[
                    {
                      num: "01",
                      title: "Affordable Quality Care",
                      desc: "Best results delivered with affordability, quality, and reliability assured.",
                    },
                    {
                      num: "02",
                      title: "Spotless Serene Clinic",
                      desc: "Ultra-clean, pollution-free clinic offering comfort in Haridwar.",
                    },
                    {
                      num: "03",
                      title: "Healing Adventure Connectivity",
                      desc: "Rafting, bungee, Ganges, nature, and easy access nearby.",
                    },
                    {
                      num: "04",
                      title: "Tradition Tranquility Trust",
                      desc: "Peaceful, cultural, clean, showcasing Haridwar’s global charm.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="d-flex border-top pt-5 pb-3 gap-3"
                    >
                      <div className="fw-medium fs-5 text-af">
                        {item.num}&nbsp;/
                      </div>
                      <div>
                        <div className="fw-medium mb-2 fs-5">{item.title}</div>
                        <div className="sec-c">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="sec-pad" id="timeline">
          <div className="container g-gradient px-5 pt-5 rounded-5">
            <h2 className="p-head pt-5 text-white text-start fw-normal mb-2">
              The legacy of journey of QHT clinic.
            </h2>
            <p className="text-start text-white fw-light mb-5">
              Most transplants fail — because no one tells you what really
              matters.
            </p>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {timelineData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="p-5 pb-5 bg-transparent border position-relative border-white ms-5 me-2 rounded-5 h-300 h-sm-fit-content">
                    <span className="px-3 py-2 fs-5 position-absolute text-white fw-normal">
                      {item.year}
                    </span>
                    <h4 className="text-parot fw-normal mb-3">{item.title}</h4>
                    <p className="text-white fw-light">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* City Gallery */}
        <div className="sec-pad">
          <div className="container">
            {/* Headline */}
            <div className="row mb-2 align-items-center">
              <div className="col-md-6">
                <h2 className="p-head">
                  With Worldwide Presence & Infrastructure
                </h2>
              </div>
              <div className="col-md-6">
                <p className="sec-c w-md-75 w-100">
                  QHT Clinic delivers advanced hair restoration solutions with
                  global presence, expert care, and world-class infrastructure.
                </p>
              </div>
            </div>

            {/* City Tabs */}
            <div className="mb-5 d-flex flex-wrap gap-2">
              {cities.map((city) => (
                <button
                  key={city}
                  className={`btn rounded-pill ${
                    selectedCity === city
                      ? "primary-btn px-4"
                      : "btn-outline-secondary px-4"
                  }`}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="row g-3">
              {clinicData[selectedCity].length ? (
                clinicData[selectedCity].map((img, index) => (
                  <div className="col-md-4 col-6" key={index}>
                    <img
                      src={img}
                      alt={`${selectedCity} ${index + 1}`}
                      className="img-fluid rounded-4"
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center text-muted py-5">
                  No data available for {selectedCity}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="sec-pad primary-bg text-white" id="mission">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-5 d-flex justify-content-between flex-column align-items-end">
                <div>
                  <h6 className="text-parot">Our Mission</h6>
                  <h2 className="fw-normal mt-3">
                    We work tirelessly to provide advanced hair restoration
                    techniques, surgical excellence, quality care, and
                    outstanding value.
                  </h2>
                </div>
                <div className="d-none d-md-flex justify-content-end align-items-center">
                  <img
                    src={mission1}
                    alt="Clinic"
                    className="w-75 mt-4"
                    style={{ marginRight: "-2.8rem" }}
                  />
                </div>
              </div>
              <div className="col-md-2 d-none d-md-flex justify-content-end align-items-center">
                <img src={mission2} alt="Tool" className="w-100" />
              </div>
              <div className="col-md-5 d-flex justify-content-between flex-column align-items-center align-items-md-start">
                <div>
                  <img
                    src={mission3}
                    alt="Procedure"
                    className="w-md-75 w-100 ml-sm-0"
                    style={{ marginLeft: "-2.5rem" }}
                  />
                </div>

                <div className="text-end">
                  <h6 className="text-parot mt-3 mt-md-0">Our Vision</h6>
                  <h3 className="fw-normal mt-3">
                    Hair transplantation combines “Hair Design” and “Art,”
                    creating not just results but a true work of art.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Know */}
        <div className="p-5 know-bg">
          <div className="container text-white">
            <div className="row justify-content-center align-items-center gap-3 gap-md-0">
              <div className="col-md-2">
                <img src={calc} alt="" />
              </div>
              <div className="col-md-8">
                <h2 className="p-head fw-normal">
                  Get Know More About QHT Costing
                </h2>
                <h5 className="fw-light">
                  Explore transparent pricing for QHT procedures.
                </h5>
              </div>
              <div className="col-md-2">
                <button className="btn btn-light rounded-pill px-4 py-2 primary-c">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors */}
        <div className="container my-5" id="doctor">
          <div className="text-start mb-5">
            <h2 className="p-head">Only The Expert Guidance at QHT Clinic</h2>
            <p className="sec-c">
              QHT offers advanced techniques, expert surgeons, and high success
              rates beyond just affordability.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {doctors.map((doc, i) => (
              <SwiperSlide key={i}>
                <div className="card position-relative border-0">
                  <img
                    src={doc.image}
                    className="card-img-top w-100 rounded-3"
                    alt={doc.name}
                  />
                  <div className="card-body position-absolute rounded-3 px-4 py-4 bottom-0 text-start text-white in-card">
                    <h5 className="card-title">{doc.name}</h5>
                    <small className="fw-light">
                      {doc.degree} - {doc.spec}
                    </small>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Team */}
        <div className="sec-pad pt-4">
          <div className="container border-top">
            <div className="row pt-5 mb-4 align-items-start">
              <div className="col-md-6 pt-5">
                <h2 className="p-head">
                  We Are A Team With <br />
                  Expertise & Commitment
                </h2>
              </div>
              <div className="col-md-6 pt-5">
                <p className="sec-c">
                  QHT Hair Clinic is one of the leading hair transplant clinics
                  in India. We are recognized for our world-class treatment,
                  consistency, eye for aesthetics, and natural results.
                </p>
              </div>
            </div>

            <div className="row g-4 mt-5">
              {features.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 p-5 border-0 sec-bg rounded-4">
                    <div className="fs-2 mb-5">
                      <img
                        src={item.icon}
                        className="hw-50 object-fit-contain"
                        alt=""
                      />
                    </div>
                    <h5 className="fw-medium fs-4">{item.title}</h5>
                    <p className="sec-c small mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule An Appointment */}
            <div className="d-flex justify-content-center gap-md-4 align-items-center mt-5">
              <div className="line d-none d-md-block"></div>
              <div>
                <button
                  className="btn text-white rounded-pill px-4 py-2"
                  style={{ backgroundColor: "#627251" }}
                >
                  Schedule An Appointment
                </button>
              </div>
              <div className="line d-none d-md-block"></div>
            </div>
          </div>
        </div>

        {/* Celeb */}
        <div className="sec-pad sec-bg" id="Celeb">
          <div className="container text-center mb-4">
            <h2 className="p-head">Celebrities At QHT</h2>
            <p className="sec-c">
              Real stories, real experiences—see how we’ve made a difference!
            </p>

            <div className="mt-5">
              <Swiper
                modules={[Navigation]}
                navigation={true}
                slidesPerView={1}
                loop={true}
              >
                {celebrityTestimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="row px-5 flex-column-reverse flex-md-row align-items-center testimonial-box rounded-5 overflow-hidden">
                      <div className="col-md-6 rounded-left p-md-5 p-3 text-white text-start primary-bg h-600 h-sm-fit-content">
                        <div className="display-1 mx-md-4 mx-0 mt-md-5 mt-0">❝</div>
                        <h3 className="fw-normal mb-3 mx-md-4 mx-0">
                          {item.review}
                        </h3>
                        <p className="mx-md-4 mx-0 fs-5 fw-light">
                          {item.details}
                        </p>
                        <p className="mt-md-4 mx-0 mb-1 mx-md-4 mx-0 fs-5">
                          {"★".repeat(item.stars)}
                        </p>
                        <p className="mb-0 mx-md-4 mx-0 fs-5">
                          – {item.name.split(" ")[0]}
                          <strong>{item.name.split(" ")[1]}</strong>
                        </p>
                        <small className="text-white fw-lighter mx-md-4 mx-0">
                          {item.title}
                        </small>
                      </div>
                      <div className="col-md-6 rounded-right p-0 h-600">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid w-100 rounded-right h-100 object-fit-cover"
                          style={{ objectFit: "cover", height: "100%" }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <Videos />

        <Testimonials />

        <div className="sec-pad primary-bg text-white">
          <QuickForm />
        </div>

        {/* Different */}
        <div className="sec-pad" id="difference">
          <div className="container py-5">
            <h2 className="p-head text-center">
              How QHT Is Different from others
            </h2>
            <p className="text-center sec-c mb-5">
              QHT offers advanced hair transplant solutions with personalized
              care, often preferred over <br className="d-none d-md-block" />{" "}
              Delhi/Mumbai clinics for quality, technology, and results.
            </p>

            <div className="table-responsive">
              <table className="table rounded table-bordered align-middle">
                <thead>
                  <tr>
                    <th className="fs-5 fw-semibold">Features</th>
                    <th className="highlight-bg">QHT</th>
                    <th className="fs-5 fw-semibold">Others</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Technology Used</td>
                    <td className="highlight-bg">
                      <span className="check-icon">✔</span> Latest advanced
                      tools (e.g., Sapphire FUE, DHT)
                    </td>
                    <td>
                      <span className="cross-icon">✖</span> Often use older or
                      basic FUE techniques
                    </td>
                  </tr>
                  <tr>
                    <td>Surgeon Involvement</td>
                    <td className="highlight-bg">
                      <span className="check-icon">✔</span> Directly handled by
                      experienced surgeons
                    </td>
                    <td>
                      <span className="cross-icon">✖</span> Technicians often
                      perform major procedures
                    </td>
                  </tr>
                  <tr>
                    <td>Personalized Treatment Plan</td>
                    <td className="highlight-bg">
                      <span className="check-icon">✔</span> Customized for each
                      individual
                    </td>
                    <td>
                      <span className="cross-icon">✖</span> Standard, one size
                      fits all approach
                    </td>
                  </tr>
                  <tr>
                    <td>Natural Hairline Design</td>
                    <td className="highlight-bg">
                      <span className="check-icon">✔</span> Artistic,
                      natural-looking hairlines
                    </td>
                    <td>
                      <span className="cross-icon">✖</span> Often look
                      artificial or too dense
                    </td>
                  </tr>
                  <tr>
                    <td>Post-Procedure Care</td>
                    <td className="highlight-bg">
                      <span className="check-icon">✔</span> Dedicated follow-up
                      and support
                    </td>
                    <td>
                      <span className="cross-icon">✖</span> Limited or no
                      structured aftercare
                    </td>
                  </tr>
                  <tr>
                    <td>Transparency in Pricing</td>
                    <td className="highlight-bg">
                      <span className="check-icon">✔</span> Clear and honest
                      pricing
                    </td>
                    <td>
                      <span className="cross-icon">✖</span> Hidden costs or
                      upselling common
                    </td>
                  </tr>
                  <tr>
                    <td>Clinic Hygiene &amp; Safety</td>
                    <td className="highlight-bg">
                      <span className="check-icon">✔</span> Hospital-grade
                      sterile environment
                    </td>
                    <td>
                      <span className="cross-icon">✖</span> Varies greatly;
                      sometimes below standard
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Services />

        {/* Medical Tourism */}
        <div className="sec-pad" id="tourism">
          <div className="container text-white py-md-5 py-0">
            <div className="row py-md-5 py-0">
              <h2 className="p-head w-100 w-md-50">
                QHT Medical Tourism facilities to make your experience
                extraordinary & Comfortable
              </h2>
              <p className="w-md-75 w-100 mt-2">
                We are providing facilities that are one of the most advanced &
                well appointed with cutting edge latest machines & equipment to
                certify unmatched levels of safety & hygiene.
              </p>
              <div>
                <button className="primary-btn px-4 mt-4">Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
