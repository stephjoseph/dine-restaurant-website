import CTA from './main/CTA';
import Events from './main/Events';
import Features from './main/Features';
import Highlights from './main/Highlights';

const Main = () => {
  return (
    <main className='-mt-[4.5rem] flex w-full flex-col items-center'>
      <Features />
      <Highlights />
      <Events />
      <CTA />
    </main>
  );
};

export default Main;
