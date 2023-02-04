<script>
	import Draw from "../lib/canvas.svelte"
	import { mouseLocation } from "../lib/store.js"
	import { onMount } from 'svelte';
	let temp = { x: 0, y: 0 };
	let amount = []
	let mouseLocationLocal;
	let screenSize

	onMount(async () => {
        screenSize = {x: window.innerWidth, y: window.innerHeight}
	});


	mouseLocation.subscribe(value =>{
		mouseLocationLocal = value
	})

	function handleMousemove(event) {
		temp.x = event.clientX
		temp.y = event.clientY
		mouseLocation.set(temp);
	}

	function Start(){ 
		amount.push(1);
		amount = amount;
	}

</script>

<div class="h-screen w-screen max-h-screen overflow-hidden bg-black " on:click={Start} on:mousemove={handleMousemove}>
	<div style="position:absolute; left:{mouseLocationLocal.x - 144}px; top:{mouseLocationLocal.y - 144}px" class="blackhole h-72 w-72 z-10"></div>	
		{#each amount as i}
			<Draw screenSize={{x: screenSize.x, y: screenSize.y}}/>
		{/each}
</div>

<style>
	.blackhole{
		background-image: url('../blackhole.png');
		background-repeat: no-repeat;
  		background-size: cover;
		-webkit-animation:spin 4s linear infinite;
    	-moz-animation:spin 4s linear infinite;
    	animation:spin 4s linear infinite;
	}


</style>

