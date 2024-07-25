import Information from "../information/Information";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <h1 className="p-2 text-center text-[18px] tracking-[2rem] font-bold shadow-md md:tracking-[1rem]">
        ALPHA INTELLIGENCE
      </h1>
      <Information />
    </main>
  );
}
