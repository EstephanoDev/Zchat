'use client'

import { Separator } from "@/components/ui/separator";
import { Selected } from "@/hooks/useSelectedInfo";
import Link from "next/link";

export function PastMeetingsList({onRoomClicked}: {onRoomClicked: (type: Selected) => void}){
    const rooms : Selected[]= [
        {
            "type": 'Chat',
            "name": "Discusiones",
        },
        {
            "type": "Info",
            "name": "Reglas del grupo",
        },
        {
            "type": "Chat",
            "name": "Chat general",
        },
        {
            "type": "Info",
            "name": "Info de Reuniones Pasadas",
        },
    ]

  return (
    <div className="h-1/2 overflow-auto rounded-md bg-teal-200 text-black border-black border-2">
    <h2 className="text-xl font-mono font-bold m-2 p-2">Chats/Info</h2>
            <Separator />
    <ul >
      {rooms.map((meeting, index) => (
      <Link key={index} href={`/organization/1/${meeting.type}`}>
        <li onClick={() => onRoomClicked(meeting)} className="m-2 p-2 hover:bg-teal-300 cursor-pointer">{meeting.name}</li>
      </Link>
      ))}
    </ul>
  </div>
  );
}