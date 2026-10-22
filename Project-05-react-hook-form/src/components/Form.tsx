import { useForm, type SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import React from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="title">
          Welcome,
          <br />
          <span>sign up to continue</span>
        </div>
        <input
          className="input"
          id="name"
          placeholder="User Name"
          type="text"
          {...register("name", { required: "User Name is required" })}
        />
        {errors.name && <p>*{errors.name.message}</p>}
        <input
          className="input"
          id="email"
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && <p>*{errors.email.message}</p>}
        <input
          className="input"
          id="password"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && <p>*{errors.password.message}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-confirm"
        >
          {isSubmitting ? "Loading..." : "Submit →"}
        </button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    width: 400px;
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: beige;
    --main-color: black;
    padding: 20px;
    background: #89a482;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }
  .form p {
    color: #790d16;
    font-size: 18px;
    font-weight: 600;
  }
  .title {
    color: var(--font-color);
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 4px;
  }

  .title span {
    color: var(--font-color-sub);
    font-weight: 700;
    font-size: 18px;
  }

  .input {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .input:focus {
    border: 2px solid #f4d35e;
  }

  .login-with {
    display: flex;
    gap: 20px;
  }

  .button-log {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    color: var(--font-color);
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 24px;
    height: 24px;
    fill: var(--main-color);
  }

  .button-log:active,
  .button-confirm:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }

  .button-confirm {
    margin: 50px auto 0 auto;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }
`;

export default Form;
