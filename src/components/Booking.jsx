import Header from "./booking/Header";
import Main from "./booking/Main";
import Footer from "./Footer";

const Booking = () => {
  return (
    <div id="booking" className="flex w-full flex-col items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Booking;
