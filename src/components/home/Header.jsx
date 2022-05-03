import { Link } from "react-router-dom";

import mobileHeroImg from "../../images/homepage/hero-bg-mobile.jpg";
import tabletHeroImg from "../../images/homepage/hero-bg-tablet.jpg";
import desktopHeroImg from "../../images/homepage/hero-bg-desktop.jpg";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center bg-[#111111] pb-[9.5rem] md:pb-[13.5rem] xl:relative xl:pb-[12.375rem]">
      <div className="pointer-events-none mb-[0.75rem] h-full w-full md:mb-0 xl:absolute xl:right-0 xl:h-[51.25rem] xl:w-[55.938rem]">
        <img className="h-full w-full md:hidden" src={mobileHeroImg} alt="" />
        <img
          className="hidden h-full w-full md:block xl:hidden"
          src={tabletHeroImg}
          alt=""
        />
        <img
          className="hidden h-full w-full xl:block"
          src={desktopHeroImg}
          alt=""
        />
      </div>
      <div className="flex w-[20.438rem] flex-col items-center text-center md:w-[43.063rem] xl:z-10 xl:mt-[4.063rem] xl:ml-[10.438rem] xl:w-[32.688rem] xl:items-start xl:self-start xl:text-left">
        <a className="mb-8 xl:mb-[9.563rem]" href="">
          <img
            className="h-8 w-[5.15rem] md:h-10 md:w-[6.438rem]"
            src={logo}
            alt=""
          />
        </a>
        <h1 className="mb-6 text-[2rem] font-light leading-[2.5rem] tracking-[-0.4px] text-white md:text-[3rem] md:leading-[4rem] md:tracking-[-0.6px] xl:text-[4rem] xl:leading-[4.5rem] xl:tracking-[-0.8px]">
          Exquisite dining <br className="hidden md:inline" /> since 1989
        </h1>
        <p className="mb-8 text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-white md:mb-6 md:w-[35.813rem] md:text-lg md:leading-[1.875rem] md:tracking-[-0.22px] xl:mb-[2.625rem] xl:w-[27.813rem]">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Link
          className="flex h-16 w-[15.313rem] items-center justify-center border border-solid border-white bg-transparent text-[0.875rem] font-semibold uppercase leading-[1rem] tracking-[2px] text-white hover:bg-white hover:text-[#111111] active:bg-white active:text-[#111111]"
          to="/booking"
        >
          Book a table
        </Link>
      </div>
    </header>
  );
};

export default Header;
