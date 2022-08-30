import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex w-full flex-col items-center bg-cod-gray pb-[14.25rem] pt-[3.5rem] text-white'>
      <div className='flex w-[87.2%] flex-col items-center gap-10'>
        <Link href='/'>
          <a>
            <Image width={82} height={32} src='/images/logo.svg' alt='logo' />
          </a>
        </Link>
        <div className='flex flex-col items-center gap-6'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <h1 className='font-h1 text-[2rem] leading-[2.5rem] tracking-[-0.4px]'>
              Reservations
            </h1>
            <p className='font-body-1 text-[0.938rem] leading-[1.563rem] tracking-[-0.19px]'>
              We can’t wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We’ll be happy
              to accommodate you.
            </p>
          </div>
          <Link href=''>
            <a className='btn-dark w-[15.313rem] px-11'>Reserve Place</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
