"use client"
import getCarProviders from "@/libs/getCarProviders"
import VenueCatalog from "@/components/VenueCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { useSearchParams } from "next/navigation";
export default async function Venue() {
    let searchParams = useSearchParams();
    let minprice = searchParams.get('minprice');
    let maxprice = searchParams.get('maxprice');
    let minseat = searchParams.get('minseat');
    let maxseat = searchParams.get('maxseat');
    let relevance = searchParams.get('relevance');
    let province = searchParams.get('province');
    let toplike = searchParams.get('toplike');
    let seat = searchParams.get('seat');
    let page = searchParams.get('page');
    let limit = searchParams.get('limit');
    let price = searchParams.get('price');

    let url = "";

    if(minprice != ""){
        url += `minprice=${minprice}&`;
    }
    if(maxprice != ""){
        url += `maxprice=${maxprice}&`;
    }
    if(minseat != ""){
        url += `minseat=${minseat}&`;
    }
    if(maxseat != ""){
        url += `maxseat=${maxseat}&`;
    }  
    if(relevance != ""){
        url += `relevance=${relevance}&`;
    }
    if(province != ""){
        url += `province=${province}&`;
    }  
    if(toplike != ""){
        url += `toplike=${toplike}&`;
    }
    if(seat != ""){
        url += `seat=${seat}&`;
    }
    if(page != ""){
        url += `page=${page}&`;
    }
    if(limit != ""){
        url += `limit=${limit}&`;
    }
    if(price != ""){
        url += `price=${price}&`;
    }
    const carProviders = await getCarProviders(url);

    
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Place</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <VenueCatalog CarProviderJson={carProviders}></VenueCatalog>
            </Suspense>
        </main>
    )
}