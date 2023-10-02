import React from "react";
import "./Contactus.scss";
import Title from "../AboutUs/Title";

const Contactus = () => {
  return (
    <>
      <Title title={"CONTACT US"} />

      <div className="address_container">
        <div className="form_container">
          <div className="contactus_container">
            <form>
              <div className="address_text">
                <h5>OUR ADDRESS</h5>
                <p>
                  Plot No. 6, 14/3, Mathura Road
                  <br /> Faridabad, Haryana-121003 (INDIA)
                </p>
                <p>
                  <b>(Office) </b>: +91-129-3500624
                </p>
                <p>
                  <b>(Mobile)</b> : +91-8448609440
                </p>
                <p>
                  <b>(E-mail)</b> : sg@ozonebiotech.com
                </p>
              </div>
              <div className="inside_form">
                <h6>Submit Your Query</h6>
                <p>* fields are mandatory</p>
              </div>
              <div className="form_row">
                <input
                  type="text"
                  className="form_half"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form_half"
                  placeholder="Last Name"
                />
              </div>
              <div className="form_row">
                <input
                  type="email"
                  className="form_full"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="form_row">
                <input
                  type="tel"
                  className="form_full"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="form_row">
                <textarea
                  className="form_full"
                  rows="5"
                  placeholder="Comments ( Max 500 Characters*)"
                  maxLength={500}
                ></textarea>
              </div>
              <div className="form_row btn_submit">
                <button type="submit" className="submit_button">
                  Submit
                </button>
              </div>

              <div className="address_text ">
                <h5>Need Help!</h5>
                <h6> For Customer Support & Queries:</h6>
                <p>
                  Call us at Customer Care no. : 1800-419-9648
                  <br/>
                  Email us at :
                  sg@ozonebiotech.com <br />
                  (Operational Timings: 24 X 7)
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
