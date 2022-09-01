import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';

const events = [
  {
    name: 'Family Gathering',
    content:
      'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    images: {
      mobile: '/images/homepage/family-gathering-mobile@2x.jpg',
      tablet: '/images/homepage/family-gathering-tablet.jpg',
      desktop: '/images/homepage/family-gathering-desktop.jpg',
    },
  },
  {
    name: 'Special Events',
    content:
      'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    images: {
      mobile: '/images/homepage/special-events-mobile@2x.jpg',
      tablet: '/images/homepage/special-events-tablet.jpg',
      desktop: '/images/homepage/special-events-desktop.jpg',
    },
  },
  {
    name: 'Social Events',
    content:
      'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    images: {
      mobile: '/images/homepage/social-events-mobile@2x.jpg',
      tablet: '/images/homepage/social-events-tablet.jpg',
      desktop: '/images/homepage/social-events-desktop.jpg',
    },
  },
];

const Events = () => {
  const [selected, setSelected] = useState(0);

  const imgRef = useRef([]);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    imgRef.current.forEach((ref) => {
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
          duration: 1.5,
          ease: 'easeIn',
        }
      );
    });

    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },

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
          trigger: imgRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },

        opacity: 1,
        duration: 1,
        ease: 'easeIn',
      }
    );
  }, [selected]);

  return (
    <section
      id='events'
      className='flex w-full flex-col items-center pb-[7.75rem] pt-20 md:py-[7.5rem] xl:py-[10rem]'
    >
      <div className='flex w-[87.2%] flex-col items-center gap-12 md:w-[89.71%] md:gap-14 xl:w-[77.08%] xl:flex-row xl:gap-[7.813rem]'>
        <div
          ref={(element) => {
            imgRef.current[0] = element;
          }}
          className='h-[400px] w-full shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:hidden'
        >
          <Image
            width={326}
            height={400}
            src={
              selected === 0
                ? events[0].images.mobile
                : selected === 1
                ? events[1].images.mobile
                : events[2].images.mobile
            }
            alt='Summer Fruit Chocolate Mousse on a glass'
          />
        </div>
        <div className='hidden h-[360px] w-[573px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:relative md:block xl:hidden'>
          <div
            ref={(element) => {
              imgRef.current[1] = element;
            }}
          >
            <Image
              width={573}
              height={360}
              src={
                selected === 0
                  ? events[0].images.tablet
                  : selected === 1
                  ? events[1].images.tablet
                  : events[2].images.tablet
              }
              alt='Summer Fruit Chocolate Mousse on a glass'
            />
          </div>

          <div className='absolute top-[-2.375rem] left-[-3.625rem] hidden md:block'>
            <Image
              width={160}
              height={76}
              src='/images/patterns/pattern-lines.svg'
              alt=''
            />
          </div>
        </div>
        <div className='relative hidden h-[600px] w-[540px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:block'>
          <div
            ref={(element) => {
              imgRef.current[2] = element;
            }}
          >
            <Image
              width={540}
              height={600}
              src={
                selected === 0
                  ? events[0].images.desktop
                  : selected === 1
                  ? events[1].images.desktop
                  : events[2].images.desktop
              }
              alt='Summer Fruit Chocolate Mousse on a glass'
            />
          </div>

          <div className='absolute top-[-2.375rem] left-[-2.5rem] hidden xl:block'>
            <Image
              width={160}
              height={76}
              src='/images/patterns/pattern-lines.svg'
              alt=''
            />
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-6 md:gap-10 xl:w-[40.1%] xl:flex-col-reverse xl:gap-[4.875rem]'>
          <div className=' flex w-full flex-col items-center gap-4 md:flex-row md:gap-[0.625rem] xl:flex-col xl:items-start xl:gap-[0.75rem]'>
            <button
              className={`${
                selected === 0 && 'selected'
              } font-h3-s relative flex w-full items-center justify-center uppercase text-[#4c4c4c]/50 md:pb-2 xl:justify-start xl:pb-0`}
              type='button'
              onClick={() => setSelected(0)}
            >
              Family Gathering
            </button>
            <button
              className={`${
                selected === 1 && 'selected'
              } font-h3-s relative flex w-full items-center justify-center uppercase text-[#4c4c4c]/50 md:pb-2 xl:justify-start xl:pb-0`}
              type='button'
              onClick={() => setSelected(1)}
            >
              Special Events
            </button>
            <button
              className={`${
                selected === 2 && 'selected'
              } font-h3-s relative flex w-full items-center justify-center uppercase text-[#4c4c4c]/50 md:pb-2 xl:justify-start xl:pb-0`}
              type='button'
              onClick={() => setSelected(2)}
            >
              Social Events
            </button>
          </div>
          <div className='flex flex-col items-center gap-8 md:w-[66.33%] xl:w-full xl:items-start'>
            <div className='flex flex-col items-center gap-4 text-center xl:items-start xl:text-left'>
              <h2
                ref={headingRef}
                className='font-h2 md:font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'
              >
                {selected === 0
                  ? events[0].name
                  : selected === 1
                  ? events[1].name
                  : events[2].name}
              </h2>
              <p
                ref={textRef}
                className='font-body-1 md:font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'
              >
                {selected === 0
                  ? events[0].content
                  : selected === 1
                  ? events[1].content
                  : events[2].content}
              </p>
            </div>
            <Link href='/booking'>
              <a className='btn-light w-[15.313rem] bg-cod-gray text-white hover:bg-transparent hover:text-cod-gray active:bg-transparent active:text-cod-gray'>
                Book a table
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
