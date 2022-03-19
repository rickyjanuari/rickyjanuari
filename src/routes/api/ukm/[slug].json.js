import { BASE_URL, UKM_API_URL } from "$lib/variables";

export const get = async(request) => {
    const slug = request.params.slug;
    const res = await fetch(`${BASE_URL}${UKM_API_URL}?slug=${slug}&_embed`);
    const ukms = await res.json();
    const ukm = ukms[0];
    ukm.image = ukm._embedded["wp:featuredmedia"][0].source_url;

    return {
        status: 200,
        body: ukm,
    };
};