"use client";
export default function Sidebar() {
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>User Part</div>
      <div className="grow">Menu</div>
      <div>Settings / Notifications</div>
    </div>
  );
}
