<script>
    import Ball from "../lib/ball.svelte"
    export let screenSize = {x: 0, y: 0};


    function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

</script>

{#each Array(10) as i}
    <Ball initValue={{ x: getRandomInt(0, screenSize.x), y:  getRandomInt(0, screenSize.y)}}/>
{/each}