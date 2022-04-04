import { Link } from "react-router-dom";
import { useState } from "react";

import mobileFamilyGatheringImg from "../../../images/homepage/family-gathering-mobile.jpg";
import mobileSpecialEventsImg from "../../../images/homepage/special-events-mobile@2x.jpg";
import mobileSocialEventsImg from "../../../images/homepage/social-events-mobile@2x.jpg";

const Events = () => {
  const [selected, setSelected] = useState(1);

  const tabSelect = (index) => {
    setSelected(index);
  };

  return (
    <section className="mb-[7.75rem] flex w-[20.438rem] flex-col items-center">
      <div className="mb-12 w-full shadow-[0px_75px_100px_-50px_rgba(56,66,85,0.5032)]">
        <img
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
      </div>
      <div className="mb-6 flex w-full flex-col items-center gap-4">
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
      <div className="mb-8 flex w-full flex-col items-center gap-4 text-center">
        <h2 className="text-[2rem] font-bold leading-[2.5rem] tracking-[-0.4px] text-[#242B37]">
          {selected === 1
            ? "Family Gathering"
            : selected === 2
            ? "Special Events"
            : selected === 3
            ? "Social Events"
            : null}
        </h2>
        <p className="text-[0.938rem] font-normal leading-[1.563rem] tracking-[-0.19px] text-[#242B37]">
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
      </div>
      <Link
        className="flex h-16 w-[15.313rem] items-center justify-center bg-[#111111] text-[0.875rem] font-semibold uppercase leading-[1rem] tracking-[2px] text-white"
        to="/booking"
      >
        Book a table
      </Link>
    </section>
  );
};

export default Events;
