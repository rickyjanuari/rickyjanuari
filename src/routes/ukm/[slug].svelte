<script context="module">
    export const load = async ({ params, fetch }) => {
        const slug = params.slug
        const res = await fetch(`/api/ukm/${slug}.json`)
        const ukm = await res.json();

        return {
            props: {
                ukm,
            },
        };
    };

</script>
<script>
    export let ukm
</script>

<h1>{@html ukm.title.rendered}</h1>
{#if ukm.image}
<img src="{ukm.image}" alt="">
{/if}
<p>
    {@html ukm.content.rendered}
</p>