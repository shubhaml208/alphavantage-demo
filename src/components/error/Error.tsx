import { useNavigate } from "react-router-dom";
import { routes } from "../../lib/routes";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex h-screen w-screen justify-center items-center p-4">
      <div className="flex flex-col gap-4">
        <p className="text-[2rem] text-center w-max">Something went wrong</p>

        <button
          onClick={() => navigate(routes.home, { replace: true })}
          className="p-2 bg-[#3CA640] text-white w-max self-center rounded-md px-4"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}
