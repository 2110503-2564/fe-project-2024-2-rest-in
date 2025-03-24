import getCarProviders from "@/libs/getCarProviders"
import CarCatalog from "@/components/VenueCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import Filter from "@/components/Filter"
export default async function Venue() {
    const carProviders = await getCarProviders()
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