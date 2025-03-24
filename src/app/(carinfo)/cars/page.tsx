"use client"
import getCarProviders from "@/libs/getCarProviders"
import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { useSearchParams } from "next/navigation";
import Filter from "@/components/Filter"
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

    if(minprice != "" && minprice != null){
        url += `minprice=${minprice}&`;
    }
    if(maxprice != "" && maxprice != null){
        url += `maxprice=${maxprice}&`;
    }
    if(minseat != "" && minseat != null){
        url += `minseat=${minseat}&`;
    }
    if(maxseat != "" && maxseat != null){
        url += `maxseat=${maxseat}&`;
    }  
    if(relevance != "" && relevance != null){
        url += `relevance=${relevance}&`;
    }
    if(province != "" && province != null){
        url += `province=${province}&`;
    }  
    if(toplike != "" && toplike != null){
        url += `toplike=${toplike}&`;
    }
    if(seat != "" && seat != null){
        url += `seat=${seat}&`;
    }
    if(page != "" && page != null){
        url += `page=${page}&`;
    }
    if(limit != "" && limit != null){
        url += `limit=${limit}&`;
    }
    if(price != "" && price != null){
        url += `price=${price}&`;
    }
    const carProviders = await getCarProviders(url);

    
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Place</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <CarCatalog CarProviderJson={carProviders}></CarCatalog>
            </Suspense>
            <Filter></Filter>
        </main>
    )
}