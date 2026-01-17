import React from 'react';
import OTPInput from "react-otp-input";
import Buttons from "../homepage-components/Buttons.jsx";
import QuickLink from "../QuickLink.jsx";
import toast from "react-hot-toast";

const EnterCode = ({onClickFunc}) => {
    const [otp, setOtp] = React.useState("");

    const handleInvalidCode = () => {
        if(otp.length !== 6) {
            toast.error("Invalid OTP Length");
        }
    }

  return (
      <section className="flex flex-1 flex-col text-white font-[Mulish] w-[80%] lg:w-[60%] m-auto justify-center">
          <div className="ml-2">
              <QuickLink toLink="HOME" onClickFunc={onClickFunc} />
          </div>
          <h1 className="text-4xl lg:m-2 ml-2 lg:text-6xl font-bold lg:w-1/2">Enter the Receiver Code</h1>

          <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              shouldAutoFocus
              renderInput={(props) => (
                  <input
                      {...props}
                      style={{
                          width: "2.6rem",
                          height: "2.6rem",
                          fontSize: "1.5rem",
                          marginLeft: "0.5rem",
                          marginTop: "0.5rem",
                      }}
                      className="
                        text-center text-white
                        bg-zinc-800/70
                        border-zinc-600
                        rounded-lg

                        outline-none
                        focus:outline-none
                        focus:ring-0

                        transition-transform
                        duration-150
                        focus:scale-110
                        focus:border-white
                      "
                  />
              )}
          />

          <div className="m-2 my-4">
              <Buttons ButtonType="Validate Code" onClickFunc={() => handleInvalidCode()} />
          </div>

      </section>
  );
};

export default EnterCode;
