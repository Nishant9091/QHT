import React from "react";

const QuickForm = () => {
  return (
    <>
      {/* Form */}
      <div
        className="position-relative position-sm-static h-sm-fit-content"
        id="Form"
      >
        <div className="primary-bg py-5 rounded-md-4 my-md-4 container d-flex align-items-center justify-content-around">
          <form className="row g-2 align-items-center w-100 w-md-auto flex-grow-1">
            <h4 className="col-md-3 just-align-center text-white fw-light">
              Request a callback
            </h4>
            <div className="col-md-2 px-2">
              <input
                type="text"
                className="form-control input-underline"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-2 px-2 just-align-center">
              <input
                type="text"
                className="form-control input-underline"
                placeholder="Last Name"
              />
            </div>
            <div className="col-md-2 px-2 just-align-center">
              <input
                type="tel"
                className="form-control input-underline"
                placeholder="Mobile"
              />
            </div>
            <div className="col-md-2 px-2 just-align-center">
              <input
                type="email"
                className="form-control input-underline"
                placeholder="Email Address"
              />
            </div>
            <div className="col-md-1 just-align-center">
              <button
                type="submit"
                className="primary-btn bg-white px-4 fw-500"
              >
                <span className="primary-c">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuickForm;
