import CTA from "./main/CTA";
import EnjoyablePlace from "./main/EnjoyablePlace";
import Events from "./main/Events";
import Highlights from "./main/Highlights";
import LocallySourced from "./main/LocallySourced";

const Main = () => {
  return (
    <main className="z-10 -mt-[4.5rem] flex w-full flex-col items-center">
      <EnjoyablePlace />
      <LocallySourced />
      <Highlights />
      <Events />
      <CTA />
    </main>
  );
};

export default Main;
