import Head from 'next/head';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dine Restaurant</title>
        <link rel='icon' type='image/png' href='/images/favicon-32x32.png' />
      </Head>
      <div className='mx-auto grid w-full max-w-[1920px] place-items-center'>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
