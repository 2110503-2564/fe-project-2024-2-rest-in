import Link from "next/link";
import Card from "./Card";

export default async function VenueCatalog({CarProviderJson}: {CarProviderJson: Promise<CarProviderJson>;}) {
  const CarProviderJsonReady = await CarProviderJson
  return (
    <>
    <div className="text-center text-xl">Explore {CarProviderJsonReady.count} models in our catalog</div>
      <div className="m-4 flex flex-row content-around, justify-around flex-wrap">
        {CarProviderJsonReady.data.map((data:CarProvider) => (
          <Link href={`/cars/${data.id}`} className="w-[250px] flex ">
            <Card
              key={data.name}
              carName={data.name}
              imgSrc={data.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
