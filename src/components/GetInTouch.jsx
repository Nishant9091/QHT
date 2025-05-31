import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div>
      {/* Get in Touch */}
      <div className="sec-bg sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="p-head">
                Get in touch with us <br /> or you can visit us.
              </h2>
              <h5 className="sec-c fw-light w-75 my-3">
                Reach out anytime or visit us directly for personalized
                assistance, expert guidance, and seamless support experience.
              </h5>
              <ul className="list-unstyled fw-500 mt-2 lh-lg">
                <li>+91-9897020696</li>
                <li>regrowclinic@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4"
                      type="tel"
                      placeholder="Mobile"
                    />
                  </div>
                  <div>
                    <select className="form-control bg-transparent p-3 border-none border-bottom border-grey rounded-0 mb-4">
                      <option value="Interested In ?" selected disabled>
                        Interested In ?
                      </option>
                      <option value="PRP">PRP</option>
                      <option value="PRP">PRP</option>
                      <option value="PRP">PRP</option>
                    </select>
                  </div>
                  <button className="primary-btn w-25 ms-3 ms-md-0">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 p-3">
              <div className="bg-white rounded-4 p-4 h-100">
                <FaMapMarkerAlt className="fs-3 primary-c" />
                <h4 className="my-3">Haridwar</h4>
                <p className="sec-c">
                  QHT Clinic,521, Model Colony, Ranipur More, Haridwar,
                  Uttarakhand
                </p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="bg-white rounded-4 p-4 h-100">
                <FaMapMarkerAlt className="fs-3 primary-c" />
                <h4 className="my-3">Delhi</h4>
                <p className="sec-c">
                  D -15, Outer Ring Rd, above Federal Bank, Prashant Vihar,
                  Sector 14, Rohini, New Delhi, Delhi, 110085
                </p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="bg-white rounded-4 p-4 h-100">
                <FaMapMarkerAlt className="fs-3 primary-c" />
                <h4 className="my-3">Hyderabad</h4>
                <p className="sec-c">
                  QHT Clinic Opposite Hotel Park HyattRoad No. 2 Banjara Hills,
                  Hyderabad, Telangana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
