import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../TextField";
import userError from "../../utils/userError";
import CustomizeButton from "../CustomizeButton";
import passchecker from "../../utils/passchecker";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function SignInUpTemplate({
  AuthType,
  Introduction,
  Description,
}) {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const [errorDisplayed, setErrorDisplayed] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUserCredentialState = (input) => {
    setUserCredential((prevField) => ({
      ...prevField,
      [input.name]: input.value,
    }));
  };

  const handleSignInAccount = async (e) => {
    e.preventDefault();

    if (userCredential.password === "" || userCredential.email === "") {
      setErrorDisplayed(userError("missing-all-credentials"));
      return;
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        userCredential.email,
        userCredential.password
      );
      setErrorDisplayed("");
      console.log("Dubug");
      navigate("/home");
    } catch (error) {
      setErrorDisplayed(userError(error.message));
    }
  };

  const handleSignUpAccount = async () => {
    const checkValidPassword = passchecker(
      userCredential.password,
      userCredential.email
    );

    if (checkValidPassword !== "empty") {
      setErrorDisplayed(userError(checkValidPassword));
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        userCredential.email,
        userCredential.password
      );
      setErrorDisplayed("");
      navigate("/");
    } catch (error) {
      setErrorDisplayed(userError(error.message));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-8">
        <div
          className={`flex flex-col gap-10 items-center ${
            AuthType === "Sign in" ? "max-w-lg" : "max-w-md"
          }`}
        >
          {/* Introduction */}
          <div className="flex flex-col gap-6">
            <div className="font-bold text-6xl">{Introduction}</div>
            <div className="text-xl">{Description}</div>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col w-full gap-5">
                {[
                  {
                    name: "email",
                    placeholder: "Email",
                    value: userCredential.email,
                    type: "text",
                  },
                  {
                    name: "password",
                    placeholder: "Password",
                    value: userCredential.password,
                    type: showPassword ? "text" : "password",
                  },
                ].map((field) => (
                  <div className="flex flex-col gap-2">
                    <div className="text-md">{field.placeholder}</div>
                    <TextField
                      name={field.name}
                      placeholder={field.placeholder}
                      key={field.placeholder}
                      value={field.value}
                      type={field.type}
                      showPasswordIcon={field.name === "password"}
                      onTogglePassword={() => setShowPassword(!showPassword)}
                      onChange={(e) =>
                        handleUserCredentialState({
                          name: field.name,
                          value: e.target.value,
                        })
                      }
                    />
                  </div>
                ))}
              </div>

              {errorDisplayed && (
                <div className="w-full text-red-500 -mt-5">
                  {errorDisplayed}
                </div>
              )}

              {AuthType === "Sign in" && (
                <CustomizeButton
                  className="flex w-full justify-end -mt-6 text-md text-[#827878]"
                  text="Forgot Password?"
                  onClick={() => navigate("/recover")}
                />
              )}
            </div>

            {/* Buttons */}

            {AuthType === "Sign up" && (
              <CustomizeButton
                text="Cancel"
                onClick={() => navigate("/")}
                variant="secondary"
              />
            )}
            <CustomizeButton
              text={AuthType}
              onClick={
                AuthType === "Sign in"
                  ? handleSignInAccount
                  : handleSignUpAccount
              }
              variant="primary"
            />

            {AuthType === "Sign in" && (
              <div className="flex w-full justify-center gap-1 text-md">
                <div>Don't you have an account?</div>
                <CustomizeButton
                  className="text-[#827878]"
                  text="Sign up"
                  onClick={() => navigate("/sign-up")}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
