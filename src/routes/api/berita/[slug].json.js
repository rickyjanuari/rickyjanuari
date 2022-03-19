import { BASE_URL, POSTS_API_URL } from "$lib/variables";

export const get = async(request) => {
    const slug = request.params.slug;
    const res = await fetch(`${BASE_URL}${POSTS_API_URL}?slug=${slug}&_embed`);
    const posts = await res.json();
    const post = posts[0];
    post.image = post._embedded["wp:featuredmedia"][0].source_url;

    return {
        status: 200,
        body: post,
    };
};