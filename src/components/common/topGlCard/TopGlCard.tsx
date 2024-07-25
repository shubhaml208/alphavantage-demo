export default function TopGlCard(props: any) {
  const { cardData } = props;

  const isLessThanZero =
    Number(cardData.change_percentage.replace("%", "")) < 0;

  return (
    <div className="shadow rounded-md p-2 w-[70%] md:w-full">
      <div className="flex justify-between items-center">
        <p
          className={`text-[16px] font-bold ${
            isLessThanZero ? "text-red-500" : "text-green-500"
          }`}
        >
          {cardData.ticker}
        </p>
        <p>Price: {cardData.price}</p>
      </div>
      <div className="flex justify-between">
        <p>Volume: {cardData.volume}</p>
        <p>Percentage: {cardData.change_percentage}</p>
      </div>
    </div>
  );
}
