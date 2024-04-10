'use client'

import { useSelectedInfo } from "@/hooks/useSelectedInfo";
import Chat from "./maincontent/Chat";
import Info from "./maincontent/Info";

export function MainContent() {
  const { selected:selectedOption } = useSelectedInfo(); 
  return (
    <div className="w-3/4h-full">
      {selectedOption.type === 'Chat' ? <Chat /> : <Info />}
    </div>
  );
}
