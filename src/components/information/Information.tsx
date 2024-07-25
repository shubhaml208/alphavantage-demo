import { useState } from "react";
import NewsFeed from "../newsFeed/NewsFeed";
import TopGl from "../topGl/TopGl";

export default function Information() {
  const [selectTab, setSelectedTab] = useState("news");

  return (
    <section className="flex-1 flex flex-col gap-2 p-4 overflow-hidden">
      {/* tabs */}
      <div className="self-center flex rounded-lg shadow-md text-gray-600 md:w-full">
        {/* bg-red-500 rounded-l-lg */}
        <button
          type="button"
          onClick={() => setSelectedTab("news")}
          className={`p-3 px-4 font-semibold text-[15px] select-none md:p-1 md:py-2 md:flex-1 ${
            selectTab === "news" ? "bg-blue-300 rounded-l-lg text-black" : ""
          }`}
        >
          News & Sentiments
        </button>
        <button
          type="button"
          onClick={() => setSelectedTab("topGl")}
          className={`p-3 px-4 font-semibold text-[15px] select-none md:p-1 md:py-2 md:flex-1 ${
            selectTab === "topGl" ? "bg-blue-300 rounded-r-lg text-black" : ""
          }`}
        >
          Top Gainers & Losers
        </button>
      </div>

      {selectTab === "news" ? <NewsFeed /> : <TopGl />}
    </section>
  );
}
