import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="CTA" className="flex w-full flex-col items-center">
      <div className="my-20 flex w-[20.438rem] flex-col items-center gap-6 text-center">
        <h2 className="text-[2rem] font-bold leading-[2.5rem] tracking-[-0.4px] text-white">
          Ready to make a reservation?
        </h2>
        <Link
          className="flex h-16 w-[15.313rem] items-center justify-center border border-solid border-white bg-transparent text-[0.875rem] font-semibold uppercase leading-[1rem] tracking-[2px] text-white"
          to="/booking"
        >
          Book a table
        </Link>
      </div>
    </section>
  );
};

export default CTA;
