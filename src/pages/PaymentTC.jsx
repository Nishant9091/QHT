import React from "react";
import ExploreMore from "../components/ExploreMore";

const PaymentTC = () => {
  return (
    <>
      {/* Banner */}
      <div className="sec-pad sec-gradient pt-5">
        <div className="container">
          <div className="row text-center justify-content-center gap-3">
            <h1 className="display-4 fw-medium">
              Payment{" "}
              <span className="primary-c">
                Terms and <br /> Conditions
              </span>{" "}
              of QHT Clinic
            </h1>
            <p className="sec-c w-md-75">
              Your hair transformation journey at the QHT clinic do not just end
              with the hair transplant surgery. We also extend continuous care
              and support with our one-year follow-up program mainly designed to
              monitor your progress and ensure optimal results.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container sec-pad">
        <div className="row w-100 px-3 px-md-0">
          <p className="sec-c">
            At QHT Clinic, we are committed to protecting the privacy and
            security of our patients’ personal and financial information. This
            privacy policy outlines how we handle and protect the payment
            information of our patients.
          </p>
          <h2 className="p-head mt-4">1.  Booking Amount</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>For Indian Nationals: ₹ 3,000 + 18% GST = ₹ 3,540</li>
            <li>For Foreign Nationals: $100 USD (approximately ₹ 7,000) </li>
          </ul>
          <h2 className="p-head mt-4">2. Payment Method</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>
              Payment can be made through cash, credit/debit card, or bank
              transfer.
            </li>
            <li>
              For foreign nationals, payment can be made through credit/debit
              card or bank transfer in USD.{" "}
            </li>
          </ul>
          <h2 className="p-head mt-4">3. Payment Timeline</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>
              Booking amount must be paid at the time of scheduling an
              appointment.
            </li>
            <li>Balance payment must be made on the day of the treatment. </li>
          </ul>
          <h2 className="p-head mt-4">4. Refund Policy</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>
              Refund of booking amount will be made as per the refund policy of
              QHT Clinic.
            </li>
            <li>
              Refund of balance payment will be made only in case of
              cancellation of treatment by QHT Clinic.{" "}
            </li>
          </ul>
          <h2 className="p-head mt-4">5. Cancellation Policy</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>
              If the patient cancels the treatment, the booking amount will not
              be refunded.
            </li>
            <li>
              If QHT Clinic cancels the treatment, the booking amount will be
              refunded.
            </li>
          </ul>
          <h2 className="p-head mt-4">6. GST</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>GST will be charged as per the prevailing rate.</li>
            <li>GST amount will be mentioned separately in the invoice. </li>
          </ul>
          <h2 className="p-head mt-4">7. Foreign Exchange</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>For foreign nationals, payment can be made in USD.</li>
            <li>The exchange rate will be as per the prevailing rate. </li>
          </ul>
          <h2 className="p-head mt-4">8. Payment Confirmation</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>
              Payment confirmation will be sent to the patient through email or
              SMS.
            </li>
            <li>
              Patient must produce the payment confirmation at the time of
              treatment.{" "}
            </li>
          </ul>
          <h2 className="p-head mt-4">Note</h2>
          <ul className="sec-c ps-4 mt-3">
            <li>Prices are subject to change without prior notice.</li>
            <li>
              QHT Clinic reserves the right to modify the payment terms and
              conditions without prior notice.
            </li>
            <li>
              Please check our website for the latest payment terms and
              conditions.
            </li>
            <li>refund policy updates.</li>
          </ul>
        </div>
      </div>

      <ExploreMore />
    </>
  );
};

export default PaymentTC;
