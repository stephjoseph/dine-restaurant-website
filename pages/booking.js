import Head from 'next/head';
import Header from '../components/booking/Header';
import Main from '../components/booking/Main';

const Booking = () => {
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
