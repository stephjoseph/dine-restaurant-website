const Main = () => {
  return (
    <main className="-mt-[8.563rem] flex w-full flex-col items-center">
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
      </form>
    </main>
  );
};

export default Main;
