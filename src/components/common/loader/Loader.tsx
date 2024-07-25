import { LuLoader2 } from "react-icons/lu";

export default function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LuLoader2 className="w-20 h-20 text-blue-400 animate-spin" />
    </div>
  );
}
