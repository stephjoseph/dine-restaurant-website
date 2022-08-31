import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center bg-cod-gray py-20 md:py-16 xl:py-[4.875rem]'>
      <div className='flex w-[87.2%] flex-col items-center gap-10 text-center md:w-[89.71%] md:flex-row md:items-start md:gap-[8.125rem] md:text-left xl:w-[77.08%] xl:gap-[12.063rem]'>
        <Link href='/'>
          <a>
            <Image
              width={104}
              height={40}
              src='/images/logo.svg'
              alt='logo'
            ></Image>
          </a>
        </Link>
        <div className='flex flex-col items-center gap-8 md:items-start xl:flex-row xl:gap-[7.75rem]'>
          <div className='font-body-2 uppercase text-white'>
            <div>Marthwaite, Sedbergh</div>
            <div>Cumbria</div>
            <div>+00 44 123 4567</div>
          </div>
          <div className='font-body-2  uppercase text-white'>
            <div>Open times</div>
            <div className='text-[0.869rem] md:text-[0.938rem]'>
              MON - FRI: 09:00 AM - 10:00 PM
            </div>
            <div className='text-[0.869rem] md:text-[0.938rem]'>
              SAT - SUN: 09:00 AM - 11:30 PM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
