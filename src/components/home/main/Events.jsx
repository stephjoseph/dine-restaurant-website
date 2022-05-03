import { Link } from "react-router-dom";
import { useState } from "react";

import mobileFamilyGatheringImg from "../../../images/homepage/family-gathering-mobile.jpg";
import tabletFamilyGatheringImg from "../../../images/homepage/family-gathering-tablet.jpg";
import desktopFamilyGatheringImg from "../../../images/homepage/family-gathering-desktop.jpg";
import mobileSpecialEventsImg from "../../../images/homepage/special-events-mobile@2x.jpg";
import tabletSpecialEventsImg from "../../../images/homepage/special-events-tablet@2x.jpg";
import desktopSpecialEventsImg from "../../../images/homepage/special-events-desktop@2x.jpg";
import mobileSocialEventsImg from "../../../images/homepage/social-events-mobile@2x.jpg";
import tabletSocialEventsImg from "../../../images/homepage/social-events-tablet@2x.jpg";
import desktopSocialEventsImg from "../../../images/homepage/social-events-desktop@2x.jpg";

const Events = () => {
  const [selected, setSelected] = useState(1);

  const tabSelect = (index) => {
    setSelected(index);
  };

  return (
    <section
      id="events"
      className="mb-[7.75rem] flex w-[20.438rem] flex-col items-center md:relative md:mb-[7.5rem] md:w-[43.063rem] xl:mb-[10rem] xl:w-[69.375rem] xl:flex-row xl:gap-[7.813rem]"
    >
      <div className="mb-12 w-full shadow-[0px_75px_100px_-50px_rgba(56,66,85,0.5032)] md:mb-14 md:w-[35.813rem] xl:w-[33.75rem]">
        <img
          className="md:hidden"
          src={
            selected === 1
              ? mobileFamilyGatheringImg
              : selected === 2
              ? mobileSpecialEventsImg
              : selected === 3
              ? mobileSocialEventsImg
              : null
          }
          alt=""
        />
        <img
          className="hidden md:block xl:hidden"
          src={
            selected === 1
              ? tabletFamilyGatheringImg
              : selected === 2
              ? tabletSpecialEventsImg
              : selected === 3
              ? tabletSocialEventsImg
              : null
          }
          alt=""
        />
        <img
          className="hidden xl:block"
          src={
            selected === 1
              ? desktopFamilyGatheringImg
              : selected === 2
              ? desktopSpecialEventsImg
              : selected === 3
              ? desktopSocialEventsImg
              : null
          }
          alt=""
        />
      </div>
      <div className="flex w-full flex-col items-center xl:w-[27.813rem] xl:flex-col-reverse xl:items-start xl:gap-[4.875rem]">
        <div className="mb-6 flex w-full flex-col items-center gap-4 md:mb-10 md:flex-row md:gap-[0.625rem] xl:flex-col xl:items-start xl:gap-[0.75rem]">
          <button
            className={selected === 1 ? "selected-tab" : "unselected-tab"}
            onClick={() => tabSelect(1)}
          >
            Family Gathering
          </button>
          <button
            className={selected === 2 ? "selected-tab" : "unselected-tab"}
            onClick={() => tabSelect(2)}
          >
            Special Events
          </button>
          <button
            className={selected === 3 ? "selected-tab" : "unselected-tab"}
            onClick={() => tabSelect(3)}
          >
            Social Events
          </button>
        </div>
        <div className="flex w-full flex-col items-center gap-4 text-center md:w-[28.563rem] xl:items-start xl:text-left">
          <h2 className="text-[2rem] font-bold leading-[2.5rem] tracking-[-0.4px] text-[#242B37] md:text-[2.5rem] md:leading-[3.5rem] md:tracking-[-0.5px]">
            {selected === 1
              ? "Family Gathering"
              : selected === 2
              ? "Special Events"
              : selected === 3
              ? "Social Events"
              : null}
          </h2>
          <p className="mb-4 text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-[#242B37] md:text-lg md:leading-[1.875rem] md:tracking-[-0.22px]">
            {selected === 1
              ? `We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.`
              : selected === 2
              ? `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.`
              : selected === 3
              ? `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.`
              : null}
          </p>
          <Link
            className="flex h-16 w-[15.313rem] items-center justify-center bg-[#111111] text-[0.875rem] font-semibold uppercase leading-[1rem] tracking-[2px] text-white hover:border hover:border-solid hover:border-[#111111] hover:bg-white hover:text-[#111111] active:bg-white active:text-[#111111]"
            to="/booking"
          >
            Book a table
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
