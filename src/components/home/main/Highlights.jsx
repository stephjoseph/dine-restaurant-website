import patternDivide from "../../../images/patterns/pattern-divide.svg";
import mobileSalmonImg from "../../../images/homepage/salmon-mobile.jpg";
import mobileBeefImg from "../../../images/homepage/beef-mobile.jpg";
import mobileChocolateImg from "../../../images/homepage/chocolate-mobile.jpg";

const Highlights = () => {
  return (
    <section className="mb-20 flex w-full flex-col items-center gap-16 bg-black py-[4.5rem]">
      <div className="flex w-[20.438rem] flex-col items-center gap-8 text-center">
        <div className="pointer-events-none">
          <img src={patternDivide} alt="" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[2rem] font-bold leading-[2.5rem] tracking-[-0.4px] text-white">
            A few highlights from our menu
          </h2>
          <p className="text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-white">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
      </div>
      <div className="flex w-[20.438rem] flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center gap-8 border-b border-solid border-white/[0.1494] pb-6">
          <div>
            <img src={mobileSalmonImg} alt="" />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-lg font-bold tracking-[-0.22px] text-white">
              Seared Salmon Fillet
            </h3>
            <p className="text-[0.938rem] font-normal leading-[1.75rem] tracking-[-0.19px] text-white">
              Our locally sourced salmon served <br /> with a refreshing
              buckwheat summer salad.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-8 border-b border-solid border-white/[0.1494] pb-6">
          <div>
            <img src={mobileBeefImg} alt="" />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-lg font-bold tracking-[-0.22px] text-white">
              Rosemary Filet Mignon
            </h3>
            <p className="text-[0.938rem] font-normal leading-[1.75rem] tracking-[-0.19px] text-white">
              Our prime beef served to your taste <br /> with a delicious choice
              of seasonal <br /> sides.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-8">
          <div>
            <img src={mobileChocolateImg} alt="" />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
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
