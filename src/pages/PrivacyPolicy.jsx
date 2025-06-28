import React from "react";
import ExploreMore from "../components/ExploreMore";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Banner */}
      <div className="sec-pad sec-gradient pt-5">
        <div className="container">
          <div className="row text-center justify-content-center gap-3">
            <h1 className="display-4 fw-medium">
              We don’t <span className="primary-c"> just do transplants </span>
              <br />
              we stay with you after
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
          <h2 className="p-head mt-4">Information Collection</h2>
          <p className="mb-3 sec-c">
            We collect the following payment information from our patients:
          </p>
          <ul className="sec-c ps-4 mt-3">
            <li>
              Credit/debit card details (card number, expiration date, CVV)
            </li>
            <li>Bank account details (account number, IFSC code)</li>
            <li>Billing address</li>
            <li>Contact information (email, phone number)</li>
          </ul>
          <h2 className="p-head mt-4">Use of Information</h2>
          <p className="mb-3 sec-c">
            We use the payment information collected from our patients to:
          </p>
          <ul className="sec-c ps-4 mt-3">
            <li>Process payments for treatments and services</li>
            <li>Send payment confirmations and receipts</li>
            <li>Contact patients for payment-related queries</li>{" "}
          </ul>
          <h2 className="p-head mt-4">Security Measures</h2>
          <p className="mb-3 sec-c">
            We take the following security measures to protect our patients’
            payment information:
          </p>
          <ul className="sec-c ps-4 mt-3">
            <li>
              Encryption: We use industry-standard encryption to protect payment
              information.
            </li>
            <li>
              Secure Payment Gateway: We use a secure payment gateway to process
              payments.
            </li>
            <li>
              Access Control: Access to payment information is restricted to
              authorized personnel only.
            </li>
            <li>
              Regular Security Audits: We conduct regular security audits to
              ensure the security of our payment systems.
            </li>
          </ul>
          <h2 className="p-head mt-4">Data Sharing</h2>
          <p className="mb-3 sec-c">
            We do not share our patients’ payment information with third
            parties, except:
          </p>
          <ul className="sec-c ps-4 mt-3">
            <li>With our payment gateway provider to process payments</li>
            <li>With our bank to verify account details</li>
            <li>With regulatory authorities, if required by law </li>
          </ul>
          <h2 className="p-head mt-4">Data Retention</h2>
          <p className="mb-3 sec-c">
            We retain our patients’ payment information for a period of 6 months
            from the date of payment. After this period, we delete the payment
            information from our records.
          </p>
          <h2 className="p-head mt-4">Patient Rights</h2>
          <p className="mb-3 sec-c">Our patients have the right to:</p>
          <ul className="sec-c ps-4 mt-3">
            <li>Request access to their payment information</li>
            <li>Request correction of their payment information</li>
            <li>Request deletion of their payment information</li>
            <li>Object to the processing of their payment information </li>
          </ul>
          <h2 className="p-head mt-4">Changes to Privacy Policy</h2>
          <p className="mb-3 sec-c">
            We reserve the right to modify our privacy policy at any time. We
            will notify our patients of any changes to our privacy policy by
            posting an updated version on our website.
          </p>
          <h2 className="p-head mt-4">Contact Us</h2>
          <p className="sec-c mb-0">
            If you have any questions or concerns about our privacy policy,
            please contact us at info@qhtclinic.com
          </p>
          <p className="sec-c mb-3">
            By using our website and making payments, you consent to our privacy
            policy and agree to our terms and conditions.
          </p>
        </div>
      </div>

      <ExploreMore />
    </div>
  );
};

export default PrivacyPolicy;
