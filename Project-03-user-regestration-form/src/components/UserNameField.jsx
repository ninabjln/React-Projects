import { useState, useRef, useEffect } from "react";

const UserNameField = ({ user, setUser, isUserValid, setIsUserValid }) => {
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const userRef = useRef();
  const [userFocus, setUserFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    //console.log(result);
    //console.log(user);
    setIsUserValid(result);
  }, [user]);

  return (
    <>
      <label htmlFor="user-input">
        Username:
        <span className={isUserValid ? "valid-icon" : "hide-icon"}>
          green check icon
        </span>
        {/* check the ternory logic */}
        <span className={!isUserValid || user ? "invalid-icon" : "hide-icon"}>
          red check icon
        </span>
      </label>
      <input
        type="text"
        id="user-input"
        ref={userRef}
        autoComplete="off"
        onChange={(event) => setUser(event.target.value)}
        aria-invalid={isUserValid ? "false" : "true"}
        aria-describedby="user-note"
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
      />
      <p
        id="user-note"
        className={
          userFocus && user && !isUserValid ? "instructions" : "off-screen"
        }
      >
        4 to 24 charectors. <br />
        Must begin with a letter. <br />
        Letters, numbers, underscores, hyphenes allowed.
      </p>
    </>
  );
};

export default UserNameField;
