import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

const Header = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

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
    // gsap.fromTo(
    //   btnRef.current,
    //   { opacity: 0 },
    //   { opacity: 1, duration: 1.3, ease: 'easeIn', delay: 0.5 }
    // );
  }, []);

  return (
    <header className='flex w-full flex-col items-center bg-cod-gray pb-[9.5rem] pt-[14.5rem] text-white md:pt-[23.375rem] md:pb-[13.5rem] xl:pb-[12.375rem] xl:pt-16'>
      <div className='flex w-[87.2%] flex-col items-center gap-8 md:w-[89.71%] xl:w-[77.08%] xl:items-start xl:gap-[9.563rem]'>
        <Link href='/'>
          <a>
            <Image width={104} height={40} src='/images/logo.svg' alt='logo' />
          </a>
        </Link>
        <div className='flex flex-col items-center gap-8 md:gap-6 xl:w-[47.12%] xl:items-start xl:gap-[2.625rem]'>
          <div className='flex flex-col items-center gap-6 text-center md:w-[83.16%] xl:w-full xl:items-start xl:text-left'>
            <h1
              ref={headingRef}
              className='font-h1 xl:font-h1 text-[2rem] leading-[2.5rem] tracking-[-0.4px] md:text-[3rem] md:leading-[4rem] md:tracking-[-0.6px]'
            >
              Exquisite dining <br className='hidden md:inline xl:hidden' />{' '}
              since 1989
            </h1>
            <p
              ref={textRef}
              className='font-body-1 md:font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px] xl:w-[85.09%]'
            >
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
          </div>
          <Link href='/booking'>
            <a ref={btnRef} className='btn-dark w-[15.313rem]'>
              Book a table
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
