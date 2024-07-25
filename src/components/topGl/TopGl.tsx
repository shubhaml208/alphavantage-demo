import { useEffect, useState } from "react";
import Loader from "../common/loader/Loader";
import axios from "axios";
import { endpoint } from "../../lib/endpoints";
import NoData from "../common/noData/NoData";
import TopGlCard from "../common/topGlCard/TopGlCard";

export default function TopGl() {
  const [loading, setLoading] = useState(true);

  const [topGlData, setTopGlData]: [any, any] = useState(null);

  const [selectedTab, setSelectedTab] = useState("topGainers");

  useEffect(() => {
    axios
      .get(endpoint.topGl)
      .then((data) => {
        setTopGlData(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("err", err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loader />
  ) : topGlData ? (
    <div className="relative w-full h-full overflow-scroll scrollBox flex justify-center">
      <div className="max-w-[800px] w-1/2 h-max flex flex-col gap-4 md:w-full">
        {/* tabs */}
        <div className="sticky top-0 w-full flex justify-center bg-white">
          {" "}
          <div className="self-center flex rounded-lg shadow-md text-gray-600 md:w-full">
            {/* bg-red-500 rounded-l-lg */}
            <button
              type="button"
              onClick={() => setSelectedTab("topGainers")}
              className={`p-2 px-4 font-semibold text-[15px] select-none md:p-1 md:flex-1 md:text-[13px] ${
                selectedTab === "topGainers"
                  ? "bg-blue-300 rounded-l-lg text-black"
                  : ""
              }`}
            >
              Top Gainers
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab("topLosers")}
              className={`p-2 px-4 font-semibold text-[15px] select-none md:p-1 md:flex-1 md:text-[13px] ${
                selectedTab === "topLosers" ? "bg-blue-300 text-black" : ""
              }`}
            >
              Top Losers
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab("activelyTraded")}
              className={`p-2 px-4 font-semibold text-[15px] select-none md:p-1 md:flex-1 md:text-[13px] ${
                selectedTab === "activelyTraded"
                  ? "bg-blue-300 rounded-r-lg text-black"
                  : ""
              }`}
            >
              Actively traded
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 items-center">
          {selectedTab === "topGainers" &&
            topGlData.top_gainers.map((item: any, index: number) => (
              <TopGlCard key={index + 1} cardData={item} />
            ))}
          {selectedTab === "topLosers" &&
            topGlData.top_losers.map((item: any, index: number) => (
              <TopGlCard key={index + 1} cardData={item} />
            ))}
          {selectedTab === "activelyTraded" &&
            topGlData.most_actively_traded.map((item: any, index: number) => (
              <TopGlCard key={index + 1} cardData={item} />
            ))}
        </div>
      </div>
    </div>
  ) : (
    <NoData />
  );
}
