import { GoCrossReference } from "react-icons/go";

export default function NewsCard(props: any) {
  const { cardData } = props;

  return (
    <div className="w-full rounded-md shadow">
      <a href={cardData.url} target="_blank" className="relative">
        <img src={cardData.banner_image} className="rounded-t-md w-full" />
        <GoCrossReference className="absolute right-4 top-4 text-gray-800" />
      </a>

      <div className="flex-1 flex flex-col gap-4  p-4">
        <h2 className="font-bold tet-[16px]">{cardData.title}</h2>
        <p>{cardData.summary}</p>
        <p>Source: {cardData.source_domain}</p>
      </div>
    </div>
  );
}
