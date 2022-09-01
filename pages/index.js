import Header from '../components/home/Header';
import Main from '../components/home/Main';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div id='home' className='flex w-full max-w-[1920px] flex-col items-center'>
      <Header />
      <Main />
    </div>
  );
}
