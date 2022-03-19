<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("/api/berita/berita.json")
        const posts = await res.json();

        return {
            props: {
                posts,
            },
        };
    };
</script>
<script>
    export let posts
</script>

{#each posts as post}
    <h2>{@html post.title.rendered}</h2>
    <img src="{post.image}" alt="">
    <p>{@html post.excerpt.rendered}</p>
    <a href="{`/berita/${post.slug}`}">Readmore</a>
{/each}