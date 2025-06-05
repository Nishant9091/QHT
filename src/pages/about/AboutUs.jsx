import React from "react";
import "../about/AboutUs.css";
import Videos from "../../components/Videos";
import Testimonials from "../../components/Testimonials";
import Services from "../../components/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const celebrityTestimonials = [
  {
    name: "Milind Gunaji",
    title: "Actor, writer, model, television, presenter, author",
    review:
      "I am truly grateful to QHT Clinic for their exceptional hair transplant procedure.",
    details:
      "The entire hair transplant process was smooth, professional, reassuring — hair looks natural. Confidence restored.",
    stars: 5,
    image: "/milind-gunaji.jpg",
  },
  {
    name: "Celebrity Name 2",
    title: "Profession or Designation",
    review: "Amazing transformation and care throughout the journey.",
    details:
      "The team was skilled, compassionate, and ensured top-notch quality in every aspect of the procedure.",
    stars: 5,
    image: "/celebrity2.jpg",
  },
];

const features = [
  {
    title: "Cultural Heritage",
    description:
      "Haridwar is rich in India’s cultural heritage, known for being pollution-free, free from road congestion, and noise.",
    icon: "🏛️",
  },
  {
    title: "Luxurious & Cost-Effective",
    description:
      "The city offers high-level luxury at a cost-effective price. Many patients visit QHT Clinic with families.",
    icon: "💰",
  },
  {
    title: "Professional Arrangements",
    description:
      "Patients from Tier 1 cities benefit from the QHT treatment arrangements during their stay.",
    icon: "📋",
  },
  {
    title: "Celebrity Appeal",
    description:
      "Film actors choose QHT Clinic for its expertise and the positive energy it provides.",
    icon: "🌟",
  },
  {
    title: "Hygienic Environment",
    description:
      "Ultra-hygienic clinic with the highest cleanliness, in a pollution-free city like Haridwar.",
    icon: "🧼",
  },
  {
    title: "Affordable",
    description:
      "Our goal is to provide the best possible results at an affordable price.",
    icon: "💳",
  },
];

const doctors = [
  {
    name: "Dr. Bhagirath Naik",
    degree: "(MBBS, M.D.)",
    spec: "Anesthetist & Critical Care Expert",
    image: "https://via.placeholder.com/300x400?text=Dr.+Bhagirath+Naik",
  },
  {
    name: "Dr. Himanshu Kumar",
    degree: "(MBBS, M.D.)",
    spec: "Dermatologist",
    image: "https://via.placeholder.com/300x400?text=Dr.+Himanshu+Kumar",
  },
  {
    name: "Dr. Mandakani",
    degree: "(MBBS, M.D.)",
    spec: "Anesthesiology",
    image: "https://via.placeholder.com/300x400?text=Dr.+Mandakani",
  },
  {
    name: "Dr. Anand",
    degree: "(MBBS)",
    spec: "Hair Transplant Surgeon",
    image: "https://via.placeholder.com/300x400?text=Dr.+Anand",
  },
];

const AboutUs = () => {
  return (
    <>
      <div>
        {/* Banner */}
        <div className="trusted-section py-5 text-center">
          <div className="container">
            <h2 className="fw-bold display-6">
              India’s <span className="trusted-highlight">trusted</span> leader{" "}
              <br />
              In <span className="emoji-inline">👨‍⚕️</span> hair transplant <br />
              <span className="fw-semibold">
                Excellence <span className="emoji-inline">💇‍♂️</span>
              </span>
            </h2>
            <p className="text-muted mb-4">
              We are recognized for our world-class treatment, consistency, eye
              for aesthetics, and natural results. Our popularity is not limited
              to India alone.
            </p>

            <div className="image-wrapper mb-4">
              <img
                src="/doctors-group.jpg"
                alt="QHT Medical Team"
                className="img-fluid rounded-4 shadow"
              />
            </div>

            <div className="row text-white py-3 bg-success rounded-3">
              <div className="col-md-4">
                👨‍⚕️ Experts with proven track record
              </div>
              <div className="col-md-4 border-start border-end">
                💯 <strong>100% support</strong> by us after surgery
              </div>
              <div className="col-md-4">
                🧑‍⚕️ <strong>Trained staff</strong> for hair transplant
              </div>
            </div>
          </div>
        </div>

        {/* Doctors */}
        <div className="container my-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Only The Expert Guidance at QHT Clinic</h2>
            <p className="text-muted">
              QHT offers advanced techniques, expert surgeons, and high success
              rates beyond just affordability.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              576: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {doctors.map((doc, i) => (
              <SwiperSlide key={i}>
                <div className="card shadow border-0">
                  <img
                    src={doc.image}
                    className="card-img-top"
                    alt={doc.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{doc.name}</h5>
                    <p className="mb-1">{doc.degree}</p>
                    <small className="text-muted">{doc.spec}</small>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Team */}
        <div className="expertise-section py-5">
          <div className="container">
            <div className="row mb-4 align-items-start">
              <div className="col-md-6">
                <h2 className="fw-bold">
                  We Are A Team With <br />
                  Expertise & Commitment
                </h2>
              </div>
              <div className="col-md-6">
                <p className="text-muted">
                  QHT Hair Clinic is one of the leading hair transplant clinics
                  in India. We are recognized for our world-class treatment,
                  consistency, eye for aesthetics, and natural results.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {features.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 p-3 border-0 shadow-sm rounded-4">
                    <div className="fs-2 mb-2 text-success">{item.icon}</div>
                    <h5 className="fw-semibold">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <button className="btn btn-success px-4 py-2 rounded-pill">
                Schedule An Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Celeb */}
        <div className="py-5" style={{ backgroundColor: "#f4f8f4" }}>
          <div className="container text-center mb-4">
            <h2 className="fw-bold">Celebrities At QHT</h2>
            <p className="text-muted">
              Real stories, real experiences—see how we’ve made a difference!
            </p>
          </div>

          <div className="position-relative container">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              slidesPerView={1}
              loop={true}
            >
              {celebrityTestimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="row align-items-center testimonial-box rounded-4 overflow-hidden">
                    <div
                      className="col-md-6 p-5 text-white"
                      style={{ backgroundColor: "#5f714d" }}
                    >
                      <div className="fs-2 mb-3">❝</div>
                      <h5 className="fw-semibold mb-3">{item.review}</h5>
                      <p>{item.details}</p>
                      <p className="mt-4 mb-1">{"★".repeat(item.stars)}</p>
                      <p className="mb-0">
                        – {item.name.split(" ")[0]}{" "}
                        <strong>{item.name.split(" ")[1]}</strong>
                      </p>
                      <small className="text-white-50">{item.title}</small>
                    </div>
                    <div className="col-md-6 p-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid h-100 w-100 object-fit-cover"
                        style={{ objectFit: "cover", height: "100%" }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <Videos />

        <Testimonials />

        {/* Form */}
        <div
          className="container-fluid py-4"
          style={{ backgroundColor: "#5f714d" }}
        >
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
            <h5 className="text-white mb-3 mb-md-0">Request a callback</h5>
            <form className="d-flex flex-wrap justify-content-center gap-3">
              <input
                type="text"
                className="form-control bg-transparent text-white border-0 border-bottom"
                placeholder="First Name"
                style={{ width: "180px" }}
              />
              <input
                type="text"
                className="form-control bg-transparent text-white border-0 border-bottom"
                placeholder="Last Name"
                style={{ width: "180px" }}
              />
              <input
                type="tel"
                className="form-control bg-transparent text-white border-0 border-bottom"
                placeholder="Mobile"
                style={{ width: "150px" }}
              />
              <input
                type="email"
                className="form-control bg-transparent text-white border-0 border-bottom"
                placeholder="Email Address"
                style={{ width: "220px" }}
              />
              <button type="submit" className="btn btn-light rounded-pill px-4">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Different */}
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-2">
            How QHT Is Different from others
          </h2>
          <p className="text-center text-muted mb-5">
            QHT offers advanced hair transplant solutions with personalized
            care, often preferred over Delhi/Mumbai clinics for quality,
            technology, and results.
          </p>

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Features</th>
                  <th className="highlight-bg">QHT</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Technology Used</td>
                  <td className="highlight-bg">
                    <span className="check-icon">✔</span> Latest advanced tools
                    (e.g., Sapphire FUE, DHT)
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
                    <span className="cross-icon">✖</span> Often look artificial
                    or too dense
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
                    <span className="check-icon">✔</span> Hospital-grade sterile
                    environment
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

        <Services />

        {/* Medical Tourism */}
        <div className="sec-pad" id="tourism">
          <div className="container text-white py-5">
            <div className="row py-5">
              <h2 className="p-head w-50">
                QHT Medical Tourism facilities to make your experience
                extraordinary & Comfortable
              </h2>
              <p className="w-75 mt-2">
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
