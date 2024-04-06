'use client'

import MeetingTypeList from '@/components/MeetingTypeList';
import QuickNote from '@/components/QuickNote';
import Upcomingdate from '@/components/Upcomingdate';
import { useEffect, useState } from 'react';

const Home = () => {
  
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const timerID = setInterval(() => {
      const now = new Date();
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: userTimeZone,
        hour: '2-digit',
        minute: '2-digit'
      });
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: userTimeZone,
        dateStyle: 'full'
      });

      setTime(timeFormatter.format(now));
      setDate(dateFormatter.format(now));
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <section className='flex size-full flex-row gap-16 text-white '>
        <div className='h-[260px] w-[500px] rounded-[20px] bg-hero bg-cover'>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
            { <Upcomingdate type="upcoming"/> }
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl font-noraml lg:text-6xl'>{time}</h1>
              <p className='text-lg font-medium text-sky-1 lg:text2pxl'>{date}</p>
            </div>
          </div>
          <div className='h-[252px] w-[500px] bg-white bg-cover flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 rounded-bl-[20px] rounded-br-[20px] mt-[-17px]'>
            <QuickNote />
          </div>
        </div>
        <MeetingTypeList />
    </section>
  )
} 

export default Home; 