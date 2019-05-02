<script>
	import Cats from "./Cats.svelte";
	export let name;
	export let src;

	const props = {
	  answer: 42
	};

	const cats = [
	  {
	    name: "Patecas",
	    img: "http://placekitten.com/200/300"
	  },
	  {
	    name: "Bro",
	    img: "http://placekitten.com/200/300"
	  },
	  {
	    name: "Garfield",
	    img: "http://placekitten.com/200/300"
	  }
	];
</script>

<Cats {cats}/>


