<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit'
  import fetchPosts from '$lib/assets/js/utils/fetchPosts'

	export const load = async ({ params }): Promise<LoadOutput> => {
    const { category } = params

		const posts  = await fetchPosts({ category })

		return {
			props: { 
        posts,
        category
      }
		}
	}
</script>

<script lang="ts">
  import type Post from '$lib/types/post'

  import Main from '$lib/components/Main.svelte'
  import PostList from '$lib/components/posts/PostList.svelte'

  export let posts: Post[]
  export let category: string
</script>


<svelte:head>
  <title>Blog | Category: {category}</title>
  <meta property="og:image" content="https://rickyjanuari.com/images/site-image.png" />
	<meta name="twitter:image" content="https://rickyjanuari.com/images/site-image.png"/>
</svelte:head>


<Main>
  <div class="compressed-content double-wide">
    <h1 class="h2">Category: <b>{ category }</b></h1>
    
    <PostList {posts} />  
  </div>
</Main>


<style lang="scss">
  h1.h2 {
    margin: 0 0 var(--wholeNote);
  }
</style>