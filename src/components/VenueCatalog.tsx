import Link from "next/link";
import Card from "./Card";

export default async function VenueCatalog({venuesJson}: {venuesJson: Promise<VenueJson>;}) {
  const venueJsonReady = await venuesJson
  return (
    <>
    <div className="text-center text-xl">Explore {venueJsonReady.count} models in our catalog</div>
      <div className="m-5 flex flex-row content-around, justify-around flex-wrap">
        {venueJsonReady.data.map((venue:VenueItem) => (
          <Link href={`/venue/${venue.id}`} className="w-1/5">
            <Card
              key={venue.name}
              venueName={venue.name}
              imgSrc={venue.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
