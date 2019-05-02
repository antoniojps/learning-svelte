<script>
  export let cats = [];
</script>

{#each cats as {name, img: src}, i}
<div>
	<h5>{i + 1}. {name}</h5>
	<img {src} />
</div>
{/each}