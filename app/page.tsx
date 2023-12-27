import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div className="h-10 flex-1 bg-red-500"></div>
      <div className="h-10 flex-1 bg-green-500"></div>
      <div className="h-10 flex-1 bg-blue-500"></div>
    </div>
  );
}