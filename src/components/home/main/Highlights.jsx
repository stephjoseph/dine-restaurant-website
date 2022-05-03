import patternDivide from "../../../images/patterns/pattern-divide.svg";
import mobileSalmonImg from "../../../images/homepage/salmon-mobile.jpg";
import tabletSalmonImg from "../../../images/homepage/salmon-tablet.jpg";
import mobileBeefImg from "../../../images/homepage/beef-mobile.jpg";
import tabletBeefImg from "../../../images/homepage/beef-tablet.jpg";
import mobileChocolateImg from "../../../images/homepage/chocolate-mobile.jpg";
import tabletChocolateImg from "../../../images/homepage/chocolate-tablet.jpg";

const Highlights = () => {
  return (
    <section className="mb-20 flex w-full flex-col items-center gap-16 bg-black py-[4.5rem] md:py-[6rem] xl:-mt-20 xl:flex-row xl:justify-center xl:gap-[7.813rem] xl:pb-[7.5rem] xl:pt-[12.5rem]">
      <div className="flex w-[20.438rem] flex-col items-center gap-8 text-center md:w-[27.813rem] xl:items-start xl:gap-12 xl:self-start xl:text-left">
        <div className="pointer-events-none">
          <img src={patternDivide} alt="" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[2rem] font-bold leading-[2.5rem] tracking-[-0.4px]  text-white md:text-[2.5rem] md:leading-[3.5rem] md:tracking-[-0.5px]">
            A few highlights from our menu
          </h2>
          <p className="text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-white md:text-lg md:leading-[1.875rem] md:tracking-[-0.22px]">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
      </div>
      <div className="flex w-[20.438rem] flex-col items-center gap-6 md:w-[35.813rem] xl:mt-[3.438rem] xl:self-end">
        <div className="flex w-full flex-col items-center gap-8 border-b border-solid border-white/[0.1494] pb-6 md:flex-row md:gap-[1.875rem]">
          <div className="md:relative md:h-[6rem] md:w-[10rem]">
            <img className="md:hidden" src={mobileSalmonImg} alt="" />
            <img
              className="hidden md:block md:h-[6rem] md:w-[8rem]"
              src={tabletSalmonImg}
              alt=""
            />
            <div className="hidden md:absolute md:left-[8rem] md:top-[1.125rem] md:block md:h-px md:w-8 md:bg-[#9E7F66]"></div>
          </div>
          <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
            <h3 className="text-lg font-bold tracking-[-0.22px] text-white">
              Seared Salmon Fillet
            </h3>
            <p className="text-[0.938rem] font-normal leading-[1.75rem] tracking-[-0.19px] text-white">
              Our locally sourced salmon served <br className="md:hidden" />
              with a <br className="hidden md:inline" /> refreshing buckwheat
              summer salad.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-8 border-b border-solid border-white/[0.1494] pb-6 md:flex-row md:gap-[1.875rem]">
          <div className="md:relative md:h-[6rem] md:w-[10rem]">
            <img className="md:hidden" src={mobileBeefImg} alt="" />
            <img
              className="hidden md:block md:h-[6rem] md:w-[8rem]"
              src={tabletBeefImg}
              alt=""
            />
            <div className="hidden md:absolute md:left-[8rem] md:top-[1.125rem] md:block md:h-px md:w-8 md:bg-[#9E7F66]"></div>
          </div>
          <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
            <h3 className="text-lg font-bold tracking-[-0.22px] text-white">
              Rosemary Filet Mignon
            </h3>
            <p className="text-[0.938rem] font-normal leading-[1.75rem] tracking-[-0.19px] text-white">
              Our prime beef served to your taste <br className="md:hidden" />
              with a <br className="hidden md:inline" /> delicious choice of
              seasonal <br className="md:hidden" /> sides.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-[1.875rem]">
          <div className="md:relative md:h-[6rem] md:w-[10rem]">
            <img className="md:hidden" src={mobileChocolateImg} alt="" />
            <img
              className="hidden md:block md:h-[6rem] md:w-[8rem]"
              src={tabletChocolateImg}
              alt=""
            />
            <div className="hidden md:absolute md:left-[8rem] md:top-[1.125rem] md:block md:h-px md:w-8 md:bg-[#9E7F66]"></div>
          </div>
          <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
            <h3 className="text-lg font-bold tracking-[-0.22px] text-white">
              Summer Fruit Chocolate Mousse
            </h3>
            <p className="text-[0.938rem] font-normal leading-[1.75rem] tracking-[-0.19px] text-white">
              Creamy mousse combined with <br /> summer fruits and dark
              chocolate shavings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
