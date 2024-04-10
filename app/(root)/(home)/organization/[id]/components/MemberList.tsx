import { Separator } from "@/components/ui/separator";

export function MemberList() {
  const members = ['Alice', 'Bob', 'Charlie']; // Reemplaza esto con los datos reales

  return (
    <div className="h-1/2 overflow-auto bg-teal-100 text-black border-black border-2 rounded-md">
      <h2 className="text-xl font-bold p-2 m-2 font-mono">Miembros</h2>
            <Separator />
      <ul className="m-2 p-2">
        {members.map((member, index) => (
          <li key={index}>{member}  -  Rol</li>
        ))}
      </ul>
    </div>
  );
}