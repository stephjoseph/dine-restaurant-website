import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex w-full flex-col items-center bg-cod-gray pb-[9.5rem] pt-[14.5rem] text-white'>
      <div className='flex w-[87.2%] flex-col items-center gap-8'>
        <Link href='/'>
          <a>
            <Image width={104} height={40} src='/images/logo.svg' alt='logo' />
          </a>
        </Link>
        <div className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <h1 className='font-h1 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'>
              Exquisite dining since 1989
            </h1>
            <p className='font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'>
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
