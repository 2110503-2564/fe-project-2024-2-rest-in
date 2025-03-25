export default async function likeCar(cid: string, token: string) {
    await new Promise(resolve => setTimeout(resolve, 300));

    const response = await fetch(`https://fe-project-2024-2-rest-in-api.vercel.app/api/v1/carProviders/${cid}/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to like the car");
    }

    return await response.json();
}
