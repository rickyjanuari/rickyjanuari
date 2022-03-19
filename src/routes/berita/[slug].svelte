<script context="module">
    export const load = async ({ params, fetch }) => {
        const slug = params.slug
        const res = await fetch(`/api/berita/${slug}.json`)
        const post = await res.json();

        return {
            props: {
                post,
            },
        };
    };

</script>
<script>
    export let post
</script>

<h1>{@html post.title.rendered}</h1>
{#if post.image}
<img src="{post.image}" alt="">
{/if}
<p>
    {@html post.excerpt.rendered}
</p>