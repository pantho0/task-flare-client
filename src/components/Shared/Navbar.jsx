import { NavLink } from "react-router-dom";
import Container from "../Utils/Container";

const navLinks = (
  <>
    <li>
      <NavLink to={'/'}>Home</NavLink>
    </li>
    <li>
      <NavLink to={'/login'}>Home</NavLink>
    </li>
    <li>
      <NavLink to={'/signup'}>Home</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-black text-white">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 text-3xl font-extrabold">
              Task<span className="text-yellow-400">Flare</span>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {navLinks}
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-black text-white">
              {/* Sidebar content here */}
              {navLinks}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
