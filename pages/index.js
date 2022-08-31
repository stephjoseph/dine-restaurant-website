import Header from '../components/home/Header';
import Main from '../components/home/Main';

export default function Home() {
  return (
    <div id='home' className='flex w-full max-w-[1920px] flex-col items-center'>
      <Header />
      <Main />
    </div>
  );
}
