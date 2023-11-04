import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Registert = () => {
  const { createUser } = useAuth();
  const handleregister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const phone = from.phone.value;
    const email = from.email.value;
    const password = from.password.value;
    const user = { email, password, name, phone };
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(user);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleregister}
        className=" w-[600px] mx-auto border px-10 py-20 rounded-xl"
      >
        <h1 className="text-3xl text-center font-bold">Register</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
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
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <div className="flex justify-between items-center mt-2">
            <p>
              Alrady hane an account? place{" "}
              <Link to={"/login"} className="font-bold text-green-500">
                {" "}
                login
              </Link>
            </p>
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Registert;
