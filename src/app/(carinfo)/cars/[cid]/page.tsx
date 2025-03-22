import Image from "next/image"
import getCarProvider from "@/libs/getCarProvider"
import Link from "next/link"

export default async function carDetailPage({params} : {params:{cid:string}}){
    
    const carDetail = await getCarProvider(params.cid)
    //mock data
    // const mockVenueRepo = new Map()
    // mockVenueRepo.set("001",{name: "The Bloom Pavilion", image: "/img/bloom.jpg"})
    // mockVenueRepo.set("002",{name: "Spark Space", image: "/img/sparkspace.jpg"})
    // mockVenueRepo.set("003",{name: "The Grand Table", image: "/img/grandtable.jpg"})
    return(
        <main className="text-center p-5">
            <h1 className = "text-lg font-medium">{carDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={carDetail.data.picture}
                alt='Venue Image'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">Name: {(carDetail.data.name)}
                    <div>Address: {(carDetail.data.address)}</div>
                    <div>District: {(carDetail.data.district)}</div>
                    <div>Postal Code: {(carDetail.data.postalcode)}</div>
                    <div>Tel: {(carDetail.data.tel)}</div>
                    <div>Daily Rate: {(carDetail.data.dailyrate)} ฿</div>
                </div>

                {/* <Link href={`/booking?id=${params.cid}&model=${carDetail.data.model}`}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm">
                    Make Booking
                </button>
                </Link> */}
            </div>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{cid:'001'}, {cid:'002'}, {cid:'003'}]
// }