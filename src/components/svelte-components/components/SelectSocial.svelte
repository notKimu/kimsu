<script lang="ts">
    import SocialIcon from "./SocialIcon.svelte";
    import socialOptions from "../../../utils/socials/socials.json";
    import { showSocialSelect, showSocialSaving } from "../stores";
</script>

<section class="flex column gap-m">
    <h1>Add a social card</h1>
    <div class="flex column a-center gap-m">
        <div class="flex wrap gap-s">
            {#each socialOptions as option}
                <button
                    class="social-type radius-s"
                    on:click={() => {
                        showSocialSelect.set(false);
                        showSocialSaving.set(option.type);
                    }}
                >
                    <SocialIcon type={option.type} />
                </button>
            {/each}
        </div>

        <h2>--- or ---</h2>

        <button
            class="custom-url w-100"
            on:click={() => {
                showSocialSelect.set(false);
                showSocialSaving.set("website");
            }}
        >
            <h3>Custom URL</h3>
        </button>
    </div>
</section>
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
    role="dialog"
    on:click={() => showSocialSelect.set(false)} 
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

    .social-type {
        height:           2.5rem;
        width:            2.5rem;

        background-color: var(--select-color);
        border:           none;
        padding:          .35rem;
    }

    .custom-url {
        background-color: var(--select-color);
        border:           none;
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