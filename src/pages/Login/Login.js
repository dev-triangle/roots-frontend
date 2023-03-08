import React, { useState } from "react";
import "./Login.css";
import MainLayout from "../../components/MainLayout/MainLayout";
import { baseUrl } from "../../utils/urls";
import axiosInstance from "../../auth/authHandler";
import { useNavigate } from "react-router-dom";
import CustomTitle from "../../utils/CustomTitle";
import Lottie from "react-lottie";
import login_anime from "../../assets/animations/login_anime.json";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    axiosInstance
      .post(`${baseUrl}/api/token/`, {
        email: email,
        password: password,
      })
      .then(
        (res) => {
          // console.log(res)
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
          if (res.status === 200) navigate("/");
        },
        (error) => {}
      );
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login_anime,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <MainLayout>
      <CustomTitle title="Login" />
      <div className="su__main">
        <div className="su__blank_space">
        <Lottie options={defaultOptions} height={400} width={400} />

        </div>
        <div className="su__form_container">
          <p className="su__welcome_text">Welcome back to Roots</p>
          <p className="su__and_continue">Login</p>
          <form className="su__main_form" onSubmit={handleLogin}>
            <input
              value={email}
              className="su__input_taker"
              placeholder="email"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              value={password}
              className="su__input_taker"
              placeholder="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" className="su__submit_button">
              Login
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
