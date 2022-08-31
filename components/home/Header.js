import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex w-full flex-col items-center bg-cod-gray pb-[9.5rem] pt-[14.5rem] text-white md:pt-[23.375rem] md:pb-[13.5rem]'>
      <div className='flex w-[87.2%] flex-col items-center gap-8 md:w-[89.71%]'>
        <Link href='/'>
          <a>
            <Image width={104} height={40} src='/images/logo.svg' alt='logo' />
          </a>
        </Link>
        <div className='flex flex-col items-center gap-8 md:gap-6'>
          <div className='flex flex-col items-center gap-6 text-center md:w-[83.16%]'>
            <h1 className='font-h1 text-[2rem] leading-[2.5rem] tracking-[-0.4px] md:text-[3rem] md:leading-[4rem] md:tracking-[-0.6px]'>
              Exquisite dining <br className='hidden md:inline xl:hidden' />{' '}
              since 1989
            </h1>
            <p className='font-body-1 md:font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'>
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
          </div>
          <Link href='/booking'>
            <a className='btn-dark w-[15.313rem]'>Book a table</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
