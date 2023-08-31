<script lang="ts">
    import SocialCard from "./svelte-components/components/SocialCard.svelte"
    import TitleBar from "./svelte-components/components/TitleBar.svelte";
    import type { PageResponseDTO } from "../../api/dto";

    export let data: PageResponseDTO;
    const { background, page, user } = data;
    console.log(page)
</script>

<section
    class="{page.theme}"
    style="--accent-color: {page.accent_color}; --bg-color-dark: {page.bg_color}; --title-color: {page.title_color}; --text-color: {page.text_color};"
>
    <div class="window">
        <TitleBar type={page.theme} title="{user.username}" />

        <div class="window-content overflow-y-scroll gap-x padding-x">
            <div class="user-info flex a-center gap-x">
                <img class="circle" src={user.avatar_uri} alt="your profile" />
                <h1>{user.username}</h1>
            </div>

            <div class="separator-line-s" />

            {#if page.about}                
                <div class="flex column gap-m">
                    <h2>About me</h2>
                    <p class="user-about overflow-y-scroll">{page.about}</p>
                </div>
                <div class="separator-line-s" />
            {/if}

        
            <div class="flex column gap-x">
                <div class="flex column gap-m">
                    <h2>Socials</h2>
                    {#each page.socials as social}
                            <SocialCard data={social}  />
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<div class="background" style="background-image: url({background.background});"/>

<style>
    section {
        height:     fit-content;
        max-height: 100%;
        width:      50%;
        z-index:    50;
    }

    .window {
        height:     fit-content;
        max-height: 100%;
    }

    .user-info {
        height: 4rem;
    }

    .user-info img {
        height: 100%;
    }

    .user-about {
        max-height:  7rem;
        white-space: break-spaces;
    }

    .background {
        position:            fixed;
        height:              100vh;
        width:               100vw;

        top:                 0;
        left:                0;

        background-position: center;
        background-size:     cover;
        z-index:             40;
    }

    /**RESPONSIVE */
    @media screen and (max-width: 900px) {
        section {
            width: 70%;
        }
    }
    @media screen and (max-width: 700px) {
        section {
            width: 100%;
        }
    }
</style>