'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Loader from './Loader';
import { useGetCalls } from '@/hooks/useGetCalls';

const Upcomingdate = ({ type }: { type: 'upcoming' }) => {
  const router = useRouter();
  const { upcomingCalls, isLoading } = useGetCalls();
  const [oldestMeetingTime, setOldestMeetingTime] = useState<string | null>(null);

  useEffect(() => {
    // Find today's upcoming meetings and then find the oldest among them
    const findOldestMeetingTime = () => {
      const today = new Date().toLocaleDateString();
      let todayMeetings = upcomingCalls ?? []; // Ensure upcomingCalls is not undefined

      todayMeetings = todayMeetings.filter(call => {
        const callDate = new Date(call.state?.startsAt || 0).toLocaleDateString();
        return callDate === today;
      });

      if (todayMeetings.length > 0) {
        let oldest = todayMeetings[0];
        todayMeetings.forEach((call) => {
          if (new Date(call.state?.startsAt || 0) < new Date(oldest.state?.startsAt || 0)) {
            oldest = call;
          }
        });
        const time = new Date(oldest.state?.startsAt || 0);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        setOldestMeetingTime(`${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`);
      } else {
        setOldestMeetingTime(null);
      }
    };

    findOldestMeetingTime();
  }, [upcomingCalls]);

  if (isLoading) return <Loader />;

  return (
    <div>
      {oldestMeetingTime ? (
        <div className="flex items-center">
          <h2 className="glassmorphism max-w-[350px] rounded py-2 px-4 text-center text-base font-normal" >Upcoming meeting at : {oldestMeetingTime}</h2>
        </div>
      ) : (
        <h2 className="glassmorphism max-w-[270px] rounded py-2 px-4 text-center text-base font-normal">No upcoming meetings today</h2>
      )}
    </div>
  );
};

export default Upcomingdate;
