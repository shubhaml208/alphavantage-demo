import { useEffect, useState } from "react";
import Loader from "../common/loader/Loader";
import axios from "axios";
import { endpoint } from "../../lib/endpoints";
import NoData from "../common/noData/NoData";
import NewsCard from "../common/newsCard/NewsCard";

export default function NewsFeed() {
  const [loading, setLoading] = useState(true);

  const [newsData, setNewsData]: [any, any] = useState(null);

  useEffect(() => {
    axios
      .get(endpoint.newsFeed)
      .then((data) => {
        setNewsData(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("err", err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loader />
  ) : newsData ? (
    <div className="w-full h-full overflow-scroll scrollBox flex justify-center">
      <div className="max-w-[800px] w-1/2 h-max flex flex-col gap-4 md:w-full">
        {newsData.feed.map((item: any, index: number) => (
          <NewsCard key={index} cardData={item} />
        ))}
      </div>
    </div>
  ) : (
    <NoData />
  );
}
