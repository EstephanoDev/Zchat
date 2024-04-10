import Sidebar from "@/components/meeting/Sidebar";
import React from "react";

export default function OrgLayout(
    {children}: {children: React.ReactNode}
) {
return (<>

      <div className="flex">
            <Sidebar/>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
</>)
}