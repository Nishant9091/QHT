import React from "react";
import "../contactus/ContactUs.css";
import callmsg from "../../assets/icon/callmsg.png";
import hosp from "../../assets/icon/hosp.png";
import msgppl from "../../assets/icon/msgppl.png";
import haridwar from "../../assets/icon/haridwar.png";
import delhi from "../../assets/icon/delhi.png";
import hydrabad from "../../assets/icon/hydrabad.png";
import loc from "../../assets/icon/loc.png";
import noida from "../../assets/icon/noida.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ExploreMore from "../../components/ExploreMore";

const clinics = [
  {
    city: "Delhi",
    address:
      "D-15, Outer Ring Rd, above Federal Bank, Prashant Vihar, Sector 14, Rohini, New Delhi, Delhi, 110085",
    contact: "07217033844",
    icon: delhi,
  },
  {
    city: "Hyderabad",
    address:
      "QHT Clinic Opposite Hotel Park Hyatt Road No. 2 Banjara Hills, Hyderabad, Telangana",
    contact: "09992228265",
    icon: hydrabad,
  },
  {
    city: "Haridwar",
    address:
      "QHT Clinic, 521, Model Colony, Ranipur More, Haridwar, Uttarakhand",
    contact: "09528168089",
    icon: haridwar,
  },
  {
    city: "Noida",
    address:
      "3rd Floor, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301",
    contact: "09899015045",
    icon: noida,
  },
];

const ContactUs = () => {
  return (
    <>
      {/* Banner */}
      <div className="sec-pad cbanner">
        <div className="container just-align-center h-100">
          <div className="row">
            <h1 className="text-white text-center display-3 fw-normal">
              Contact QHT Clinic
            </h1>
            <h4 className="text-white text-center fw-light">
              Expert care, compassionate service, here when needed most.
            </h4>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="sec-pad patti">
        <div className="container">
          <div className="row text-center text-md-start text-white">
            <div className="col-md-4 border-x mb-3 mb-md-0 border-grey">
              <div className="row justify-content-center">
                <div className="col-md-4 just-align-center">
                  <img src={msgppl} className="mb-3 mb-md-0" alt="" />
                </div>
                <div className="col-md-7 just-align-center">
                  <h5 className="fw-normal">
                    Personalized Hair Loss Help Services
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 border-x mb-3 mb-md-0 border-grey">
              <div className="row justify-content-center">
                <div className="col-md-4 just-align-center">
                  <img src={callmsg} className="mb-3 mb-md-0" alt="" />
                </div>
                <div className="col-md-7 just-align-center">
                  <h5 className="fw-normal">
                    Quick & Easy <br className="d-none d-md-block" /> Contact
                    Options
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 border-x mb-3 mb-md-0 border-grey">
              <div className="row justify-content-center">
                <div className="col-md-4 just-align-center">
                  <img src={hosp} className="mb-3 mb-md-0" alt="" />
                </div>
                <div className="col-md-7 just-align-center">
                  <h5 className="fw-normal">
                    Trusted Clinic, Proven Transplant Results
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="sec-pad sec-bg" id="form">
        <div className="container py-5">
          <div className="row align-items-start">
            <div className="col-md-6 mb-4">
              <h2 className="p-head text-black">
                Contact The
                <br />
                Leading Hair Transplant
                <br />
                Clinic In India.
              </h2>
              <p className="sec-c mt-3">
                Reach out to India’s leading hair transplant clinic for
                <br />
                expert care, proven results, and support.
              </p>

              <div className="d-flex align-items-center mt-5">
                <div className="icon-circle primary-bg text-white px-2 py-1 rounded-circle me-3">
                  <FaEnvelope />
                </div>
                <span>regrowclinic@gmail.com</span>
              </div>

              <div className="d-flex align-items-center mt-3">
                <div className="icon-circle primary-bg text-white px-2 py-1 rounded-circle me-3">
                  <FaPhoneAlt />
                </div>
                <span>+91-9084726916, +91-9084726916</span>
              </div>

              <div className="mt-4">
                <span className="bg-white px-2 py-1 me-3 rounded-circle primary-c">
                  <FaInstagram />
                </span>
                <span className="bg-white px-2 py-1 me-3 rounded-circle primary-c">
                  <FaFacebookF />
                </span>
                <span className="bg-white px-2 py-1 me-3 rounded-circle primary-c">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control bg-transparent p-3 border-none rounded-0 border-bottom mb-4 border-grey"
                    rows="3"
                    placeholder="Type your message"
                  ></textarea>
                </div>
                <button type="submit" className="primary-btn px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* City */}
      <div className="sec-pad">
        <div className="container py-5 text-center">
          <h2 className="p-head mb-3">Locate Our Clinics</h2>
          <p className="sec-c mb-5">
            Discuss and compare QHT with other hair transplant techniques. Share
            experiences, <br /> ask questions, and get expert insights from real
            patients.
          </p>

          <div className="row gap-0">
            {clinics.map((clinic, idx) => (
              <div className="col-md-3 p-0" key={idx}>
                <div className="border-x border-lgrey py-4 px-5 h-100 text-start position-relative">
                  {/* <div className="fs-1 mb-3">{clinic.icon}</div> */}
                  <img
                    src={clinic.icon}
                    className="mb-3 object-fit-contain"
                    width="60"
                    height="60"
                    alt=""
                  />
                  <div className="d-flex align-items-center mb-2">
                    <img src={loc} width="30" className="me-2" alt="" />
                    <h5 className="mb-0 fw-normal text-black">{clinic.city}</h5>
                  </div>
                  <p className="sec-c fs-small mb-1 mt-3 h-100px">
                    {clinic.address}
                  </p>
                  <p className="mb-0 text-secondary">
                    <span className="text-black">Contact :</span>{" "}
                    {clinic.contact}
                  </p>
                  <div className="d-flex justify-content-start align-items-center mt-4 fs-3">
                    🡽
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ExploreMore />
    </>
  );
};

export default ContactUs;
