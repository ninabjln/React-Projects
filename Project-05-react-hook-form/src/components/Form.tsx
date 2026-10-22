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
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log(data);
  };
  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="title">
          Welcome,
          <br />
          <span>sign up to continue</span>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="flex flex-col gap-3  w-full">
            <label className="font-bold text-[#233851]" htmlFor="name">
              Name:
            </label>
            <input
              className="input"
              id="name"
              placeholder="User Name"
              type="text"
              {...register("name", { required: "User Name is required" })}
            />
            {errors.name && <p>*{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-2  w-full">
            <label className=" font-bold text-[#233851]" htmlFor="email">
              Email:
            </label>
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
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className=" font-bold text-[#233851]">
              Password:
            </label>
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
          </div>
        </div>

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
    width: min(400px, calc(100vw - 80px));
    box-sizing: border-box;
    --input-focus: #2d8cf0;
    --font-color: #1e3e62;
    --font-color-sub: #5d5d5d;
    --bg-color: beige;
    --main-color: black;
    padding: 20px;
    background: #aec4d4;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }
  .form p {
    margin-top: 4px;
    color: #790d16;
    font-size: 14px;
    font-weight: 600;
  }
  .title {
  
    padding: 5px 10px;  
    display: flex;
    flex-direction: column;
    align-items: start;
    jusyify-content: center;
    width: 100%;
    color: var(--font-color);
    font-weight: 900;
    font-size: 24px;
    margin-bottom: 4px;
    margin-top: 4px;
  }

  .title span {
    color: var(--font-color-sub);
    font-weight: 700;
    font-size: 18px;
  }

  .input {
    width: 100%
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
    border: 2px solid #83b4ff;
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
