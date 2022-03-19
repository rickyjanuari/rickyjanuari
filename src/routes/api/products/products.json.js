import { BASE_URL, PRODUCTS_API_URL } from "$lib/variables";

export const get = async() => {
    const res = await fetch(`${BASE_URL}${PRODUCTS_API_URL}?_embed`)
    const posts = await res.json();

    return {
        status: 200,
        body: posts,
    };
};