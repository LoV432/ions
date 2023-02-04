<script>
	import { spring } from 'svelte/motion';
	import { mouseLocation } from '../lib/store.js';
	let background = 'opacity-1';
	let settle;
	let mouseLocationLocal
	let ball
	export let initValue;

	mouseLocation.subscribe((value) => {
		mouseLocationLocal = value;
	});

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	let coords = spring(
		{ x: initValue.x, y: initValue.y },
		{
			stiffness: 0.0008,
			damping: 0.001,
			precision: 0.3
		}
	);

	$: {
		settle = coords.set({ x: mouseLocationLocal.x + getRandomInt(-80,80), y: mouseLocationLocal.y + getRandomInt(-80,80)});
	}

	function changeBg() {
		background = 'opacity-0';
		//console.log(settle);
	}
</script>

{#await settle then value}
	<p class=" hidden ">{changeBg()}</p>
{/await}
<div bind:this={ball} class="ball w-5 h-5 overflow-hidden {background} absolute" style="left:{$coords.x}px; top:{$coords.y}px" />

<style>
	.ball{
		background-image: url('../matter.png');
		background-repeat: no-repeat;
  		background-size:contain;
		-webkit-animation:spin 4s linear infinite;
    	-moz-animation:spin 4s linear infinite;
    	animation:spin 4s linear infinite;
	}
</style>

