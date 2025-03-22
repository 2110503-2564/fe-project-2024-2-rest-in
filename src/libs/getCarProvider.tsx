export default async function getCarProvider(vid:string){
    await new Promise(resolve => setTimeout(resolve, 300));
    const response = await fetch(`https://fe-project-2024-2-rest-in-api.vercel.app/api/v1/carProviders${vid}`)
    if(!response.ok){
        throw new Error("Failed to fetch venues")
    }
    return await response.json()
}