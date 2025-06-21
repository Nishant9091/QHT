import React from "react";
import "../our-clinic/OurClinic.css";
import Services from "../../components/Services";
import india from "../../assets/india.png";
import hospi from "../../assets/icon/hospi.png";
import tarlap from "../../assets/icon/tarlap.png";
import bulbpuzz from "../../assets/icon/bulbpuzz.png";
import bulbppl from "../../assets/icon/bulbppl.png";
import m3 from "../../assets/democlinic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const OurClinic = () => {
  return (
    <>
      {/* Banner */}
      <div className="sec-pad clibanner">
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

      {/* Clinic Gallery */}
      <div className="sec-pad">
        <div className="container">
          <h2 className="p-head">
            We have state of the art hair transplant clinic across in india.
          </h2>
          <p className="sec-c">
            We have state-of-the-art hair transplant clinics across India,
            offering advanced treatments with the latest technology and highly
            experienced surgeons. Our clinics are equipped to provide safe,
            effective, and natural-looking results. Whether you're dealing with
            hair loss or looking for hair restoration, QHT Clinic ensures
            personalized care and exceptional outcomes in every major city
            across India.
          </p>
          <div className="row flex-column-reverse flex-md-row gap-4 gap-md-0 my-5 py-3 justify-content-between">   
            <div className="col-md-4">
              <div className="sec-bg px-5 py-4 rounded-4">
                <div className="row py-4">
                  <div className="col-md-2">
                    <FaMapMarkerAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">
                    D -15, Outer Ring Rd, above Federal Bank, Prashant Vihar,
                    Sector 14, Rohini, New Delhi, Delhi, 110085
                  </div>
                </div>
                <div className="row py-4 border-y border-lgrey">
                  <div className="col-md-2">
                    <FaPhoneAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">+91 07217033844</div>
                </div>
                <div className="row py-4">
                  <div className="col-md-2">
                    <FaEnvelope className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">care@qhtclinic.com</div>
                </div>
              </div>
              <div className="bg-parda text-white mt-4 rounded-4 p-5">
                <h3>Get An Expert Assistance.</h3>
                <p>Get expert assistance for safe, effective hair restoration.</p>
                <button className="btn bg-white primary-c rounded-pill px-3 py-2 mt-2">Consult us</button>
              </div>
            </div>
            <div className="col-md-8">
              <h3>Hair transplant clinic - QHT Delhi</h3>
              <p className="sec-c mb-5">
                QHT Haridwar Hair Clinic offers advanced hair transplant
                solutions with expert care and natural-looking results.
              </p>

              <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          
          <div className="row flex-column-reverse flex-md-row gap-4 gap-md-0 my-5 py-3 justify-content-between">   
            <div className="col-md-4">
              <div className="sec-bg px-5 py-4 rounded-4">
                <div className="row py-4">
                  <div className="col-md-2">
                    <FaMapMarkerAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">
                    D -15, Outer Ring Rd, above Federal Bank, Prashant Vihar,
                    Sector 14, Rohini, New Delhi, Delhi, 110085
                  </div>
                </div>
                <div className="row py-4 border-y border-lgrey">
                  <div className="col-md-2">
                    <FaPhoneAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">+91 07217033844</div>
                </div>
                <div className="row py-4">
                  <div className="col-md-2">
                    <FaEnvelope className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">care@qhtclinic.com</div>
                </div>
              </div>
              <div className="bg-parda text-white mt-4 rounded-4 p-5">
                <h3>Get An Expert Assistance.</h3>
                <p>Get expert assistance for safe, effective hair restoration.</p>
                <button className="btn bg-white primary-c rounded-pill px-3 py-2 mt-2">Consult us</button>
              </div>
            </div>
            <div className="col-md-8">
              <h3>Hair transplant clinic - QHT Noida</h3>
              <p className="sec-c mb-5">
                QHT Haridwar Hair Clinic offers advanced hair transplant
                solutions with expert care and natural-looking results.
              </p>

              <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="row flex-column-reverse flex-md-row gap-4 gap-md-0 my-5 py-3 justify-content-between">   
            <div className="col-md-4">
              <div className="sec-bg px-5 py-4 rounded-4">
                <div className="row py-4">
                  <div className="col-md-2">
                    <FaMapMarkerAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">
                    D -15, Outer Ring Rd, above Federal Bank, Prashant Vihar,
                    Sector 14, Rohini, New Delhi, Delhi, 110085
                  </div>
                </div>
                <div className="row py-4 border-y border-lgrey">
                  <div className="col-md-2">
                    <FaPhoneAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">+91 07217033844</div>
                </div>
                <div className="row py-4">
                  <div className="col-md-2">
                    <FaEnvelope className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">care@qhtclinic.com</div>
                </div>
              </div>
              <div className="bg-parda text-white mt-4 rounded-4 p-5">
                <h3>Get An Expert Assistance.</h3>
                <p>Get expert assistance for safe, effective hair restoration.</p>
                <button className="btn bg-white primary-c rounded-pill px-3 py-2 mt-2">Consult us</button>
              </div>
            </div>
            <div className="col-md-8">
              <h3>Hair transplant clinic - QHT Hyderabad</h3>
              <p className="sec-c mb-5">
                QHT Haridwar Hair Clinic offers advanced hair transplant
                solutions with expert care and natural-looking results.
              </p>

              <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="row flex-column-reverse flex-md-row gap-4 gap-md-0 my-5 py-3 justify-content-between">   
            <div className="col-md-4">
              <div className="sec-bg px-5 py-4 rounded-4">
                <div className="row py-4">
                  <div className="col-md-2">
                    <FaMapMarkerAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">
                    D -15, Outer Ring Rd, above Federal Bank, Prashant Vihar,
                    Sector 14, Rohini, New Delhi, Delhi, 110085
                  </div>
                </div>
                <div className="row py-4 border-y border-lgrey">
                  <div className="col-md-2">
                    <FaPhoneAlt className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">+91 07217033844</div>
                </div>
                <div className="row py-4">
                  <div className="col-md-2">
                    <FaEnvelope className="text-white primary-bg p-2 fs-2 rounded-circle" />
                  </div>
                  <div className="col-md-10 sec-c">care@qhtclinic.com</div>
                </div>
              </div>
              <div className="bg-parda text-white mt-4 rounded-4 p-5">
                <h3>Get An Expert Assistance.</h3>
                <p>Get expert assistance for safe, effective hair restoration.</p>
                <button className="btn bg-white primary-c rounded-pill px-3 py-2 mt-2">Consult us</button>
              </div>
            </div>
            <div className="col-md-8">
              <h3>Hair transplant clinic - QHT Uttarakhand</h3>
              <p className="sec-c mb-5">
                QHT Haridwar Hair Clinic offers advanced hair transplant
                solutions with expert care and natural-looking results.
              </p>

              <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={m3} className="w-100 h-100 rounded-4" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="sec-pad primary-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="p-head text-white mb-3">
                All Our Clinics Feature Cutting-Edge Technology & Skilled
                Professionals
              </h2>
              <p className="text-white">
                All our clinics are equipped with the latest machinery and
                advanced technology to ensure the highest standards in hair
                transplant procedures. We combine innovation with a skilled team
                of experienced professionals dedicated to delivering excellent
                results. Our clinics maintain strict hygiene, safety, and
                quality protocols. With access to cutting-edge tools and
                techniques, we aim to provide personalized solutions for every
                patient. The talented staff at each QHT Clinic ensures a
                seamless, comfortable experience and natural-looking, lasting
                hair restoration outcomes across India.
              </p>
              <button className="btn bg-white rounded-pill primary-c px-3 py-2 mt-5">
                About Us
              </button>
            </div>
            <div className="col-md-6 px-md-5 mt-5 mt-md-0 text-white">
              <div className="row mx-3 border-y border-grey py-4 just-align-center">
                <div className="col-md-2 just-align-center">
                  <img src={tarlap} width="60" alt="" />
                </div>
                <div className="col-md-10">
                  <h4>Advanced Technology</h4>
                  <p className="m-0">
                    Equipped with the latest hair transplant machinery for
                    precise and effective treatments.
                  </p>
                </div>
              </div>
              <div className="row mx-3 border-y border-grey py-4 just-align-center">
                <div className="col-md-2 just-align-center">
                  <img src={bulbppl} width="60" alt="" />
                </div>
                <div className="col-md-10">
                  <h4>Expert Team</h4>
                  <p className="m-0">
                    Highly trained and experienced surgeons and staff ensure
                    top-quality care and results.
                  </p>
                </div>
              </div>
              <div className="row mx-3 border-y border-grey py-4 just-align-center">
                <div className="col-md-2 just-align-center">
                  <img src={hospi} width="60" alt="" />
                </div>
                <div className="col-md-10">
                  <h4>Nationwide Clinics</h4>
                  <p className="m-0">
                    Consistent standards of excellence maintained across all
                    locations in India.
                  </p>
                </div>
              </div>
              <div className="row mx-3 border-y border-grey py-4 just-align-center">
                <div className="col-md-2 just-align-center">
                  <img src={bulbpuzz} width="60" alt="" />
                </div>
                <div className="col-md-10">
                  <h4>Personalized Solutions</h4>
                  <p className="m-0">
                    Tailored treatment plans designed to meet individual hair
                    restoration needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />

      {/* Reviews & Testimoinals */}
      <div className="sec-pad sec-bg">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-7 p-md-5 pt-5 pt-md-0 just-align-center align-items-start flex-column">
              <h2 className="p-head">
                Reviews & Testimonials <br /> by our clients.
              </h2>
              <p className="sec-c">
                Read genuine reviews and testimonials from our satisfied clients
                <br /> who experienced successful hair restoration results.
              </p>
              <div className="mt-3">
                <button className="primary-btn px-4 me-3">
                  Explore Reviews
                </button>
                <button className="text-secondary px-4 me-3 bg-transparent border rounded-pill primary-btn">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <img src={india} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClinic;
