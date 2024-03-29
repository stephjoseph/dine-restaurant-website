import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';

const Highlights = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'easeIn',
      }
    );

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },

        opacity: 1,
        duration: 1,
        ease: 'easeIn',
      }
    );
  }, []);

  return (
    <section className='flex w-full flex-col items-center bg-cod-gray py-[4.5rem] text-white md:py-24 xl:pb-[7.5rem] xl:pt-[12.5rem]'>
      <div className='flex w-[87.2%] flex-col items-center gap-16 md:w-[74.60%] md:gap-14 xl:w-[77.08%] xl:flex-row xl:items-start xl:gap-[7.813rem]'>
        <div className='flex flex-col items-center gap-8 md:w-[77.66%] xl:w-[40.1%] xl:items-start xl:gap-12'>
          <Image
            width={71}
            height={7}
            src='/images/patterns/pattern-divide.svg'
            alt=''
          />
          <div className='flex flex-col items-center gap-4 text-center xl:text-left'>
            <h2
              ref={headingRef}
              className='font-h2 md:font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'
            >
              A few highlights from our menu
            </h2>
            <p
              ref={textRef}
              className='font-body-1 md:font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'
            >
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-6 md:items-start xl:mt-[3.438rem] xl:w-[48.65%]'>
          <div className='flex flex-col items-center gap-8 border-b border-solid border-white/[0.1494] pb-6 md:flex-row md:gap-[3.875rem]'>
            <div className='md:hidden'>
              <Image
                width={327}
                height={245}
                src='/images/homepage/salmon-mobile.jpg'
                alt='Seared Salmon Fillet on a plate'
              />
            </div>
            <div className='hidden md:relative md:block'>
              <Image
                width={128}
                height={96}
                src='/images/homepage/salmon-desktop-tablet.jpg'
                alt='Seared Salmon Fillet on a plate'
              />
              <div className='absolute top-[1.125rem] right-[-2rem] hidden h-px w-8 bg-beaver md:block'></div>
            </div>

            <div className='flex flex-col items-center gap-2 text-center md:w-[66.84%] md:items-start md:gap-1 md:text-left'>
              <h3 className='font-h3-l'>Seared Salmon Fillet</h3>
              <p className='font-body-1 text-[1.063rem]'>
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-8 border-b border-solid border-white/[0.1494] pb-6 md:flex-row md:gap-[3.875rem]'>
            <div className='md:hidden'>
              <Image
                width={327}
                height={245}
                src='/images/homepage/beef-mobile.jpg'
                alt='Rosemary Filet Mignon on a plate'
              />
            </div>
            <div className='hidden md:relative md:block'>
              <Image
                width={128}
                height={96}
                src='/images/homepage/beef-desktop-tablet.jpg'
                alt='Rosemary Filet Mignon on a plate'
              />
              <div className='absolute top-[1.125rem] right-[-2rem] hidden h-px w-8 bg-beaver md:block'></div>
            </div>
            <div className='flex flex-col items-center gap-2 text-center md:w-[66.84%] md:items-start md:gap-1 md:text-left'>
              <h3 className='font-h3-l'>Rosemary Filet Mignon</h3>
              <p className='font-body-1 text-[1.063rem]'>
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-8 md:flex-row md:gap-[3.875rem]'>
            <div className='md:hidden'>
              <Image
                width={327}
                height={245}
                src='/images/homepage/chocolate-mobile.jpg'
                alt='Summer Fruit Chocolate Mousse on a glass'
              />
            </div>
            <div className='hidden md:relative md:block'>
              <Image
                width={128}
                height={96}
                src='/images/homepage/chocolate-desktop-tablet.jpg'
                alt='Summer Fruit Chocolate Mousse on a glass'
              />
              <div className='absolute top-[1.125rem] right-[-2rem] hidden h-px w-8 bg-beaver md:block'></div>
            </div>
            <div className='flex flex-col items-center gap-2 text-center md:w-[66.84%] md:items-start md:gap-1 md:text-left'>
              <h3 className='font-h3-l'>Summer Fruit Chocolate Mousse</h3>
              <p className='font-body-1 text-[1.063rem]'>
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
