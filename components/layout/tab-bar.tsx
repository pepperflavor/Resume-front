import Link from "next/link";

export default function TabBar() {
  return (
    <div className="h-14  w-full mx-auto grid grid-cols-4 border-neutral-600 border-t">
      <Link
        href={"/projects"}
        className="flex flex-col items-center justify-center gap-px"
      >
        <div className="flex w-10 h-7 bg-red-500">Project</div>
      </Link>
      <Link
        href={"/learn"}
        className="flex flex-col items-center justify-center gap-px"
      >
        <div className="flex w-10 h-7 bg-yellow-300">Learn</div>
      </Link>
      <Link
        href={"/greeting"}
        className="flex flex-col items-center justify-center gap-px"
      >
        <div className="flex w-10 h-7 bg-green-400">Greeting</div>
      </Link>
      <Link
        href={"/"}
        className="flex flex-col items-center justify-center gap-px"
      >
        <div className="flex w-10 h-7 bg-blue-400">Home</div>
      </Link>
    </div>
  );
}
