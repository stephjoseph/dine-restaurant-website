import Image from 'next/image';

const Features = () => {
  return (
    <section className='mb-20 flex w-[87.2%] flex-col items-center gap-12 text-cod-gray'>
      <div className='flex flex-col items-center gap-12'>
        <div className='h-[400px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:hidden'>
          <Image
            width={327}
            height={400}
            src='/images/homepage/enjoyable-place-mobile.jpg'
            alt='farm mountain view'
          />
        </div>
        <div className='flex flex-col items-center gap-8'>
          <Image
            width={71}
            height={7}
            src='/images/patterns/pattern-divide.svg'
            alt=''
          />
          <div className='flex flex-col items-center gap-4 text-center'>
            <h2 className='font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'>
              Enjoyable place for all the family
            </h2>
            <p className='font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'>
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-12'>
        <div className='h-[400px] shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:hidden'>
          <Image
            width={327}
            height={400}
            src='/images/homepage/locally-sourced-mobile.jpg'
            alt='meal serving'
          />
        </div>
        <div className='flex flex-col items-center gap-8'>
          <Image
            width={71}
            height={7}
            src='/images/patterns/pattern-divide.svg'
            alt=''
          />
          <div className='flex flex-col items-center gap-4 text-center'>
            <h2 className='font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'>
              The most locally sourced food
            </h2>
            <p className='font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'>
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;