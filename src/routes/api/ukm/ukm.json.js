import { BASE_URL, UKM_API_URL } from "$lib/variables";

export const get = async() => {
    const res = await fetch(`${BASE_URL}${UKM_API_URL}?_embed`)
    const ukms = await res.json();


    return {
        status: 200,
        body: ukms,
    };
};