import iconMinus from "../../images/icons/icon-minus.svg";
import iconPlus from "../../images/icons/icon-plus.svg";
import { useState } from "react";

const Main = () => {
  const [numPeople, setNumPeople] = useState(0);

  return (
    <main className="-mt-[8.563rem] mb-[5.375rem] flex w-full flex-col items-center">
      <form className="flex w-[20.438rem] flex-col gap-8 bg-white p-8 shadow-[0px_75px_100px_-50px_rgba(56,66,85,0.5032)]">
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
        <div className="flex flex-col gap-2">
          <p className="text-lg font-normal tracking-[-0.22px] text-[#111111]">
            Pick a date
          </p>
          <input
            type="date"
            className="border border-solid border-[#8E8E8E] p-3"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-normal tracking-[-0.22px] text-[#111111]">
            Pick a time
          </p>
          <input
            type="time"
            className="border border-solid border-[#8E8E8E] p-3"
          />
        </div>
        <div className="flex w-full items-center justify-center gap-16 self-center border-b border-solid border-[#8E8E8E] pb-4">
          <button
            type="button"
            className="flex h-4 w-4 items-center justify-center"
            onClick={() => setNumPeople((prevState) => prevState - 1)}
          >
            <img src={iconMinus} alt="" />
          </button>
          <p className="text-lg font-bold tracking-[-0.22px] text-[#151515]">
            {numPeople} People
          </p>
          <button
            type="button"
            className="flex h-4 w-4 items-center justify-center"
            onClick={() => setNumPeople((prevState) => prevState + 1)}
          >
            <img src={iconPlus} alt="" />
          </button>
        </div>
        <button
          type="submit"
          className="flex h-16 w-full items-center justify-center bg-[#111111] text-[0.875rem] font-semibold uppercase leading-[1.75rem] tracking-[2px] text-white"
        >
          Make Reservation
        </button>
      </form>
    </main>
  );
};

export default Main;
