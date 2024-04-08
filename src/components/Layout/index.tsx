import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import { MyTable } from "../DataTable";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div className="h-screen bg-[#E7EBF6]">
      <div className="flex">
        <Sidebar show={showSidebar} setter={setShowSidebar} setIsConnected={setIsConnected} />
        <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
          {/* <MyTable setter={setShowSidebar} isConnected={isConnected} /> */}
        </div>
      </div>
    </div>
  )
}
