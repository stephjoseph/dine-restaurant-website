import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <header
      id="booking-header"
      className="flex w-full flex-col items-center pt-14 pb-[14.25rem]"
    >
      <Link className="mb-10" to="/">
        <img className="h-8 w-[5.125rem]" src={logo} alt="" />
      </Link>
      <div className="mb-6 flex w-[20.438rem] flex-col items-center gap-4 text-center">
        <h1 className="text-[2rem] font-light leading-[2.5rem] tracking-[-0.4px] text-white">
          Reservations
        </h1>
        <p className="leading-[1.563rem text-[0.938rem] font-normal tracking-[-0.19px] text-white">
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>
      </div>
      <button className="flex h-16 w-[15.313rem] items-center justify-center border border-solid border-white bg-transparent text-[0.875rem] font-semibold uppercase leading-[1rem] tracking-[2px] text-white">
        Reserve Place
      </button>
    </header>
  );
};

export default Header;
