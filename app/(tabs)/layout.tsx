import TabBar from "@/components/layout/tab-bar";

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <TabBar></TabBar>
    </div>
  );
}

/*
      <div className="flex bg-red-500">Project</div>
      <div className="flex bg-yellow-300">I Learn</div>
      <div className="flex bg-green-400">Greeting</div>
      <div className="flex bg-blue-400">이건 일단 보류</div>
*/
