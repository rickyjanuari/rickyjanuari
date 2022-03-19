<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("/api/ukm/ukm.json")
        const ukms = await res.json();

        return {
            props: {
                ukms,
            },
        };
    };
</script>
<script>
    export let ukms
</script>

{#each ukms as ukm}
    <h2>{@html ukm.title.rendered}</h2>
    {#if ukm.content.rendered }
    <p>{@html ukm.content.rendered}</p>
    {/if}
    <a href="{`/ukm/${ukm.slug}`}">Readmore</a>
{/each}