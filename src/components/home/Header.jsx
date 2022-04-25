import { Link } from "react-router-dom";

import mobileHeroImg from "../../images/homepage/hero-bg-mobile.jpg";
import tabletHeroImg from "../../images/homepage/hero-bg-tablet.jpg";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center bg-[#111111] pb-[9.5rem] md:pb-[13.5rem]">
      <div className="pointer-events-none mb-[0.75rem] h-full w-full md:mb-0">
        <img className="h-full w-full md:hidden" src={mobileHeroImg} alt="" />
        <img
          className="hidden h-full w-full md:block xl:hidden"
          src={tabletHeroImg}
          alt=""
        />
      </div>
      <div className="flex w-[20.438rem] flex-col items-center text-center md:w-[43.063rem]">
        <a className="mb-8" href="">
          <img
            className="h-8 w-[5.15rem] md:h-10 md:w-[6.438rem]"
            src={logo}
            alt=""
          />
        </a>
        <h1 className="mb-6 text-[2rem] font-light leading-[2.5rem] tracking-[-0.4px] text-white md:text-[3rem] md:leading-[4rem] md:tracking-[-0.6px]">
          Exquisite dining <br className="hidden md:inline" /> since 1989
        </h1>
        <p className="mb-8 text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-white md:mb-6 md:w-[35.813rem] md:text-lg md:leading-[1.875rem] md:tracking-[-0.22px]">
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
