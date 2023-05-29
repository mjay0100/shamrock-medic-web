import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-[#FFF2E1] capitalize flex justify-between px-12 py-4 items-center">
      <h1 className="text-xl font-semibold">Skilline</h1>
      <div className="md:flex gap-10 items-center">
        <ul className="flex gap-8">
          <Link to="/">home</Link>
          <Link to="/team">team</Link>
          <Link to="/about">about us</Link>
        </ul>
        <div className=" flex gap-8">
          <Link to="login">
            <button className="px-6 py-2 shadow-sm bg-white rounded-xl shadow-slate-400">
              login
            </button>
          </Link>
          <Link to="signup">
            <button className="px-6 py-2 shadow-sm rounded-xl shadow-slate-400 bg-orange-500 text-white">
              sign up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
