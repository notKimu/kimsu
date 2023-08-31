<script lang="ts">
  import { mappedStatusMap, defaultSocialIcon } from "../../../utils/socials";
  import { showSocialSaving, userPageData } from "../stores";
  import type { SocialsDTO } from "../../../../api/dto";

  const socialData = mappedStatusMap[$showSocialSaving] || defaultSocialIcon;

  let socialEntry: SocialsDTO = { mode: $showSocialSaving, name: "", url: "", color: "#000000", hover: "#000000"};
</script>

<section class="flex column gap-m">
    <h1>{socialData ? `${$showSocialSaving} link` : `Custom website`}</h1>
    
    <div class="flex column gap-m">
        <input bind:value={socialEntry.name} maxlength="20" placeholder="link name" />
        <input bind:value={socialEntry.url} maxlength="255" placeholder={socialData ? `${$showSocialSaving} username` : `website url`}/>
    </div>

    <div class="flex gap-x">
        <input bind:value={socialEntry.color} type="color" />
        <input bind:value={socialEntry.hover} type="color" />
    </div>

    <button
        on:click={() => {
            const userPageCopy = $userPageData;
            socialEntry.url = socialData.url + socialEntry.url
            userPageCopy.page.socials.push(socialEntry);
            userPageData.set(userPageCopy);
            showSocialSaving.set("");
        }}
    >
        Save!
    </button>
</section>
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
    role="dialog"
    on:click={() => showSocialSaving.set("")} 
    class="filler blur-bg-s"
/>

<style>
    section {
        position:  fixed;
        top:       50%;
        left:      50%;
        transform: translateX(-50%) translateY(-50%);
        z-index:   200;
    }

    h1:first-letter {
        text-transform: uppercase;
    }

    .filler {
        position:         fixed;
        top:              0;
        left:             0;

        height:           100dvh;
        width:            100dvw;

        background-color: rgba(0, 0, 0, 0.7);
        z-index:          150;
    }
</style>