'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[160px] min-h-[160px] rounded-[40px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-11 rounded-[15px]">
        <Image src={img} alt="meeting" width={23} height={23} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-noraml tracking-normal">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
