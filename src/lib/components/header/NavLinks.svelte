<script lang="ts">
  import NavLink from './NavLink.svelte'
  import { isMenuOpen } from '$lib/data/store'

  export let path: string
</script>


<ul class:open={$isMenuOpen}>
  <!-- TODO: this is a lot of prop drilling and style encapsulation. Is there a better way? -->
  <NavLink to="/" text="About me" {path} mobileOnly={true} />
  <NavLink to="/blog" text="Blog" {path} />
  <NavLink to="/projects" text="Projects" {path} />
  <NavLink to="/writing-and-speaking" text="Writing & Speaking" {path} />
  <NavLink to="/contact" text="Contact" {path} />
  <NavLink to="/products" text="Products"{path} />
  <NavLink to="/berita" text="Berita"{path} />
  <NavLink to="/ukm" text="Ukm"{path} />
</ul>  


<style lang="scss">
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    width: auto;
    font-size: .875rem;
    list-style-type: none;
    padding: 0;

    @media (max-width: vars.$xs) {
      list-style-type: none;
      text-align: left;
      width: 100%;
      display: none;
      margin: 0;

      &.open {
        display: block;
      }
    }
  }
</style>