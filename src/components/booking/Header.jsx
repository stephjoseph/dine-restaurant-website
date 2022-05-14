import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <header
      id="booking-header"
      className="flex w-full flex-col items-center pt-14 pb-[14.25rem] md:pb-[16.875rem] xl:items-start xl:pb-[7.875rem] xl:pt-[4.063rem]"
    >
      <Link
        className="mb-10 md:ml-10 md:mb-16 md:self-start xl:ml-[10.438rem] xl:mb-[10.438rem]"
        to="/"
      >
        <img
          className="h-8 w-[5.125rem] md:h-10 md:w-[6.438rem]"
          src={logo}
          alt=""
        />
      </Link>
      <div className="mb-6 flex w-[20.438rem] flex-col items-center gap-4 text-center md:mb-0 md:w-[43.063rem] xl:ml-[10.438rem] xl:w-[27.813rem] xl:items-start xl:gap-6 xl:text-left">
        <h1 className="text-[2rem] font-light leading-[2.5rem] tracking-[-0.4px] text-white md:text-[3rem] md:leading-[4rem] md:tracking-[-0.6px] xl:text-[4rem]">
          Reservations
        </h1>
        <p className="text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-white md:w-[35.813rem] md:text-lg md:leading-[1.875rem] md:tracking-[-0.22px] xl:w-full">
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>
      </div>
      <button className="flex h-16 w-[15.313rem] items-center justify-center border border-solid border-white bg-transparent text-[0.875rem] font-semibold uppercase leading-[1rem] tracking-[2px] text-white md:hidden">
        Reserve Place
      </button>
    </header>
  );
};

export default Header;
