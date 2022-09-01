import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';

const Header = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   headingRef.current,
    //   { opacity: 0, y: 50 },
    //   { opacity: 1, y: 0, duration: 1.3, ease: 'easeIn' }
    // );
    // gsap.fromTo(
    //   textRef.current,
    //   { opacity: 0 },
    //   { opacity: 1, duration: 1.3, ease: 'easeIn' }
    // );
  }, []);

  return (
    <header className='flex w-full flex-col items-center bg-cod-gray pb-[14.25rem] pt-[3.5rem] text-white md:pb-[16.875rem] xl:pt-[4.063rem] xl:pb-[7.875rem]'>
      <div className='flex w-[87.2%] flex-col items-center gap-10 md:w-[89.71%] xl:w-[77.08%] xl:items-start xl:gap-[9.188rem]'>
        <Link href='/'>
          <a className='md:self-start'>
            <Image width={104} height={40} src='/images/logo.svg' alt='logo' />
          </a>
        </Link>
        <div className='flex flex-col items-center gap-6 xl:w-[40.1%] xl:items-start'>
          <div className='flex flex-col items-center gap-4 text-center md:w-[83.16%] xl:w-full xl:items-start xl:gap-6 xl:text-left'>
            <h1
              ref={headingRef}
              className='font-h1 xl:font-h1 text-[2rem] leading-[2.5rem] tracking-[-0.4px] md:text-[3rem] md:leading-[4rem] md:tracking-[-0.6px]'
            >
              Reservations
            </h1>
            <p
              ref={textRef}
              className='font-body-1 md:font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'
            >
              We can’t wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We’ll be happy
              to accommodate you.
            </p>
          </div>
          <Link href=''>
            <a className='btn-dark w-[15.313rem] px-11 md:hidden'>
              Reserve Place
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
