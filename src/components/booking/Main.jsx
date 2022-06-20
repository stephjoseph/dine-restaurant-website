import iconMinus from "../../images/icons/icon-minus.svg";
import iconPlus from "../../images/icons/icon-plus.svg";
import { useState } from "react";

const Main = () => {
  const [numPeople, setNumPeople] = useState(0);

  return (
    <main className="-mt-[8.563rem] mb-[5.375rem] flex w-full  flex-col items-center md:mb-[7.5rem] md:-mt-[14.375rem] xl:z-10 xl:mb-[6.313rem] xl:-mt-[21.375rem] xl:w-[69.375rem] xl:items-end">
      <form className="flex w-[20.438rem] flex-col gap-8 bg-white p-8 shadow-[0px_75px_100px_-50px_rgba(56,66,85,0.5032)] md:w-[33.75rem] md:p-12 xl:relative">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b border-solid border-[#8E8E8E] pb-4 pl-4 text-lg font-normal tracking-[-0.22px] text-[#111111] placeholder:text-lg placeholder:font-normal placeholder:tracking-[-0.22px] placeholder:text-[#111111]/50 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-solid border-[#8E8E8E] pb-4 pl-4 text-lg font-normal tracking-[-0.22px] text-[#111111] placeholder:text-lg placeholder:font-normal placeholder:tracking-[-0.22px] placeholder:text-[#111111]/50 focus:outline-none"
        />
        <div className="md: flex flex-col gap-2 md:flex-row md:items-center md:gap-[3.25rem]">
          <p className="text-lg font-normal tracking-[-0.22px] text-[#111111]">
            Pick a date
          </p>
          <div className="flex gap-[0.875rem]">
            <div className="relative h-[2.813rem] w-[4.563rem] border-b border-solid border-[#8E8E8E]">
              <input
                className="absolute left-[0.913rem] h-[1.75rem] w-[2.375rem] text-lg tracking-[-0.22px] placeholder:text-lg placeholder:tracking-[-0.22px] placeholder:text-[#111111]/50 focus:outline-none"
                type="number"
                name="month"
                min="1"
                max="12"
                placeholder="MM"
              />
            </div>
            <div className="relative h-[2.813rem] w-[4.563rem] border-b border-solid border-[#8E8E8E]">
              <input
                className="absolute left-[0.913rem] h-[1.75rem] w-[2.375rem] text-lg tracking-[-0.22px] placeholder:text-lg placeholder:tracking-[-0.22px] placeholder:text-[#111111]/50 focus:outline-none"
                type="number"
                name="day"
                min="1"
                max="31"
                placeholder="DD"
              />
            </div>
            <div className="relative h-[2.813rem] w-[5.5rem] border-b border-solid border-[#8E8E8E]">
              <input
                className="absolute left-[0.913rem] h-[1.75rem] w-[3.313rem] text-lg tracking-[-0.22px] placeholder:text-lg placeholder:tracking-[-0.22px] placeholder:text-[#111111]/50 focus:outline-none"
                type="number"
                min="2021"
                max="2022"
                placeholder="YYYY"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-[3.25rem]">
          <p className="text-lg font-normal tracking-[-0.22px] text-[#111111]">
            Pick a time
          </p>
          <div className="flex gap-[0.875rem]">
            <div className="relative h-[2.813rem] w-[4.563rem] border-b border-solid border-[#8E8E8E]">
              <input
                className="absolute left-[0.913rem] h-[1.75rem] w-[2.375rem] text-lg tracking-[-0.22px] placeholder:text-lg placeholder:tracking-[-0.22px] placeholder:text-[#111111]/50 focus:outline-none"
                type="number"
                name="hour"
                min="1"
                max="12"
                placeholder="09"
              />
            </div>
            <div className="relative h-[2.813rem] w-[4.563rem] border-b border-solid border-[#8E8E8E]">
              <input
                className="absolute left-[0.913rem] h-[1.75rem] w-[2.375rem] text-lg tracking-[-0.22px] placeholder:text-lg placeholder:tracking-[-0.22px] placeholder:text-[#111111]/50 focus:outline-none"
                type="number"
                name="minute"
                min="1"
                max="59"
                placeholder="00"
              />
            </div>
            <div className="relative h-[2.813rem] w-[5.5rem] border-b border-solid border-[#8E8E8E]">
              <input
                className="absolute left-[0.913rem] h-[1.75rem] w-[3.313rem] text-lg tracking-[-0.22px] placeholder:text-lg placeholder:tracking-[-0.22px] placeholder:text-[#111111]/50 focus:outline-none"
                type="number"
                min="2021"
                max="2022"
                placeholder="YYYY"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-16 self-center border-b border-solid border-[#8E8E8E] pb-4 md:gap-[7.5rem]">
          <button
            type="button"
            className="flex h-4 w-4 items-center justify-center md:h-8 md:w-8"
            onClick={() =>
              setNumPeople((prevState) =>
                prevState <= 0 ? (prevState = 0) : prevState - 1
              )
            }
          >
            <img src={iconMinus} alt="" />
          </button>
          <p className="text-lg font-bold tracking-[-0.22px] text-[#151515]">
            {numPeople} People
          </p>
          <button
            type="button"
            className="flex h-4 w-4 items-center justify-center md:h-8 md:w-8"
            onClick={() => setNumPeople((prevState) => prevState + 1)}
          >
            <img src={iconPlus} alt="" />
          </button>
        </div>
        <button
          type="submit"
          className="flex h-16 w-full items-center justify-center bg-[#111111] text-[0.875rem] font-semibold uppercase leading-[1.75rem] tracking-[2px] text-white hover:border hover:border-solid hover:border-[#111111] hover:bg-white hover:text-[#111111] active:border active:border-solid active:border-[#111111] active:bg-white active:text-[#111111]"
        >
          Make Reservation
        </button>
      </form>
    </main>
  );
};

export default Main;
