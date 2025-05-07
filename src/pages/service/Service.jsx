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
import Booked from "../../assets/booked.png"
import Men from "../../assets/men.png"
import Psurgery from "../../assets/psurgery.png"
import Blog from "../../assets/blog.png"
import Testimonials from '../../components/Testimonials.jsx';
import Booknow from '../../components/Booknow.jsx';

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
    bg: Blog,
  },
  {
    title: "Elite Service",
    description:
      "Trusted by top personalities for reliable and consistent hair transplant treatments.",
    bg: Blog,
  },
  {
    title: "Premium Care",
    description:
      "Delivering personalized care with world-class infrastructure and equipment.",
    bg: Blog,
  },
  {
    title: "Premium Care",
    description:
      "Delivering personalized care with world-class infrastructure and equipment.",
    bg: Blog,
  },
  {
    title: "Premium Care",
    description:
      "Delivering personalized care with world-class infrastructure and equipment.",
    bg: Blog,
  },
  {
    title: "Premium Care",
    description:
      "Delivering personalized care with world-class infrastructure and equipment.",
    bg: Blog,
  },
];

const Service = () => {
  return (
    <>
      {/* Float Button */}
      <Booknow />

      {/* Why Choose Us */}
      <div className='sec-pad g-gradient'>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-5">
              <h2 className='p-head text-white'>Why choose QHT hair transplant?</h2>
            </div>
            <div className="col-md-7">
              <h5 className='text-white fw-light'>QHT Hair Transplant offers advanced techniques, natural results, minimal downtime, and expert care for lasting confidence.</h5>
            </div>
          </div>
          <div className="row">
            {clinicsData.map((clinic, index) => (
              <div className="col-md-4">
                <div
                  className="text-white p-4 mb-3 d-flex justify-content-end align-items-start flex-column"
                  key={index}
                  style={{
                    background: `url(${clinic.bg}) center center/cover no-repeat`,
                    minHeight: "400px", // optional
                    borderRadius: "12px", // optional
                  }}>
                  <h4>{clinic.title}</h4>
                  <p>{clinic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonals */}
      <Testimonials />

      {/* Post Surgery Support*/}
      <div className='sec-pad'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className='p-head mb-4'>Post Surgery Support</h2>
              <img src={Psurgery} className='w-75' alt="" />
            </div>
            <div className="col-md-6">
              <h5 className='sec-c fw-light mb-3 border-bottom pb-4'>We provide comprehensive post-surgery support, ensuring a smooth recovery through personalized care plans, regular follow-ups, and expert guidance—helping patients achieve optimal healing</h5>
              <div>
                <div className="border-bottom pb-4 mb-4 d-flex">
                  <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">✔</div>
                  <div>
                    <h4 className="fw-500 mb-1">Consultation & Assessment</h4>
                    <p className="mb-0 text-muted">A thorough evaluation of hair loss and donor area suitability is done.</p>
                  </div>
                </div>

                <div className="border-bottom pb-4 mb-4 d-flex">
                  <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">✔</div>
                  <div>
                    <h4 className="fw-500 mb-1">Donor Hair Extraction</h4>
                    <p className="mb-0 text-muted">Follicles are harvested from the donor area using methods like FUE or FUT.</p>
                  </div>
                </div>

                <div className="border-bottom pb-4 mb-4 d-flex">
                  <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">✔</div>
                  <div>
                    <h4 className="fw-500 mb-1">Recovery & Aftercare</h4>
                    <p className="mb-0 text-muted">Post-procedure instructions are provided for healing, hair growth, and maintenance.</p>
                  </div>
                </div>

                <div className="border-bottom pb-4 mb-4 d-flex">
                  <div className="me-3 text-white ter-bg fw-light rounded-circle just-align-center h-50 fs-6 mt-2 px-2 py-1">✔</div>
                  <div>
                    <h4 className="fw-500 mb-1">Preparation & Implantation</h4>
                    <p className="mb-0 text-muted">Extracted follicles are carefully prepared and then implanted into the thinning or bald areas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Dont's */}
      <div className='sec-pad primary-bg'>
        <div className="container">
          <div className="row justify-content-center">
            <h2 className='p-head text-white text-center'>Do’s and Don’ts After Hair Transplantation</h2>
            <h5 className='sec-c fw-light w-75 my-3 text-white text-center'>After undergoing a hair transplant in Haridwar at QHT Clinic, it’s crucial to follow these guidelines to ensure optimal recovery and results:</h5>
          </div>
          <div className="container py-5">
            <div className="row g-5">
              {/* Don'ts */}
              <div className="col-md-6">
                <div className="p-5 rounded-5 shadow bg-white h-100">
                  <h4 className="fw-bold fs-3 mb-3 border-bottom border-lgrey pb-4">Don’ts</h4>
                  <ul className="list-unstyled">
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px">
                      <span className='bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center'>✖</span> &nbsp;
                      <span>Avoid direct sunlight and UV rays for the first few weeks. Keep your scalp protected.</span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px">
                      <span className='bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center'>✖</span> &nbsp;
                      <span>Avoid heavy exercise or activities that cause excessive sweating.</span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px">
                      <span className='bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center'>✖</span> &nbsp;
                      <span>Avoid touching, scratching, or picking at the transplanted area to prevent dislodging grafts.</span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px">
                      <span className='bg-danger fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center'>✖</span> &nbsp;
                      <span>Refrain from using hair products like gels, sprays, or dyes for at least a few weeks.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Do’s */}
              <div className="col-md-6">
                <div className="p-5 rounded-5 shadow bg-white h-100">
                  <h4 className="fw-bold fs-3 mb-3 border-bottom border-lgrey pb-4">Do’s</h4>
                  <ul className="list-unstyled">
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px">
                      <span className='primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center'>✓</span> &nbsp;
                      <span>Adhere to the recommended post-operative care instructions.</span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px">
                      <span className='primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center'>✓</span> &nbsp;
                      <span>Gently wash your scalp as advised to prevent infection.</span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px">
                      <span className='primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center'>✓</span> &nbsp;
                      <span>Maintain a healthy diet and stay hydrated to support healing.</span>
                    </li>
                    <li className="my-3 border-bottom border-lgrey pt-3 fs-5 fw-light d-flex h-100px">
                      <span className='primary-bg fs-20px hw-20 text-white rounded-circle d-flex justify-content-center align-items-center'>✓</span> &nbsp;
                      <span>Take prescribed medications to manage pain and prevent infection.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery */}
      <div className='sec-pad sec-bg'>
        <div className="container">
          <div className="row">
            <h2 className='p-head'>Recovery time & after care of hair transplant.</h2>
            <h5 className='sec-c fw-light w-75 my-3'>Learn about the recovery timeline and essential aftercare tips following a hair transplant to ensure proper healing, optimal results, and long-lasting, healthy hair growth.</h5>
          </div>
          <div className="container py-5">
            <div className="row">
              {/* Tabs Navigation */}
              <div className="col-md-2">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  {["Week 01", "Week 02", "Week 03", "Week 04", "Week 05"].map((week, index) => (
                    <button
                      key={index}
                      className={`nav-link sec-c rounded-pill tab-btn text-center mb-4 w-75 ${index === 3 ? "active" : ""}`}
                      id={`v-pills-${index}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#v-pills-${index}`}
                      type="button"
                      role="tab"
                    >
                      {week}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="col-md-10">
                <div className="tab-content" id="v-pills-tabContent">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className={`tab-pane fade ${index === 3 ? "show active" : ""}`}
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
                          <div className="bg-light p-4 mb-3 rounded-4 shadow-sm">
                            <h6 className="primary-c fw-bold">WHAT TO EXPECT</h6>
                            <ul className="list-unstyled fw-light">
                              <li className='py-4 border-bottom border-lgrey'><span className='primary-bg text-white rounded-circle px-1 fs-20px'>✓</span> Transplanted hairs may shed significantly (don’t panic)</li>
                              <li className='py-4'><span className='primary-bg text-white rounded-circle px-1 fs-20px'>✓</span> Redness reduces, scalp feels more normal</li>
                            </ul>
                          </div>

                          {/* How to Care */}
                          <div className="bg-light p-4 mb-3 rounded-4 shadow-sm">
                            <h6 className="primary-c fw-bold">HOW TO CARE</h6>
                            <ul className="list-unstyled fw-light">
                              <li className='py-4 border-bottom border-lgrey'><span className='primary-bg text-white rounded-circle px-1 fs-20px'>✓</span> Resume light physical activities</li>
                              <li className='py-4 border-bottom border-lgrey'><span className='primary-bg text-white rounded-circle px-1 fs-20px'>✓</span> Keep scalp clean and moisturized (if advised)</li>
                              <li className='py-4'><span className='primary-bg text-white rounded-circle px-1 fs-20px'>✓</span> Stay patient — new growth hasn’t started yet</li>
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
      <div className='sec-pad primary-bg'>
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <h2 className='p-head text-white fw-normal'>Get 20% off on your first booking!</h2>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center border-x px-4 border-white">
              <img src={Booked} className='w-100' alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <button className='btn rounded-pill fs-5 px-5 py-3 bg-white primary-c'>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className='sec-pad pb-0'>
        <div className="container">
          <div className="row justify-content-center">
            <h2 className='p-head text-center'>Comparison of GFC vs PRP Hair treatment</h2>
            <h5 className='sec-c fw-light text-center w-75 my-3'>GFC injections are different from the PRP injections, though both of them are non-invasive, the following factors make them different from one to another:</h5>
          </div>
          <div className="row align-items-center py-4">
            <div className="col-md-4 p-0">
              <div className='treat-box tb-1'>
                <h4 className='primary-c fw-500'>Feature</h4>
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
              <div className='treat-box tb-2'>
                <h4 className='primary-c fw-500'>GFC treatment</h4>
                <ul>
                  <li>Higher the concentration of the growth factors, better are the results</li>
                  <li>Minimal, due to the use of latest technology</li>
                  <li>More consistent results can be achieved</li>
                  <li>Very low</li>
                  <li>Moderately priced & is effective</li>
                </ul>
              </div></div>
            <div className="col-md-4 p-0">
              <div className='treat-box tb-3'>
                <h4 className='primary-c fw-500'>PRP treatment</h4>
                <ul>
                  <li>Even lower plasma concentration is enough</li>
                  <li>Moderate due to the less refined technological process</li>
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
      <div className='sec-pad' id='faq'>
        <div className="container border-top border-grey pt-5">
          <div className="row pt-5">
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
