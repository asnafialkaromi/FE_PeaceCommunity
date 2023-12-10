import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputText from "../components/elements/InputText";
import ImageLogin from "../assets/img/ImageLogin.png";
import Button from "../components/elements/Button";
import {
  setPending,
  setFulfilled,
  setRejected,
  resetState,
} from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isLogin, message } = useSelector(
    (state) => state.auth
  );

  axios.defaults.withCredentials = true;
  const Auth = async (e) => {
    e.preventDefault();
    dispatch(setPending());

    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        email,
        password,
      });
      const userRole = response.data.role;

      if (userRole === "admin") {
        navigate("/dashboard");
      } else if (userRole === "user") {
        navigate("/");
      } else {
        console.warn("Unknown user role:", userRole);
      }

      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        showConfirmButton: false,
        timer: 1500,
      });

      setEmail("");
      setPassword("");
      dispatch(setFulfilled(response.data));
    } catch (error) {
      dispatch(setRejected("Login Failed"));
    }
  };
  return (
    <>
      <div className="flex flex-row ">
        <div className="h-screen w-1/2 hidden lg:block">
          <img src={ImageLogin} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="bg-gradient-to-b from-[#003F9A] to-[#2871CC] lg:w-1/2 h-screen w-full flex flex-col items-center justify-center gap-8 py-16">
          <h1 className="text-4xl font-bold text-white text-center">
            Layanan Online <br /> Website Pengaduan Masyarakat
          </h1>
          <form
            onSubmit={Auth}
            className="lg:w-3/4 w-[80%] h-fit py-8 px-14 bg-white flex flex-col items-center justify-center gap-6 rounded-[20px]"
          >
            <h2 className="text-3xl font-bold pb-3 text-black">Login</h2>
            <InputText
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-sm text-slate-600">
              Belum punya akun?{" "}
              <Link to="/register" className="text-blue-700 font-bold">
                Register
              </Link>
            </p>
            <Link to="/" className="text-gray-400 font-regular text-sm">
              Kembali
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
