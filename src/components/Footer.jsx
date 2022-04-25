import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-[#111111]">
      <div className="my-20 flex w-[20.438rem] flex-col items-center gap-10">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <div className="flex flex-col items-center gap-8 text-center">
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
