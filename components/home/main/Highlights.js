import Image from 'next/image';

const Highlights = () => {
  return (
    <section className='mb-20 flex w-full flex-col items-center bg-cod-gray py-[4.5rem] text-white'>
      <div className='flex w-[87.2%] flex-col items-center gap-16'>
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
        <div className='flex flex-col items-center gap-6'>
          <div className='flex flex-col items-center gap-8 border-b border-solid border-white/[0.1494] pb-6'>
            <div className='h-full w-full'>
              <Image
                width={327}
                height={245}
                src='/images/homepage/salmon-mobile.jpg'
                alt='Seared Salmon Fillet on a plate'
              />
            </div>
            <div className='flex flex-col items-center gap-2 text-center'>
              <h3 className='font-h3-l'>Seared Salmon Fillet</h3>
              <p className='font-body-1 text-[1.063rem]'>
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-8 border-b border-solid border-white/[0.1494] pb-6'>
            <div className='h-full w-full'>
              <Image
                width={327}
                height={245}
                src='/images/homepage/beef-mobile.jpg'
                alt='Rosemary Filet Mignon on a plate'
              />
            </div>
            <div className='flex flex-col items-center gap-2 text-center'>
              <h3 className='font-h3-l'>Seared Salmon Fillet</h3>
              <p className='font-body-1 text-[1.063rem]'>
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-8 pb-6'>
            <div className='h-full w-full'>
              <Image
                width={327}
                height={245}
                src='/images/homepage/chocolate-mobile.jpg'
                alt='Summer Fruit Chocolate Mousse on a glass'
              />
            </div>
            <div className='flex flex-col items-center gap-2 text-center'>
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
