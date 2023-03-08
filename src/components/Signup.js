import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import OTPInput, { ResendOTP } from "otp-input-react";
import AnimatedLetters from "./AnimatedLetters";
import "../Styles/signup.scss";
import image from "../assets/image-space-capsule-portrait.jpg";

const Signup = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const [value, setValue] = useState();
  const [OTP, setOTP] = useState("");

  useEffect(() => {
    return setletterClass(() => {
      setletterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="main-contact page">
      <div className="container contact-page">
        <div className="text-zone">
          <div className="signuptitle">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "i", "g", "n", "u", "p", " ", "n ", "o", "w"]}
              idx={15}
            />
          </div>

          <div>
            <form>
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li>
                  <PhoneInput
                    className="countrycode"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                  />
                </li>
                <li>
                  <input
                    className="address"
                    placeholder="Address"
                    type="text"
                    name="password"
                    required
                  />
                </li>
                <li>
                  <OTPInput
                    value={OTP}
                    onChange={setOTP}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    secure
                  />
                  <ResendOTP
                    onResendClick={() => console.log("Resend clicked")}
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

            <div className="image-container">
              <img className="image" src={image} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
