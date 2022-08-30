import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <section className='mb-[7.75rem] flex w-[87.2%] flex-col items-center gap-12'>
      <div className='h-[400px] w-full shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:hidden'>
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
      <div className='flex w-full flex-col items-center gap-6'>
        <div className=' flex w-full flex-col items-center gap-4'>
          <button
            className={`${
              selected === 0 && 'selected'
            } font-h3-s relative flex w-full items-center justify-center uppercase text-[#4c4c4c]/50`}
            type='button'
            onClick={() => setSelected(0)}
          >
            Family Gathering
          </button>
          <button
            className={`${
              selected === 1 && 'selected'
            } font-h3-s relative flex w-full items-center justify-center uppercase text-[#4c4c4c]/50`}
            type='button'
            onClick={() => setSelected(1)}
          >
            Special Events
          </button>
          <button
            className={`${
              selected === 2 && 'selected'
            } font-h3-s relative flex w-full items-center justify-center uppercase text-[#4c4c4c]/50`}
            type='button'
            onClick={() => setSelected(2)}
          >
            Social Events
          </button>
        </div>
        <div className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <h2 className='font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'>
              {selected === 0
                ? events[0].name
                : selected === 1
                ? events[1].name
                : events[2].name}
            </h2>
            <p className='font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'>
              {selected === 0
                ? events[0].content
                : selected === 1
                ? events[1].content
                : events[2].content}
            </p>
          </div>
          <Link href='/booking'>
            <a className='btn-light w-[15.313rem] bg-cod-gray text-white hover:bg-transparent hover:text-cod-gray'>
              Book a table
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
