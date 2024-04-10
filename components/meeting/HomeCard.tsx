'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  organization: {
    id: string;
    description: string;
  }[];
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, organization, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px]',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <ul>
            {organization.map((org) => (
              
             <li key={org.id} className="flex flex-col gap-1">
        <Link href={`/organization/${org.id}`} className="text-lg font-normal hover:bg-blue-400 p-2 rounded-md">{org.description}</Link>
</li>
            ))}
</ul>
      </div>
    </section>
  );
};

export default HomeCard;
