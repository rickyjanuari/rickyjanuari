<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("/api/products/products.json")
        const products = await res.json();

        return {
            props: {
                products,
            },
        };
    };
</script>
<script>
    export let products
</script>

{#each products as product}
    <h2>{@html product.title.rendered}</h2>
    {#if product.content.rendered }
    <p>{@html product.content.rendered}</p>
    {/if}
    <a href="{`/products/${product.slug}`}">Readmore</a>
{/each}