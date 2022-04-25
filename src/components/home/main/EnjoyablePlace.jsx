import mobileImg from "../../../images/homepage/enjoyable-place-mobile.jpg";
import tabletImg from "../../../images/homepage/enjoyable-place-tablet.jpg";
import patternDivide from "../../../images/patterns/pattern-divide.svg";

const Enjoyable = () => {
  return (
    <section className="mb-20 flex w-[20.438rem] flex-col items-center gap-12 md:mb-[7.5rem] md:w-[35.813rem] md:gap-14">
      <div className="shadow-[0px_75px_100px_-50px_rgba(56,66,85,0.5032)]">
        <img className="md:hidden" src={mobileImg} alt="" />
        <img className="hidden md:block xl:hidden" src={tabletImg} alt="" />
      </div>
      <div className="flex flex-col items-center gap-8 md:w-[28.563rem]">
        <div className="pointer-events-none">
          <img src={patternDivide} alt="" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[2rem] font-bold leading-[2.5rem] tracking-[-0.4px] text-[#242B37] md:text-[2.5rem] md:leading-[3.5rem] md:tracking-[-0.5px]">
            Enjoyable place <br className="hidden md:inline" /> for all the
            family
          </h2>
          <p className="text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-[#242B37] md:text-lg md:leading-[1.875rem] md:tracking-[-0.22px]">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Enjoyable;
