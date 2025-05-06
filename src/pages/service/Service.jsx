import React from 'react';
import './Service.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Bangalore from "../../assets/city/bangalore.png"
import Ahmedabad from "../../assets/city/ahmedabad.png"
import Chandigarh from "../../assets/city/chandigarh.png"
import Chennai from "../../assets/city/chennai.png"
import Gurgaon from "../../assets/city/gurgaon.png"
import Hairdwar from "../../assets/city/hairdwar.png"
import Hyderabad from "../../assets/city/hyderabad.png"
import Indore from "../../assets/city/indore.png"
import Jaipur from "../../assets/city/jaipur.png"
import Kolkata from "../../assets/city/kolkata.png"
import Lucknow from "../../assets/city/lucknow.png"
import Mumbai from "../../assets/city/mumbai.png"
import Noida from "../../assets/city/noida.png"
import Pune from "../../assets/city/pune.png"
import Rishikesh from "../../assets/city/rishikesh.png"
import S1 from "../../assets/s1.png"
import S2 from "../../assets/s2.png"
import S3 from "../../assets/s3.png"
import Llogo from "../../assets/llogo.png"

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

const Service = () => {
  return (
    <>

      {/* FAQs */}
      <div className='sec-pad' id='faq'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 justify-content-between d-flex flex-column">
              <div>
                <h2 className='p-head w-75'>Frequently Asked
                  Questions.</h2>
                <h5 className='sec-c fw-light my-3'>If you don’t find relevant answer please send us your queries on support@qhtclinic.com or Call +91-9084726916</h5>
              </div>
              <img src={Llogo} width="250" alt="" />
            </div>
            <div className="col-md-6">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      What are the common causes of donor are a pain after a hair transplant?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sec-c p-0 pb-5">
                      Donor area pain post-transplant can stem from mild inflammation, nerve irritation, or tension on the scalp. It’s a normal part of the healing process and usually subsides within a few days.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      What's the cost of hair transplant in India?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sec-c p-0 pb-5">
                      The cost varies depending on several factors like technique and grafts needed. Contact us for a free estimate.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      Which are the different packages provided for hair transplant India?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sec-c p-0 pb-5">
                      We offer standard, premium, and VIP packages customized to your needs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      Is there any impact of the type of hair surgery on the cost?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sec-c p-0 pb-5">
                      Yes, different techniques like FUE, FUT, or DHI have varying costs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                      Does hair transplant damage existing hair?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body sec-c p-0 pb-5">
                      No, if performed correctly, the existing hair remains unaffected.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className='sec-pad' id='insights'>
        <div className="container border-top border-grey pt-5">
          <h2 className='p-head mb-5'>Hair Care & Transplant Insights</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img src={S3} className='w-100 mb-4 h-250 rounded-3' alt="" />
              <h4>6 Hair Transplant Things To Know Before Hair Transplant</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={S2} className='w-100 mb-4 h-250 rounded-3' alt="" />
              <h4>Is Hair Transplantation the Best Solution for Thinning Hair?</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={S1} className='w-100 mb-4 h-250 rounded-3' alt="" />
              <h4>Top 5 Benefits of Getting a Hair Transplant</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={S1} className='w-100 mb-4 h-250 rounded-3' alt="" />
              <h4>Top 5 Benefits of Getting a Hair Transplant</h4>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Locations */}
      <div className='g-gradient sec-pad' id='location'>
        <div className="container">
          <h2 className='p-head text-center text-white py-5'>Your City, Our Services - Now Available <br /> in 15 Locations Across India</h2>
          <div className="row">
            {cities.map((city, index) => (
              <div className="col-md-2 p-3" key={index}>
                <div className='box rounded-4'>
                  <img src={city.img} alt={city.name} />
                  <h4 className='text-white fw-normal fs-5'>{city.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <div className='sec-bg sec-pad'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6">
              <h2 className='p-head'>Get in touch with us <br /> or you can visit us.</h2>
              <h5 className='sec-c fw-light w-75 my-3'>Reach out anytime or visit us directly for personalized assistance, expert guidance, and seamless support experience.</h5>
              <ul className='list-unstyled fw-500 mt-2 lh-lg'>
                <li>+91-9897020696</li>
                <li>regrowclinic@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <input className='form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4' type="text" placeholder='First Name' />
                  </div>
                  <div className="col-md-6">
                    <input className='form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4' type="text" placeholder='Last Name' />
                  </div>
                  <div><input className='form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4' type="email" placeholder='Email Address' /></div>
                  <div><input className='form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4' type="tel" placeholder='Mobile' /></div>
                  <div>
                    <select className='form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4'>
                      <option value="Interested In ?" selected disabled>Interested In ?</option>
                      <option value="PRP">PRP</option>
                      <option value="PRP">PRP</option>
                      <option value="PRP">PRP</option>
                    </select>
                  </div>
                  <button className='primary-btn w-25'>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 p-3">
              <div className='bg-white rounded-4 p-4 h-100'>
                <FaMapMarkerAlt className='fs-3 primary-c' />
                <h4 className='my-3'>Haridwar</h4>
                <p className='sec-c'>QHT Clinic,521, Model Colony, Ranipur More, Haridwar, Uttarakhand</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className='bg-white rounded-4 p-4 h-100'>
                <FaMapMarkerAlt className='fs-3 primary-c' />
                <h4 className='my-3'>Delhi</h4>
                <p className='sec-c'>D -15, Outer Ring Rd, above Federal Bank, Prashant Vihar, Sector 14, Rohini, New Delhi, Delhi, 110085</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className='bg-white rounded-4 p-4 h-100'>
                <FaMapMarkerAlt className='fs-3 primary-c' />
                <h4 className='my-3'>Hyderabad</h4>
                <p className='sec-c'>QHT Clinic Opposite Hotel Park HyattRoad No. 2 Banjara Hills, Hyderabad, Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
