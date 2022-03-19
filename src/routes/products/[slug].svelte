<script context="module">
    export const load = async ({ params, fetch }) => {
        const slug = params.slug
        const res = await fetch(`/api/products/${slug}.json`)
        const product = await res.json();

        return {
            props: {
                product,
            },
        };
    };

</script>
<script>
    export let product
</script>

<h1>{@html product.title.rendered}</h1>
{#if product.image}
<img src="{product.image}" alt="">
{/if}
<p>
    {@html product.content.rendered}
</p>