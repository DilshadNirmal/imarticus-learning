import { useNavigate } from "react-router-dom";
import UseLocalStorage from "../hooks/UseLocalStorage";

const LogIn = () => {
  const [form, setForm] = UseLocalStorage("sign-up.details", []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/");
  };

  return (
    <section className="h-screen grid place-content-center bg-black bg-opacity-10">
      <div className="w-4/5 mx-auto rounded-sm shadow-md flex">
        <div className="w-full text-center py-4 px-2 bg-white">
          <h1 className="text-5xl font-bold pt-4 mb-6">Sign In</h1>
          <form
            action=""
            className="w-full flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              id="email"
              className="w-4/5  py-2 mb-3 rounded-sm bg-opacity-10 bg-black outline-none"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              className="w-4/5  py-2 mb-3 rounded-sm bg-opacity-10 bg-black outline-none"
              onChange={handleChange}
            />
            <input
              type="submit"
              className="border-[1px] rounded-3xl px-3 py-2 font-medium mt-3"
              value="Sign In"
            />
          </form>
        </div>
        <div className="px-6 py-4 bg-cyan-500 text-white">
          <h2 className="text-4xl font-bold pt-4 mb-3">Hello friend !</h2>
          <p className="text-pretty mb-4">
            enter your personal details and start journey with us
          </p>
          <button className="border-[1px] rounded-3xl px-3 py-2 font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
