'use client';
import { MemberList } from '@/app/(root)/(home)/organization/[id]/components/MemberList';
import { PastMeetingsList } from '@/app/(root)/(home)/organization/[id]/components/PastMeetingList';
import { Selected, useSelectedInfo } from '@/hooks/useSelectedInfo';

const Sidebar = () => {
  const { setSelected } = useSelectedInfo()
  const onclick = (room:Selected) => {
    setSelected(room)
  }

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between bg-teal-900 p-2 pt-20 text-white max-sm:hidden lg:w-[264px] border-black border-2">
      <div className="flex flex-1 flex-col gap-6">
        <MemberList/>
        <PastMeetingsList onRoomClicked={(room) => onclick(room)}/>
      </div>
    </section>
  );
};

export default Sidebar;
