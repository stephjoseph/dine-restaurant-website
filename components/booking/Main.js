import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
  const router = useRouter();
  const formRef = useRef(null);

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

  const onSubmit = () => {
    if (errors) {
      router.reload(window.location.pathname);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.3, ease: 'easeIn', delay: 0.3 }
    );
  }, []);

  return (
    <main className='-mt-[8.563rem] flex w-full flex-col items-center pb-[5.375rem] md:-mt-[14.375rem] md:pb-[7.5rem] xl:-mt-[21.375rem] xl:pb-[6.313rem]'>
      <div className='flex w-[87.2%] flex-col items-center md:w-[70.31%] xl:relative xl:w-[77.08%] xl:items-end'>
        <form
          ref={formRef}
          className='flex w-full flex-col items-center gap-8 bg-white p-8 shadow-[0_100px_75px_-50px_rgba(56,66,85,0.5032)] md:p-12 xl:z-10 xl:w-[48.65%]'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label className='relative w-full'>
            <span className='pointer-events-none absolute opacity-0'>Name</span>
            <input
              type='text'
              className={`${
                errors.fullName
                  ? 'border-error text-error caret-error placeholder:text-error/50'
                  : 'border-[#8E8E8E] text-cod-gray caret-inherit placeholder:text-cod-gray/50'
              } placeholder:font-body-1 font-body-1 w-full border-b border-solid  px-4 pb-4  focus:outline-none`}
              placeholder='Name'
              {...register('fullName', { required: true })}
              value={reservation.name}
              onChange={(e) => {
                setReservation((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
            />

            {errors.fullName && (
              <p className='font-error absolute bottom-[-1.313rem] left-4 hidden md:block'>
                This field is required
              </p>
            )}
          </label>
          <label className='relative w-full'>
            <span className='pointer-events-none absolute opacity-0'>Name</span>
            <input
              type='email'
              className={`${
                errors.email
                  ? 'border-error text-error caret-error placeholder:text-error/50'
                  : 'border-[#8E8E8E] text-cod-gray caret-inherit placeholder:text-cod-gray/50'
              } placeholder:font-body-1 font-body-1 w-full border-b border-solid  px-4 pb-4  focus:outline-none`}
              placeholder='Email'
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              value={reservation.email}
              onChange={(e) => {
                setReservation((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />
            {errors.email && (
              <p className='font-error absolute bottom-[-1.313rem] left-4 hidden md:block'>
                {errors.email.type === 'required' && 'This field is required'}
                {errors.email.type === 'pattern' &&
                  'Please use a valid email address'}
              </p>
            )}
          </label>
          <div className='flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:gap-[3.25rem]'>
            <div
              className={`${
                errors.month || errors.day || errors.year
                  ? 'text-error'
                  : 'text-cod-gray'
              } font-body-1 relative  md:w-[23.19%]`}
            >
              Pick a date
              {(errors.month || errors.day || errors.year) && (
                <p className='font-error absolute bottom-[-0.75rem] hidden w-[120%] md:block'>
                  {(errors.month && errors.month.type === 'pattern') ||
                  (errors.day && errors.day.type === 'pattern') ||
                  (errors.year && errors.year.type === 'pattern')
                    ? 'Enter valid date'
                    : 'This field is incomplete'}
                </p>
              )}
            </div>
            <div className='flex w-full items-center justify-between md:w-[65.09%] md:gap-4'>
              <label className='relative w-[27.76%]'>
                <span className='pointer-events-none absolute opacity-0'>
                  Month
                </span>
                <input
                  type='text'
                  className={`${
                    errors.month || errors.day || errors.year
                      ? 'border-error text-error caret-error placeholder:text-error/50'
                      : 'border-[#8E8E8E] text-cod-gray caret-inherit placeholder:text-cod-gray/50'
                  } placeholder:font-body-1 font-body-1 w-full border-b border-solid  px-4 pb-4  focus:outline-none`}
                  placeholder='MM'
                  {...register('month', {
                    required: true,
                    pattern: /(^0?[1-9]$)|(^1[0-2]$)/,
                  })}
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
                  type='text'
                  className={`${
                    errors.month || errors.day || errors.year
                      ? 'border-error text-error caret-error placeholder:text-error/50'
                      : 'border-[#8E8E8E] text-cod-gray caret-inherit placeholder:text-cod-gray/50'
                  } placeholder:font-body-1 font-body-1 w-full border-b border-solid  px-4 pb-4  focus:outline-none`}
                  placeholder='DD'
                  {...register('day', {
                    required: true,
                    pattern: /^(0?[1-9]|[12][0-9]|3[01])$/,
                  })}
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
                  type='text'
                  className={`${
                    errors.month || errors.day || errors.year
                      ? 'border-error text-error caret-error placeholder:text-error/50'
                      : 'border-[#8E8E8E] text-cod-gray caret-inherit placeholder:text-cod-gray/50'
                  } placeholder:font-body-1 font-body-1 w-full border-b border-solid  px-4 pb-4  focus:outline-none`}
                  placeholder='YYYY'
                  {...register('year', {
                    required: true,
                    pattern: /^20[2-9]{2}$/gm,
                  })}
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
            <div
              className={`${
                errors.hour || errors.minute ? 'text-error' : 'text-cod-gray'
              } font-body-1 relative  md:w-[23.19%]`}
            >
              Pick a time
              {(errors.hour || errors.minute) && (
                <p className='font-error absolute bottom-[-0.75rem] hidden w-[120%] md:block'>
                  {(errors.hour && errors.hour.type === 'pattern') ||
                  (errors.minute && errors.minute.type === 'pattern')
                    ? 'Enter valid time'
                    : 'This field is incomplete'}
                </p>
              )}
            </div>
            <div className='relative flex w-full items-center justify-between md:w-[65.09%] md:gap-4'>
              <label className='relative w-[27.76%]'>
                <span className='pointer-events-none absolute opacity-0'>
                  Hour
                </span>
                <input
                  type='text'
                  className={`${
                    errors.hour || errors.minute
                      ? 'border-error text-error caret-error placeholder:text-error/50'
                      : 'border-[#8E8E8E] text-cod-gray caret-inherit placeholder:text-cod-gray/50'
                  } placeholder:font-body-1 font-body-1 w-full border-b border-solid  px-4 pb-4  focus:outline-none`}
                  placeholder='09'
                  {...register('hour', {
                    required: true,
                    pattern: /(^0?[1-9]$)|(^1[0-2]$)/,
                  })}
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
                  type='text'
                  className={`${
                    errors.hour || errors.minute
                      ? 'border-error text-error caret-error placeholder:text-error/50'
                      : 'border-[#8E8E8E] text-cod-gray caret-inherit placeholder:text-cod-gray/50'
                  } placeholder:font-body-1 font-body-1 w-full border-b border-solid  px-4 pb-4  focus:outline-none`}
                  placeholder='00'
                  {...register('minute', {
                    required: true,
                    pattern: /(^0?[0-5]$)|(^[0-5][0-9]$)/,
                  })}
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
            className='btn-light w-full bg-cod-gray px-8 text-white hover:bg-white hover:text-cod-gray active:bg-white active:text-cod-gray'
            type='submit'
          >
            Make Reservation
          </button>
        </form>
        <div className='absolute bottom-[-1.813rem] left-[44.14%] hidden xl:block'>
          <Image
            width={160}
            height={76}
            src='/images/patterns/pattern-lines.svg'
            alt=''
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
