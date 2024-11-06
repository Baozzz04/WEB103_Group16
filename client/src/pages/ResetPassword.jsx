import { TextField } from "../components/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomizeButton from "../components/CustomizeButton";
// import { sendResetEmail } from "../utils/api";

export default function ResetPassword() {
  const [userEmail, setUserEmail] = useState("");
  // const [messageDisplayed, setMessageDisplayed] = useState({
  //   error: "",
  //   success: "",
  // });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // setMessageDisplayed({ error: "", success: "" });
    // try {
    //   setMessageDisplayed({ error: "", success: "Email Sent Successfully!" });
    // } catch (error) {
    //   setMessageDisplayed({ error: userError(error.message), success: "" });
    // }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="flex flex-col gap-10 items-center max-w-xl">
          {/* Introduction */}
          <div className="flex flex-col gap-6">
            <div className="font-bold text-6xl">Reset Password</div>
            <div className="text-xl">
              Please provide your email address to reset your password
            </div>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col gap-2">
                  <div className="text-md">Email</div>
                  <TextField
                    placeholder="Email"
                    key="Email"
                    value={userEmail}
                    type="text"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* {messageDisplayed.error || messageDisplayed.success ? (
                <div
                  className={`w-full -mt-5 ${
                    messageDisplayed.error ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {messageDisplayed.error || messageDisplayed.success}
                </div>
              ) : null} */}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <CustomizeButton
                text="Cancel"
                onClick={() => navigate("/")}
                variant="secondary"
              />
              <CustomizeButton
                text="Confirm"
                onClick={handleSubmit}
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
