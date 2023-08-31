<script lang="ts">
    import { mappedStatusMap, defaultSocialIcon } from "../../../utils/socials"; 
    export let type: string;
</script>

<img src={mappedStatusMap[type].svg || defaultSocialIcon.svg} alt={type + " social icon"} />