<script>
  // props
  export let count = 0;
  export let answer = "foo";

  // array
  let numbersList = [];

  // reactive
  $: doubled = count * 2;

  let show = false;

  function handleClick() {
    count += 1;
    // an assignment is basically a set state on svelte
    numbersList = [...numbersList, count];
  }

  $: {
    console.log(`the count is ${count}`);
    if (count > 10) count = 0;
  }

  $: {
    console.log(`this should be logged ${numbersList}`);
  }
</script>

<section>
  <button on:click={handleClick}>
    Increment
  </button>
  <p>
    Count: {count}
  </p>

  <p>
    Doubled: {doubled}
  </p>

  <p>The answer is {answer}</p>

  <button on:click={() => show = !show}>
    Toggle
  </button>
  {#if show}
    <p>On</p>
  {:else}
    <p>Off</p>
  {/if}
</section>