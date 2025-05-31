import React from "react";

const Faqs = () => {
  return (
    <div>
      {/* FAQ's */}
      <div id="faq" className="sec-pad">
        <div className="container">
          <div className="row">
            <h2 className="text-center p-head">Frequently Asked Questions</h2>
            <p className="text-center">
              If you don’t find relevant answer please send us your queries on{" "}
              <br /> support@qhtclinic.com or Call +91-9897020696
            </p>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <span className="faq-number primary-c">01</span> Do you
                    provide a natural front hairline?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, we specialize in designing a natural-looking hairline
                    that suits your facial structure.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <span className="faq-number">02</span> What's the cost of
                    hair transplant in India?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    The cost varies depending on several factors like technique
                    and grafts needed. Contact us for a free estimate.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <span className="faq-number">03</span> Which are the
                    different packages provided for hair transplant India?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We offer standard, premium, and VIP packages customized to
                    your needs.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    <span className="faq-number">04</span> Is there any impact
                    of the type of hair surgery on the cost?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, different techniques like FUE, FUT, or DHI have varying
                    costs.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    <span className="faq-number">05</span> Does hair transplant
                    damage existing hair?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    No, if performed correctly, the existing hair remains
                    unaffected.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
