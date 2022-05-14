import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-[#111111]">
      <div className="my-20 flex w-[20.438rem] flex-col items-center gap-10 md:my-16 md:w-[43.063rem] md:flex-row md:items-start md:gap-[8.125rem] xl:my-[4.875rem] xl:w-[69.375rem] xl:gap-[12.063rem]">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-left xl:flex-row xl:gap-[7.813rem]">
          <p className="text-[0.875rem] font-normal uppercase leading-[1.75rem] tracking-[2px] text-white">
            Marthwaite, Sedbergh <br /> Cumbria <br /> +00 44 123 4567
          </p>
          <p className="text-[0.875rem] font-normal uppercase leading-[1.75rem] tracking-[2px] text-white">
            OPEN TIMES <br /> MON - FRI: 09:00 AM - 10:00 PM <br /> SAT - SUN:
            09:00 AM - 11:30 PM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
