import Head from 'next/head';
import Header from '../components/booking/Header';
import Main from '../components/booking/Main';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Booking = () => {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Head>
        <title>Dine Restaurant | Booking</title>
      </Head>
      <div
        id='booking'
        className='flex w-full max-w-[1920px] flex-col items-center'
      >
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Booking;
