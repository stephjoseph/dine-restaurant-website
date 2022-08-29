import Head from 'next/head';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dine Restaurant</title>
        <link rel='icon' type='image/png' href='/images/favicon-32x32.png' />
      </Head>
      <div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
