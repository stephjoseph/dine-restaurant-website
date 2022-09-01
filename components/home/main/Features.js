import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { useEffect, useRef } from 'react';

const Features = () => {
  const farmImgRef = useRef([]);
  const mealImgRef = useRef([]);
  const headingRef = useRef([]);
  const textRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      farmImgRef.current,
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: farmImgRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'easeIn',
      }
    );

    gsap.fromTo(
      mealImgRef.current,
      {
        x: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: mealImgRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'easeIn',
      }
    );

    headingRef.current.forEach((ref) => {
      gsap.fromTo(
        ref,
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ref,
            start: 'top bottom',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'easeIn',
        }
      );
    });

    textRef.current.forEach((ref) => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ref,
            start: 'top bottom',
            toggleActions: 'play none none none',
          },

          opacity: 1,
          duration: 1,
          ease: 'easeIn',
        }
      );
    });
  }, []);

  return (
    <section
      id='features'
      className='flex w-full flex-col items-center pb-20 text-cod-gray md:pb-[7.5rem] xl:mb-[-5rem] xl:pb-0'
    >
      <div className='flex w-[87.2%] flex-col items-center gap-12 md:w-[74.6%] md:gap-[7.5rem] xl:w-[77.08%]'>
        <div className='flex flex-col items-center gap-12 md:gap-14 xl:flex-row xl:gap-[7.813rem]'>
          <div
            ref={(element) => {
              farmImgRef.current[0] = element;
            }}
            className='h-[400px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:hidden'
          >
            <Image
              width={327}
              height={400}
              src='/images/homepage/enjoyable-place-mobile.jpg'
              alt='farm mountain view'
            />
          </div>
          <div
            ref={(element) => {
              farmImgRef.current[1] = element;
            }}
            className='hidden h-[360px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:block xl:hidden'
          >
            <Image
              width={573}
              height={360}
              src='/images/homepage/enjoyable-place-tablet.jpg'
              alt='farm mountain view'
            />
          </div>
          <div
            ref={(element) => {
              farmImgRef.current[2] = element;
            }}
            className='hidden h-[720px] w-[540px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:block'
          >
            <Image
              width={540}
              height={720}
              src='/images/homepage/enjoyable-place-desktop.jpg'
              alt='farm mountain view'
            />
          </div>
          <div className='flex flex-col items-center gap-8 xl:w-[40.1%] xl:items-start'>
            <Image
              width={71}
              height={7}
              src='/images/patterns/pattern-divide.svg'
              alt=''
            />
            <div className='flex flex-col items-center gap-4 text-center md:w-[79.76%] xl:w-full xl:text-left'>
              <h2
                ref={(element) => {
                  headingRef.current[0] = element;
                }}
                className='font-h2 md:font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'
              >
                Enjoyable place for all the family
              </h2>
              <p
                ref={(element) => {
                  textRef.current[0] = element;
                }}
                className='font-body-1 md:font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'
              >
                Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-12 xl:flex-row-reverse xl:gap-[7.813rem]'>
          <div
            ref={(element) => {
              mealImgRef.current[0] = element;
            }}
            className='h-[400px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:hidden'
          >
            <Image
              width={327}
              height={400}
              src='/images/homepage/locally-sourced-mobile.jpg'
              alt='meal serving'
            />
          </div>
          <div className='hidden h-[360px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:relative md:block xl:hidden'>
            <div
              ref={(element) => {
                mealImgRef.current[1] = element;
              }}
            >
              <Image
                width={573}
                height={360}
                src='/images/homepage/locally-sourced-tablet.jpg'
                alt='meal serving'
              />
            </div>

            <div className='absolute top-[14.25rem] right-[-3.625rem] hidden md:block'>
              <Image
                width={160}
                height={76}
                src='/images/patterns/pattern-lines.svg'
                alt=''
              />
            </div>
          </div>
          <div className='relative hidden h-[720px] w-[540px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:block'>
            <div
              ref={(element) => {
                mealImgRef.current[2] = element;
              }}
            >
              <Image
                width={540}
                height={720}
                src='/images/homepage/locally-sourced-desktop.jpg'
                alt='meal serving'
              />
            </div>

            <div className='absolute top-[17.625rem] right-[-7.125rem] hidden md:block'>
              <Image
                width={160}
                height={76}
                src='/images/patterns/pattern-lines.svg'
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-col items-center gap-8 xl:w-[40.1%] xl:items-start xl:gap-12'>
            <Image
              width={71}
              height={7}
              src='/images/patterns/pattern-divide.svg'
              alt=''
            />
            <div className='flex flex-col items-center gap-4 text-center md:w-[79.76%] xl:w-full xl:text-left'>
              <h2
                ref={(element) => {
                  headingRef.current[1] = element;
                }}
                className='font-h2 md:font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'
              >
                The most locally sourced food
              </h2>
              <p
                ref={(element) => {
                  textRef.current[1] = element;
                }}
                className='font-body-1 md:font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'
              >
                All our ingredients come directly from our farm or local
                fishery. So you can be sure that you’re eating the freshest,
                most sustainable food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
