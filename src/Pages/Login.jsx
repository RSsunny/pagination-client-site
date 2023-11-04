import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle, BiLogoGithub } from "react-icons/bi";

const Login = () => {
  const { loginUser, mediaLogin, user } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    // const user = { email, password };
    // console.log(user);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const midealog = (midea) => {
    midea()
      .then((result) => {
        console.log(result.user);
        navigate(user && "/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className=" w-[500px] mx-auto border px-5 py-20 rounded-3xl"
      >
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <div className="flex justify-between items-center">
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <p>
              new user? place{" "}
              <Link to={"/register"} className="font-bold text-red-500">
                {" "}
                registert
              </Link>
            </p>
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
        <div className="mt-10 text-4xl flex items-center justify-center gap-5">
          <FcGoogle
            onClick={() => midealog(mediaLogin)}
            className="cursor-pointer"
          ></FcGoogle>
          <BiLogoFacebookCircle className="text-blue-600 cursor-pointer"></BiLogoFacebookCircle>
          <BiLogoGithub className="cursor-pointer"></BiLogoGithub>
        </div>
      </form>
    </div>
  );
};

export default Login;
