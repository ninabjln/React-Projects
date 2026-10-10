import { useState, useEffect } from "react";

const PasswordField = ({
  password,
  setPassword,
  confirm,
  setConfirm,
  isPasswordValid,
  setIsPasswordValid,
  isConfirmValid,
  setIsconfirmValid,
}) => {
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,24}$/;

  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassFocus, setConfirmPassFocus] = useState(false);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setIsPasswordValid(result);
    console.log(result);
    console.log(password);
    console.log(confirm);
    setIsconfirmValid(password === confirm);
  }, [password, confirm]);

  return (
    <>
      <div className="input-field">
        <input
          type="password"
          id="password-input"
          placeholder=" "
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
          aria-invalid={isPasswordValid ? "false" : "true"}
          aria-describedby="password-note"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          required
        />
        {/* <p
          id="password-note"
          className={
            passwordFocus && password && !isPasswordValid
              ? "instructions"
              : "off-screen"
          }
        >
          8 to 24 charectors. <br />
          Must include uppercase and lowercase letters, a number, a special
          character.
        </p> */}
        <label htmlFor="password-input">Password</label>
        {/* <span className={isPasswordValid ? "valid-icon" : "hide-icon"}>
          green check icon
        </span> */}
        {/* check the ternory logic */}
        {/* <span
            className={
              !isPasswordValid || password ? "invalid-icon" : "hide-icon"
            }
          >
            red check icon
          </span> */}
      </div>
      <div className="input-field">
        <input
          type="password"
          id="confirm-password-input"
          placeholder=" "
          autoComplete="off"
          onChange={(event) => setConfirm(event.target.value)}
          aria-invalid={isPasswordValid ? "false" : "true"}
          aria-describedby="confirm-note"
          onFocus={() => setConfirmPassFocus(true)}
          onBlur={() => setConfirmPassFocus(false)}
          required
        />
        <label htmlFor="confirm-password-input">Confirm password</label>
        {/* <span
          className={isConfirmValid && confirm ? "valid-icon" : "hide-icon"}
        >
          green check icon
        </span> */}
        {/* check the ternory logic */}
        {/* <span
          className={!isConfirmValid || confirm ? "invalid-icon" : "hide-icon"}
        >
          red check icon
        </span> */}
        {/* <p
          id="confirm-note"
          className={
            confirmPassFocus && !isConfirmValid ? "instructions" : "off-screen"
          }
        >
          Passwords do not match.
        </p> */}
      </div>
    </>
  );
};

export default PasswordField;
