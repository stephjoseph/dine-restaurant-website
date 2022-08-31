import { useEffect, useState } from 'react';
import Image from 'next/image';

const Main = () => {
  const [open, setOpen] = useState(false);
  const [numPeople, setNumPeople] = useState(4);
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    date: {
      month: '',
      day: '',
      year: '',
    },
    time: {
      hour: '',
      minute: '',
      midday: 'AM',
    },
  });

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const handleMinus = () => {
    setNumPeople((prevState) => prevState - 1);
    numPeople <= 1 && setNumPeople(1);
  };

  const handlePlus = () => {
    setNumPeople((prevState) => prevState + 1);
    numPeople >= 12 && setNumPeople(12);
  };

  useEffect(() => {
    console.log(reservation);
  }, [reservation]);

  return (
    <main className='mb-[5.375rem] -mt-[8.563rem] flex w-full flex-col items-center md:mb-[7.5rem] md:-mt-[14.375rem]'>
      <form className='flex w-[87.2%] flex-col items-center gap-8 bg-white p-8 shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] md:w-[70.31%] md:p-12'>
        <label className='relative w-full'>
          <span className='pointer-events-none absolute opacity-0'>Name</span>
          <input
            type='text'
            className='placeholder:font-body-1 font-body-1 w-full border-b border-solid border-[#8E8E8E] px-4 pb-4 text-cod-gray placeholder:text-cod-gray/50 focus:outline-none'
            placeholder='Name'
            value={reservation.name}
            onChange={(e) => {
              setReservation((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
          />
        </label>
        <label className='relative w-full'>
          <span className='pointer-events-none absolute opacity-0'>Name</span>
          <input
            type='email'
            className='placeholder:font-body-1 font-body-1 w-full border-b border-solid border-[#8E8E8E] px-4 pb-4 text-cod-gray placeholder:text-cod-gray/50 focus:outline-none'
            placeholder='Email'
            value={reservation.email}
            onChange={(e) => {
              setReservation((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
          />
        </label>
        <div className='flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:gap-[3.25rem]'>
          <div className='font-body-1 text-cod-gray md:w-[23.19%]'>
            Pick a date
          </div>
          <div className='flex w-full items-center justify-between md:w-[65.09%] md:gap-4'>
            <label className='relative w-[27.76%]'>
              <span className='pointer-events-none absolute opacity-0'>
                Month
              </span>
              <input
                type='number'
                className='placeholder:font-body-1 font-body-1 w-full border-b border-solid border-[#8E8E8E] px-4 pb-4 text-cod-gray placeholder:text-cod-gray/50 focus:outline-none'
                placeholder='MM'
                min='1'
                max='12'
                value={reservation.date.month}
                onChange={(e) => {
                  setReservation((prevState) => ({
                    ...prevState,
                    date: {
                      ...prevState.date,
                      month: e.target.value,
                    },
                  }));
                }}
              />
            </label>
            <label className='relative w-[27.76%]'>
              <span className='pointer-events-none absolute opacity-0'>
                Day
              </span>
              <input
                type='number'
                className='placeholder:font-body-1 font-body-1 w-full border-b border-solid border-[#8E8E8E] px-4 pb-4 text-cod-gray placeholder:text-cod-gray/50 focus:outline-none'
                placeholder='DD'
                min='1'
                max='31'
                value={reservation.date.day}
                onChange={(e) => {
                  setReservation((prevState) => ({
                    ...prevState,
                    date: {
                      ...prevState.date,
                      day: e.target.value,
                    },
                  }));
                }}
              />
            </label>
            <label className='relative w-[33.46%]'>
              <span className='pointer-events-none absolute opacity-0'>
                Year
              </span>
              <input
                type='number'
                className='placeholder:font-body-1 font-body-1 w-full border-b border-solid border-[#8E8E8E] px-4 pb-4 text-cod-gray placeholder:text-cod-gray/50 focus:outline-none'
                placeholder='YYYY'
                min='1'
                max='2022'
                value={reservation.date.year}
                onChange={(e) => {
                  setReservation((prevState) => ({
                    ...prevState,
                    date: {
                      ...prevState.date,
                      year: e.target.value,
                    },
                  }));
                }}
              />
            </label>
          </div>
        </div>
        <div className='flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:gap-[3.438rem]'>
          <div className='font-body-1 text-cod-gray md:w-[22.52%]'>
            Pick a time
          </div>
          <div className='relative flex w-full items-center justify-between md:w-[65.09%] md:gap-4'>
            <label className='relative w-[27.76%]'>
              <span className='pointer-events-none absolute opacity-0'>
                Hour
              </span>
              <input
                type='number'
                className='placeholder:font-body-1 font-body-1 w-full border-b border-solid border-[#8E8E8E] px-4 pb-4 text-cod-gray placeholder:text-cod-gray/50 focus:outline-none'
                placeholder='09'
                min='1'
                max='12'
                value={reservation.time.hour}
                onChange={(e) => {
                  setReservation((prevState) => ({
                    ...prevState,
                    time: {
                      ...prevState.time,
                      hour: e.target.value,
                    },
                  }));
                }}
              />
            </label>
            <label className='relative w-[27.76%]'>
              <span className='pointer-events-none absolute opacity-0'>
                Minutes
              </span>
              <input
                type='number'
                className='placeholder:font-body-1 font-body-1 w-full border-b border-solid border-[#8E8E8E] px-4 pb-4 text-cod-gray placeholder:text-cod-gray/50 focus:outline-none'
                placeholder='00'
                min='1'
                max='59'
                value={reservation.time.minute}
                onChange={(e) => {
                  setReservation((prevState) => ({
                    ...prevState,
                    time: {
                      ...prevState.time,
                      minute: e.target.value,
                    },
                  }));
                }}
              />
            </label>
            <button
              className='font-body-1 flex w-[33.46%] items-center gap-[0.375rem] border-b border-solid border-[#8E8E8E] px-4 pb-4'
              type='button'
              onClick={toggleOpen}
            >
              {reservation.time.midday}
              <div
                className={`${
                  open &&
                  'scale-y-[-1] transition-transform duration-100 ease-in'
                }`}
              >
                <Image
                  width={18}
                  height={11}
                  src='/images/icons/icon-arrow.svg'
                  alt='arrow icon'
                />
              </div>
            </button>
            <div
              className={`${
                !open && 'pointer-events-none opacity-0'
              } absolute top-[3.313rem] -right-[0.688rem] z-10 flex flex-col gap-4 bg-white py-4 pl-4 pr-[1.875rem] shadow-[0_25px_15px_0px_rgba(56,66,85,0.2462)] transition-opacity duration-300 ease-in`}
            >
              <button
                className='font-body-1 flex items-center gap-4'
                type='button'
                onClick={() => {
                  setReservation((prevState) => ({
                    ...prevState,
                    time: {
                      ...prevState.time,
                      midday: 'AM',
                    },
                  }));
                  toggleOpen();
                }}
              >
                <div
                  className={`${
                    reservation.time.midday !== 'AM' && 'invisible'
                  }`}
                >
                  <Image
                    width={18}
                    height={11}
                    src='/images/icons/icon-check.svg'
                    alt='check icon'
                  />
                </div>
                AM
              </button>
              <button
                className='font-body-1 flex items-center gap-4'
                type='button'
                onClick={() => {
                  setReservation((prevState) => ({
                    ...prevState,
                    time: {
                      ...prevState.time,
                      midday: 'PM',
                    },
                  }));
                  toggleOpen();
                }}
              >
                <div
                  className={`${
                    reservation.time.midday !== 'PM' && 'invisible'
                  }`}
                >
                  <Image
                    width={18}
                    height={11}
                    src='/images/icons/icon-check.svg'
                    alt='check icon'
                  />
                </div>
                PM
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-between border-b border-solid border-[#8E8E8E] pb-4'>
          <button
            className='group flex h-[1.75rem] w-[2.75rem] items-center justify-center md:w-14'
            type='button'
            onClick={handleMinus}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='7' height='3'>
              <path
                className='group-active:fill-beaver/50'
                fill='#9E7F66'
                d='M6.425 2.977V.601H.629v2.376z'
              />
            </svg>
          </button>
          <div className='font-body-1 w-[40%] text-center font-bold'>
            {numPeople} {numPeople === 1 ? 'person' : 'people'}
          </div>
          <button
            className='group flex h-[1.75rem] w-[2.75rem] items-center justify-center md:w-14'
            type='button'
            onClick={handlePlus}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='10' height='11'>
              <path
                className='group-active:fill-beaver/50'
                fill='#9E7F66'
                d='M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z'
              />
            </svg>
          </button>
        </div>
        <button
          className='btn-light w-full bg-cod-gray px-8 text-white hover:bg-white hover:text-cod-gray'
          type='submit'
        >
          Make Reservation
        </button>
      </form>
    </main>
  );
};

export default Main;
