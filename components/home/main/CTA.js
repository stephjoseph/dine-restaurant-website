import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';
import { useRef, useEffect } from 'react';

const CTA = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   headingRef.current,
    //   {
    //     y: 50,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: headingRef.current,
    //       start: 'top bottom',
    //       toggleActions: 'play none none none',
    //     },
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //     ease: 'easeIn',
    //   }
    // );
  }, []);

  return (
    <section
      id='CTA'
      className='flex w-full flex-col items-center py-20 md:py-16 xl:py-[5.5rem]'
    >
      <div className='flex w-[87.2%] flex-col items-center gap-6 text-center md:w-[83.07%] xl:w-[77.08%] xl:flex-row xl:justify-between'>
        <h2
          ref={headingRef}
          className='font-h2 md:font-h2 xl:font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px] text-white'
        >
          Ready to make a reservation?
        </h2>
        <Link href='/booking'>
          <a className='btn-dark w-[15.313rem]'>Book a table</a>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
