import mobileImg from "../../../images/homepage/locally-sourced-mobile.jpg";
import tabletImg from "../../../images/homepage/locally-sourced-tablet.jpg";
import desktopImg from "../../../images/homepage/locally-sourced-desktop.jpg";
import patternDivide from "../../../images/patterns/pattern-divide.svg";

const LocallySourced = () => {
  return (
    <section
      id="locally-sourced"
      className="mb-20 flex w-[20.438rem] flex-col items-center gap-12 md:relative md:mb-[7.5rem] md:w-[35.813rem] md:gap-14 xl:z-10 xl:mb-0 xl:w-[69.375rem] xl:flex-row-reverse xl:gap-[7.813rem]"
    >
      <div className="shadow-[0px_75px_100px_-50px_rgba(56,66,85,0.5032)] xl:w-[33.75rem]">
        <img className="md:hidden" src={mobileImg} alt="" />
        <img className="hidden md:block xl:hidden" src={tabletImg} alt="" />
        <img className="hidden xl:block" src={desktopImg} alt="" />
      </div>
      <div className="flex flex-col items-center gap-8 md:w-[28.563rem] xl:items-start xl:gap-12">
        <div className="pointer-events-none">
          <img src={patternDivide} alt="" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:text-left">
          <h2 className="text-[2rem] font-bold leading-[2.5rem] tracking-[-0.4px] text-[#242B37] md:text-[2.5rem] md:leading-[3.5rem] md:tracking-[-0.5px]">
            The most locally sourced food
          </h2>
          <p className="text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-[#242B37] md:text-lg md:leading-[1.875rem] md:tracking-[-0.22px]">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocallySourced;
