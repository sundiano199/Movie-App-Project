import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { registerSchema } from "../utils/formValidators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <main className="py-[78px] px-[24px]">
      <Link to="/">
        <img src={Logo} alt="Logo" className="block mx-auto" />{" "}
      </Link>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-full max-w-[400px] rounded-[10px] md:rounded-[20px] p-[24px] md:p-[32px] mt-[58px] md:mt-[82px] mx-auto bg-[#161d2f]"
      >
        <h1 className="text-[32px] mb-[40px]">Sign Up</h1>
        <div className="mb-6 relative">
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full border-b  p-3 focus:outline-none caret-[#fc4747] ${
              errors.email ? "border-b-[#fc4747]" : "border-b-[#5A698F]"
            }`}
            {...register("email")}
          />
          <small className="text-[#fc4747] absolute top-[14px] right-[24px] ">
            {errors.email?.message}
          </small>
        </div>
        <div className="mb-6 relative">
          <input
            type="password"
            placeholder="Password"
            className={`w-full border-b  p-3 focus:outline-none caret-[#fc4747] ${
              errors.password ? "border-b-[#fc4747]" : "border-b-[#5A698F]"
            }`}
            {...register("password")}
          />
          <small className="text-[#fc4747] absolute top-[14px] right-[24px]">
            {errors.password?.message}
          </small>
        </div>
        <div className="mb-6 relative">
          <input
            type="password"
            placeholder="Repeat Password"
            className={`w-full border-b  p-3 focus:outline-none caret-[#fc4747] ${
              errors.repeatPassword
                ? "border-b-[#fc4747]"
                : "border-b-[#5A698F]"
            }`}
            {...register("repeatPassword")}
          />
          <small className="text-[#fc4747] absolute top-[14px] right-[24px]">
            {errors.repeatPassword?.message}
          </small>
        </div>
        <button
          type="submit"
          className="bg-[#fc4747] text-white w-full rounded-md text-[15px] h-[48px] hover:bg-white hover:text-[#161d2f] cursor-pointer"
        >
          Create an account
        </button>
        <p className="text-center text-[15px] mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#fc4747]">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
