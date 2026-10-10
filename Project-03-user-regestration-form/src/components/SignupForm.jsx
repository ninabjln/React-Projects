import { useState } from "react";
import UserNameField from "./UserNameField";
import PasswordField from "./PasswordField";
import kitImage from "../assets/kit-image.png";
import "./SignupForm.css";
const SignupForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [isUserValid, setIsUserValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmValid, setIsconfirmValid] = useState(false);

  const [isSuccsessful, SetIsSuccessfull] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    SetIsSuccessfull(true);
  }

  return (
    <>
      {isSuccsessful ? (
        <section>
          <h1>Account created successfully!</h1>
          <p>
            You can now
            <span>
              {/* add link later */}
              <a href="#">Login.</a>
            </span>
          </p>
        </section>
      ) : (
        <section>
          <div className="image-box">
            <img className="kit-image" src={kitImage} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <h1>Get Started</h1>
            <UserNameField
              user={user}
              setUser={setUser}
              isUserValid={isUserValid}
              setIsUserValid={setIsUserValid}
            />
            <PasswordField
              password={password}
              setPassword={setPassword}
              confirm={confirm}
              isPasswordValid={isPasswordValid}
              setIsPasswordValid={setIsPasswordValid}
              setConfirm={setConfirm}
              isconfirmValid={isConfirmValid}
              setIsconfirmValid={setIsconfirmValid}
            />
            <button
              disabled={
                !isUserValid || !isPasswordValid || !isConfirmValid
                  ? true
                  : false
              }
            >
              Signup
            </button>
            <p className="link-text">
            Already have an account?
            {/* put a link later here */}
            <span className="login-link">
              <a href="#">Login</a>
            </span>
          </p>
          </form>
        </section>
      )}
    </>
  );
};

export default SignupForm;
