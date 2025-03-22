import getCarProviders from "@/libs/getCarProviders"
import VenueCatalog from "@/components/VenueCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
export default async function Venue() {
    const carProviders = await getCarProviders()
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Place</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <VenueCatalog CarProviderJson={carProviders}></VenueCatalog>
            </Suspense>
        </main>
    )
}