import { Link } from "react-router-dom";

import mobileHeroImg from "../../images/homepage/hero-bg-mobile.jpg";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center bg-[#111111] pb-[9.5rem]">
      <div className="pointer-events-none mb-[0.75rem] h-full w-full">
        <img className="h-full w-full" src={mobileHeroImg} alt="" />
      </div>
      <div className="flex w-[20.438rem] flex-col items-center text-center">
        <a className="mb-8" href="">
          <img className="h-8 w-[5.15rem]" src={logo} alt="" />
        </a>
        <h1 className="mb-6 text-[2rem] font-light leading-[2.5rem] tracking-[-0.4px] text-white">
          Exquisite dining since 1989
        </h1>
        <p className="mb-8 text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-white">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Link
          className="flex h-16 w-[15.313rem] items-center justify-center border border-solid border-white bg-transparent text-[0.875rem] font-semibold uppercase leading-[1rem] tracking-[2px] text-white"
          to="/booking"
        >
          Book a table
        </Link>
      </div>
    </header>
  );
};

export default Header;
