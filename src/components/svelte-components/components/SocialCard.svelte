<script lang="ts">
  import type { SocialsDTO } from "../../../../api/dto";
  import { defaultSocialIcon, mappedStatusMap } from "../../../utils/socials";

  export let data: SocialsDTO;
  let hover = false;
</script>

<a 
	href={data.url} target="_blank"
>
	<button
		class="card button-w-bg w-100 flex a-center gap-m padding-m"
		style={`background-color: ${!hover ? data.color : data.hover}; transition: all .2s;`}
		on:mouseenter={() => hover = true}
		on:mouseleave={() => hover = false}
	>
		<img class="svg-icon h-100" src={mappedStatusMap[data.mode].svg || defaultSocialIcon.svg} alt={data.mode || "custom" + " social card"} />
		<h2>|</h2>
		<h2>{data.name}</h2>
	</button>
</a>

<style>
	.card {
		height:           3rem;
		border-radius:    var(--border-radius);
		padding:          var(--padding);
	}

	img {
		filter: drop-shadow(0 0 .8px var(--text-color));
	}
</style>
