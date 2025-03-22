import CardPanel from "@/components/CardPanel"
import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
export default async function Venue() {
    const venues = await getVenues()
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Place</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <VenueCatalog venuesJson={venues}></VenueCatalog>
            </Suspense>
        </main>
    )
}