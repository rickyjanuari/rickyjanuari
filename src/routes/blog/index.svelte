<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit'

	export const load = async ({ fetch }): Promise<LoadOutput> => {
		const res = await fetch(`/api/posts.json`)
		const { posts } = await res.json()
		
		const count = await fetch(`/api/posts/count.json`)
		const { total } = await count.json()

		return {
			props: { 
				posts, 
				totalPosts: total 
			}
		}
	}
</script>

<script lang="ts">
	import type Post from '$lib/types/post'
	
	import Main from '$lib/components/Main.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import PostList from '$lib/components/posts/PostList.svelte'
	
	export let posts: Post[] = []
	export let totalPosts: number
</script>


<svelte:head>
	<title>Ricky Januari | Blog</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
	<meta property="og:image" content="https://rickyjanuari.com/images/site-image.png" />
	<meta name="twitter:image" content="https://rickyjanuari.com/images/site-image.png"/>
</svelte:head>


<Main>	
	<div class="compressed-content double-wide">
		<PostList posts={posts} />

		<Pagination currentPage={1} {totalPosts} />
	</div>
</Main>