import Link from 'next/link';

const CTA = () => {
  return (
    <section id='CTA' className='flex w-full flex-col items-center py-20'>
      <div className='flex w-[87.2%] flex-col items-center gap-6 text-center'>
        <h2 className='font-h2 text-[2rem] leading-[2.5rem] tracking-[-0.4px] text-white'>
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
