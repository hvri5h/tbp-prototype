"use client";

import ModuleHeader from "@/app/components/module-header";
import React from "react";
import ReactPlayer from "react-player";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[800px]">
      <ModuleHeader
        title="What Insurances do I need"
        brief="A building is required to provide the client with this checklist and
      other prescribed disclosure information under the Building Act 2004 before you
      sign a contract for the building work if, a. the client requests this
      checklist and the prescribed disclosure information; or b. the
      building work is going to cost $30,000 or more (including GST)."
        step={1}
        module={1}
      />
      <ReactPlayer
        width="100%"
        height={400}
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      />
    </main>
  );
}
