import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Kapil from '../../assets/kapil.png';
import Anil from '../../assets/anil.png';
import surgery from '../../assets/surgery.png';
import book from '../../assets/book.png';
import after from '../../assets/after.png';
import jhat from '../../assets/jhat.png';
import ban from '../../assets/ban.png';
import test from '../../assets/test.png';
import quote from '../../assets/quotes.png';
import Process from '../../assets/process.png';
import i1 from '../../assets/icon/1.png';
import i2 from '../../assets/icon/2.png';
import i3 from '../../assets/icon/3.png';
import i4 from '../../assets/icon/4.png';
import i5 from '../../assets/icon/5.png';
import or from '../../assets/or.png';
import './Home.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import 'bootstrap/dist/css/bootstrap.min.css';


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

const grades = ["Grade I", "Grade II", "Grade III", "Grade IV", "Grade V", "Grade VI", "Grade VII"];

const tabs = [
  { id: 0, label: "Who Performs your surgery?" },
  { id: 1, label: "Technology" },
  { id: 2, label: "Graft Handling" },
  { id: 3, label: "Naturalness" },
  { id: 4, label: "Safety" },
];

const Home = () => {
  const [selectedGrade, setSelectedGrade] = useState("Grade III");

  const filteredTestimonials = testimonialsData.filter((item) => item.grade === selectedGrade);

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{
        background: "linear-gradient(180deg, rgba(240, 246, 242, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)",overflowX:"hidden"
      }}>
        {/* Fixed button */}
        <div
          className={`d-flex justify-content-center align-items-center gap-3 bg-white px-3 rounded-pill position-fixed shadow`}
          style={{
            left: "36%",
            bottom: isVisible ? "5%" : "0%", // this moves it
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease',
            zIndex: "9999",
            height: "70px"
          }}
        >
          <div>
            <button className='primary-btn'>Book an Appointment</button>
          </div>
          <div>
            <img src={or} alt="" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
          </div>
          <div>
            <button className='primary-btn'>Live Chat &nbsp;&nbsp;&nbsp;&nbsp;💬</button>
          </div>
        </div>

        {/* Banner */}
        <div className='container pt-5'>
          <div className='row justify-content-center align-items-center' style={{ height: "400px" }}>
            <h1 className='text-center w-75' style={{ fontSize: "50px" }}>Get your younger looks back <br /> today <span className='primary-c'>with hair transplant <br /> clinic in india.</span></h1>
            <h5 className='text-center w-75' style={{ color: "#777" }}>Regain your hair, rebuild confidence, and transform your life with expert hair <br /> restoration solutions tailored to your unique needs</h5>
            <div className='d-flex justify-content-center align-items-center'>
              <button className='btn text-white rounded-pill p-3 fw-bold primary-bg' style={{ width: "250px" }}>Book Free Consultation</button>
            </div>
          </div>
        </div>

        {/* Celeb Slider */}
        <div className="container-fluid my-5 py-5">
          <Swiper
            spaceBetween={30}
            slidesPerView={3} // how many slides visible at once
            loop={true}
          >
            <SwiperSlide>
              <div><img className='border-30 w-100' src={Kapil} alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
              <div><img className='border-30 w-100' src={Anil} alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
              <div><img className='border-30 w-100' src={Kapil} alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
              <div><img className='border-30 w-100' src={Anil} alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
              <div><img className='border-30 w-100' src={Kapil} alt="" /></div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Truth */}
        <div className="container my-4 primary-bg border-30 p-5" id='truth' style={{
          background: "#333C29",
          background: "linear-gradient(90deg, rgba(51, 60, 41, 1) 0%, rgba(82, 94, 70, 1) 50%, rgba(80, 91, 69, 1) 100%)"
        }}>
          <h2 className='text-white fs-1 mt-5'>The Bald Truth.</h2>
          <h6 className='text-white mb-5'>Most transplant fail - beacuse no one tells you what really matters.</h6>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
          >
            <SwiperSlide>
              <div>
                <div className='d-flex justify-content-center align-items-start'>
                  <div>
                    <h1 className='truth-h mx-3'>1.</h1>
                  </div>
                  <div>
                    <h2 className='text-white fw-bold'> 70% of hair transplant fail in 3 years.</h2>
                    <h5 className='text-white'>
                      Because most clinic chase looks, not longevity.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className='d-flex justify-content-center align-items-start'>
                  <div>
                    <h1 className='truth-h mx-3'>2.</h1>
                  </div>
                  <div>
                    <h2 className='text-white fw-bold'> Donor hair never grows back once it is removed.</h2>
                    <h5 className='text-white'>
                      Bad planning equals permanent loss with no recovery.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className='d-flex justify-content-center align-items-start'>
                  <div>
                    <h1 className='truth-h mx-3'>3.</h1>
                  </div>
                  <div>
                    <h2 className='text-white fw-bold'> One bad transplant = lifelong regret</h2>
                    <h5 className='text-white'>
                      Scars. Fewer grafts. No second chances.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className='d-flex justify-content-center align-items-start'>
                  <div>
                    <h1 className='truth-h mx-3'>1.</h1>
                  </div>
                  <div>
                    <h2 className='text-white fw-bold'> 70% of hair transplant fail in 3 years.</h2>
                    <h5 className='text-white'>
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
        <div className='container my-5'>
          <div className="row">
            <div className='d-flex justify-content-between align-items-center border-bottom pb-4 mb-4'>
              <h2 className='fs-1'>Our Promise</h2>
              <h6 className='border py-1 px-2 rounded text-secondary'>1</h6>
            </div>
            <div className='col-md-6'>
              <h4>No shortcuts. No surprises. Just results that last a lifetime.</h4>
            </div>
            <div className='col-md-6'>
              <ol className="custom-ol">
                <li>
                  <h6> Surgeon-Only Transplants</h6>
                  <p className='text-secondary fs-6'>No technicians playing doctor. Every graft placed by certified surgeons only.
                  </p>
                </li>
                <li>
                  <h6> Smart Graft Planning</h6>
                  <p className='text-secondary fs-6'>We plan for your future hair loss, not just today's bald spots.
                  </p>
                </li>
                <li>
                  <h6> Natural-Looking Density</h6>
                  <p className='text-secondary fs-6'>No pluggy look. No weird hairlines. Just seamless, natural results.
                  </p>
                </li>
                <li>
                  <h6> One-Time Procedure, Lifetime Results</h6>
                  <p className='text-secondary fs-6'>We don't build repeat customers. We build permanent confidence.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Surg Slider */}
        <div className="container-fluid my-5 py-5">
          <Swiper
            spaceBetween={30}
            slidesPerView={3} // how many slides visible at once
            loop={true}
          >
            <SwiperSlide>
              <div><img className='border-30 w-100' src={surgery} alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
              <div><img className='border-30 w-100' src={surgery} alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
              <div><img className='border-30 w-100' src={surgery} alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
              <div><img className='border-30 w-100' src={surgery} alt="" /></div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* See differce */}
        <div className="container py-5 text-center" id='differnce'>
          <h2 className="fw-bold">Slide to See the Difference That Matters</h2>
          <p className="text-muted">
            Most clinics promise dreams, but we focus on delivering real,<br /> lifelong transformative results.
          </p>

          <div className="d-flex justify-content-center gap-5 align-items-center icons">
            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Who Performs your surgery? ">
              <img src={i1} alt="icon1" />
            </div>
            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Who Performs your surgery? ">
              <img src={i2} alt="icon2" />
            </div>
            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Who Performs your surgery? ">
              <img src={i3} alt="icon3" />
            </div>
            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Who Performs your surgery? ">
              <img src={i4} alt="icon4" />
            </div>
            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Who Performs your surgery? ">
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
          <div className='d-flex justify-content-center align-items-center'>
            <div className="bg-white rounded-4 border p-4 mt-4 w-75">
              {[...Array(3)].map((_, i) => (
                <div className="row align-items-center my-4 border-bottom" key={i}>
                  <div className="col-md-3 my-4 text-end">
                    <p className="fw-semibold mb-0 text-muted fw-bold">Most Clinics ❎</p>
                    <small className="text-muted text-light">Technicians, not <br /> surgeons</small>
                  </div>
                  <div className="col-md-6 my-4">
                    <div className="comparison-bar">
                      <div className="fill-line" style={{ width: '80%' }}></div>
                      <div className="smiley" style={{ left: '80%' }}>😊</div>
                    </div>
                  </div>
                  <div className="col-md-3 my-4 text-start">
                    <p className="fw-semibold primary-c fw-bold mb-0">QHT PROMISE ✅</p>
                    <small>Only experienced <br /> touch your scalp.</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn text-white rounded-pill px-4" style={{ backgroundColor: "#C7C7C7" }}
              onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
            >
              « &nbsp;&nbsp;&nbsp; PREV
            </button>
            <button
              className="btn primary-bg text-white rounded-pill px-4"
              onClick={() => setActiveTab(prev => Math.min(tabs.length - 1, prev + 1))}
            >
              NEXT &nbsp;&nbsp;&nbsp; »
            </button>
          </div>
        </div>

        {/* Process */}
        <div id='process' className='py-5'>
          <div className="container py-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold">A Team of Experts, Focused on You</h2>
              <p className="text-muted">
                Hair restoration <strong>isn’t a one-person job</strong>. At QHT, a team of seasoned specialists — from surgeons to nurses —
                works <br /> in sync to give you natural, lasting results with zero compromise.
              </p>
            </div>

            {/* Timeline */}
            <div className="position-relative mb-5">
              <div className="d-flex justify-content-between mb-2 px-2 fw-bold primary-c">
                <span>Consultation</span>
                <span>Pre-Surgery Prep</span>
                <span className="badge primary-bg rounded p-2">Surgery</span>
                <span>Recovery</span>
              </div>
              <div className="progress" style={{ height: '8px', backgroundColor: '#D5E6C3' }}>
                <div
                  className="progress-bar primary-bg primary-c"
                  role="progressbar"
                  style={{
                    width: '60%',
                  }}
                ></div>
              </div>
              <div className="d-flex justify-content-between px-2 mt-1 text-muted primary-c fs-6" style={{ fontSize: '12px' }}>
                <span>0%</span>
                <span>30%</span>
                <span>60%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Cards */}
            <div className="row g-4">
              <img src={Process} alt="" />
            </div>
          </div>
        </div>

        {/* Img */}
        <div className='container-fluid mb-5 p-0'>
          <div className="row">
            <img src={ban} className='w-100' alt="" />
          </div>
        </div>

        {/* Services */}
        <div className='container'>
          <div className="row">
            <div className='d-flex justify-content-between align-items-center border-bottom pb-4 mb-4'>
              <h2 className='fs-1'>Our Services</h2>
              <h6 className='border py-1 px-2 rounded text-secondary'>2</h6>
            </div>
            <div className="col-md-6 pb-5 my-5 d-flex justify-content-between align-items center flex-column">
              <div><h6>Introduction</h6></div>
              <div className='d-flex justify-content-center align-items-center'><img src={jhat} className='w-50 my-5' alt="" /></div>
              <div className='text-start'> <button
                className="btn text-white fw-bold rounded-pill px-4 py-2"
                style={{ backgroundColor: "#627251" }}
              >
                Book Free Consultation
              </button>
              </div>
            </div>
            <div className="col-md-6 pb-5 my-5">
              <h2>Hair loss affects more than just your scalp — it touches your identity.</h2>
              <h5 className='text-secondary'>Our range of services is designed to restore both your hair and your confidence.</h5>
              <div class="accordion" id="hairTransplantAccordion">
                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                      <span class="step-circle">1</span> Hair Transplant For Men
                    </button>
                  </h2>
                  <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#hairTransplantAccordion">
                    <div class="accordion-body">
                      Content for Hair Transplant For Men.
                    </div>
                  </div>
                </div>

                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                      <span class="step-circle">2</span> Hairline Reconstruction
                    </button>
                  </h2>
                  <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#hairTransplantAccordion">
                    <div class="accordion-body">
                      Content for Hairline Reconstruction.
                    </div>
                  </div>
                </div>

                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                      <span class="step-circle">3</span> Failed Hair Transplant Repair
                    </button>
                  </h2>
                  <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#hairTransplantAccordion">
                    <div class="accordion-body">
                      Content for Failed Hair Transplant Repair.
                    </div>
                  </div>
                </div>

                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                      <span class="step-circle">4</span> Body Hair Transplant
                    </button>
                  </h2>
                  <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#hairTransplantAccordion">
                    <div class="accordion-body">
                      Content for Body Hair Transplant.
                    </div>
                  </div>
                </div>

                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
                      <span class="step-circle">5</span> Beard Transplant
                    </button>
                  </h2>
                  <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#hairTransplantAccordion">
                    <div class="accordion-body">
                      Content for Beard Transplant.
                    </div>
                  </div>
                </div>

                <div class="accordion-item border-0 border-bottom">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6">
                      <span class="step-circle">6</span> PRP Treatment
                    </button>
                  </h2>
                  <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#hairTransplantAccordion">
                    <div class="accordion-body">
                      Content for PRP Treatment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className='container'>
          <div className='row'>
            <div className='d-flex justify-content-between align-items-center border-bottom pb-4 mb-5'>
              <h2 className='fs-1'>Regrowth Gallery</h2>
              <h6 className='border py-1 px-2 rounded text-secondary'>3</h6>
            </div>
            <div className="col-md-4">
              <h4 className='fs-2'>Every ‘before’ has an ‘after’ see how we bring hairlines (and smiles) back.</h4>
            </div>
            <div className="col-md-4">
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
            <div className="text-end my-5">
              <button
                className="btn text-white fw-bold rounded-pill px-4 py-2"
                style={{ backgroundColor: "#627251" }}
              >
                Explore More Results +
              </button>
            </div>
          </div>
        </div>

        {/* Book */}
        <div className="py-5" id='book' style={{ backgroundColor: '#627251' }}>
          <div className="container">
            <div className="row align-items-center">

              {/* Left side - Books Image */}
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src={book}
                  alt="Hair Transplant Guide 1"
                />
              </div>

              {/* Right side - Text + Form */}
              <div className="col-md-6 text-white">
                <h2 className="fw-bold mb-4">Thinking About a Hair <br /> Transplant? Read This First.</h2>
                <p className="mb-4" style={{ lineHeight: 1.6 }}>
                  A free doctor-reviewed guide that answers all your questions about cost, results, pain, recovery, and more.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">• See real patient transformations</li>
                  <li className="mb-2">• Know what to expect – step-by-step</li>
                  <li className="mb-2">• Get expert tips to avoid bad results</li>
                </ul>

                {/* Simple Form */}
                <form className="d-flex flex-column flex-md-row align-items-center gap-2">
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
                    className="btn btn-light rounded-pill px-4 py-2 fw-bold" style={{ color: "#627251", width: "500px" }}
                  >
                    Download Now
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-3 mb-5" id="test">
          <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap">
              <div className="mb-4">
                <h1>Testimonials</h1>
              </div>

              {/* Grade Filter */}
              <div className="d-flex flex-wrap justify-content-center gap-1 mb-4 bg-white p-2 rounded">
                {grades.map((grade) => (
                  <button
                    key={grade}
                    onClick={() => handleGradeClick(grade)}
                    className="btn rounded fw-bold px-3"
                    style={{
                      backgroundColor: selectedGrade === grade ? "#627251" : "#fff",
                      color: selectedGrade === grade ? "#fff" : "#627251",
                    }}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>

            <h4 className="my-4">
              What our community says about their journey <br /> and experiences with us so far.
            </h4>

            {/* Swiper Testimonials */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {filteredTestimonials.length > 0 ? (
                filteredTestimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="p-4 bg-white border rounded-4 d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className='d-flex justify-content-between mb-3 align-items-center'>
                          <div className="mb-2 fs-4 primary-c">
                            {Array.from({ length: 5 }, (_, i) => (
                              <span key={i}>{i < testimonial.rating ? "★" : "☆"}</span>
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
                <p className="text-center">No testimonials available for this grade.</p>
              )}
            </Swiper>

            {/* View All Button */}
            <div className="d-flex justify-content-center gap-4  align-items-center mt-5">
              <div className='line'></div>
              <div>
                <button
                  className="btn text-white fw-bold rounded-pill px-4 py-2"
                  style={{ backgroundColor: "#627251" }}
                >
                  View All Testimonials
                </button>
              </div>
              <div className='line'></div>
            </div>
          </div>
        </div>

        {/* FAQ's */}
        <div id='faq' className='p-5'>
          <div className="container">
            <div className="row">
              <h2 className='text-center fs-1'>Frequently Asked Questions</h2>
              <p className='text-center'>If you don’t find relevant answer please send us your queries on <br /> support@qhtclinic.com or Call +91-9897020696</p>
              <div class="accordion mb-5" id="faqAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      <span class="faq-number">01</span> Do you provide a natural front hairline?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      Yes, we specialize in designing a natural-looking hairline that suits your facial structure.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      <span class="faq-number">02</span> What's the cost of hair transplant in India?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      The cost varies depending on several factors like technique and grafts needed. Contact us for a free estimate.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      <span class="faq-number">03</span> Which are the different packages provided for hair transplant India?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      We offer standard, premium, and VIP packages customized to your needs.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      <span class="faq-number">04</span> Is there any impact of the type of hair surgery on the cost?
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      Yes, different techniques like FUE, FUT, or DHI have varying costs.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                      <span class="faq-number">05</span> Does hair transplant damage existing hair?
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      No, if performed correctly, the existing hair remains unaffected.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div id='action'>
          <div className="container">
            <h1 className='text-white fw-bold'>Time To Take Action</h1>
            <h4 className='text-white text-center mt-3 mb-4'>It’s time to invest in yourself and your confidence. Take the first step toward fuller, healthier hair with a treatment plan tailored just for you. Your journey to transformation begins today.</h4>
            <button className='btn rounded-pill bg-white px-4 py-3 fw-bold'>Get Started Now</button>
          </div>
        </div>
      </div >
    </>
  );
};

export default Home;
