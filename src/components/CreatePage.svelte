<script lang="ts">
    import SocialCard from "./svelte-components/components/SocialCard.svelte"
    import AddSocial from "./svelte-components/components/SelectSocial.svelte";
    import SaveSocial from "./svelte-components/components/SaveSocial.svelte";
    import TitleBar from "./svelte-components/components/TitleBar.svelte";
    import AsyncText from "./AsyncText.svelte";
    import { showSocialSelect, showSocialSaving, userPageData } from "./svelte-components/stores";
    import { savePage } from "../../api/requests";
    import type { PageResponseDTO, UserDTO } from "../../api/dto";
    import { saveBackground } from "../../api/requests/background";

    let [loading, erroed, succsex] = [false, false, false];

    export let pageData: PageResponseDTO;
    userPageData.set(pageData);
    export let user: UserDTO;
    export let token: string;

    let backgroundImagePreview: Blob;


    function removeSocial(index: number) {
        const pageDataCopy = $userPageData;
        pageDataCopy.page.socials.splice(index, 1);
        userPageData.set(pageDataCopy);
    }


    async function handleFileUpload(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                if (typeof reader.result === "string") {
                    $userPageData.background.background = reader.result;
                    await saveBackground($userPageData.background.background, token);
                }
            };
            reader.readAsDataURL(file);
        }
    }

    const handlePageSaving = async () => {
        loading = true;
        const response = await savePage($userPageData.page, token);
        loading = false;
        if (!response) {
            erroed = true;
            return;
        }
        succsex = true;
    }
</script>

<section
    class="h-100 radius-m {$userPageData.page.theme}"
    style="--accent-color: {$userPageData.page.accent_color}; --bg-color-dark: {$userPageData.page.bg_color}; --title-color: {$userPageData.page.title_color}; --text-color: {$userPageData.page.text_color};"
>
    <div class="window h-100">
        <TitleBar type={$userPageData.page.theme} title="Kimsu page writer" />

        <div class="window-content overflow-y-scroll gap-x padding-x">
            <div class="user-info flex a-center gap-x">
                <img class="circle" src={user.avatar_uri} alt="your profile" />
                <h1>{user.username}</h1>
            </div>

            <div class="separator-line-s" />
        
            <div class="flex column gap-x">
                <div class="flex wrap gap-xx">
                    <div class="flex column gap-m">
                        <h2>Theme</h2>
                        <select
                            class="hoverme"
                            bind:value={$userPageData.page.theme}
                        >
                            <option value="std">std</option>
                            <option value="win32">win32</option>
                            <option value="macOS">macOS</option>
                            <option value="neo">neo</option>
                            <option value="cute">cute</option>
                        </select>
                    </div>
        
                    <div class="flex column gap-m">
                        <h2>Colors</h2>
                        <div class="flex gap-x">
                            <input bind:value={$userPageData.page.accent_color} class="hoverme" type="color" />
                            <input bind:value={$userPageData.page.bg_color}     class="hoverme" type="color" />
                        </div>
                    </div>

                    <div class="flex column gap-m">
                        <h2>Text colors</h2>
                        <div class="flex gap-x">
                            <input bind:value={$userPageData.page.title_color} class="hoverme" type="color" />
                            <input bind:value={$userPageData.page.text_color}  class="hoverme" type="color" />
                        </div>
                    </div>
                </div>
        
                <div class="flex column gap-m">
                    <h2>About you</h2>
                    <textarea
                        bind:value={$userPageData.page.about} 
                        placeholder="Tell others about yourself"
                        maxlength="190"
                    />
                </div>

                <div class="flex column gap-m">
                    <h2>Socials</h2>
                    {#each $userPageData.page.socials as social, i}
                        <div class="social-object overflow-hidden relative">
                            <SocialCard data={social} />
                            <button
                                on:click={() => removeSocial(i)}
                                class="remove-social"
                            >X</button>
                        </div>
                    {/each}
                    {#if $userPageData.page.socials.length < 10}
                        <button
                            class="hoverme"
                            on:click={async () => showSocialSelect.set(true)}
                        >Add Social +</button>
                    {/if}
                </div>

                <div class="flex column gap-m">
                    <h2>Background image</h2>
                    <input 
                        accept="image/png, image/jpeg, image/webp"
                        alt="Upload"
                        bind:value={backgroundImagePreview}
                        class="hoverme"
                        on:change={handleFileUpload}
                        id="files"
                        type="file"
                    />
                    <p class="tiny">max is 10mb (png and jpeg)</p>
                </div>
            </div>

            <button
                class="{loading ? "button-loading" : ""} {erroed ? "button-error" : ""} {succsex ? "button-success" : ""}"
                on:click={async () => await handlePageSaving()}
            >
                <AsyncText
                    text="Save Page -w-"
                    erroed={erroed}
                    loading={loading}
                    succsex={succsex}
                />
            </button>
        </div>
    </div>
</section>

<div class="background" style="background-image: url({$userPageData.background.background});"/>

{#if $showSocialSelect}
    <AddSocial />
{/if}
{#if $showSocialSaving}
    <SaveSocial />
{/if}

<style>
    section {
        width:   70%;
        z-index: 50;
    }

    .user-info {
        height: 4rem;
    }

    .user-info img {
        height: 100%;
    }

    .remove-social {
        opacity:          0;

        position:         absolute;
        height:           100%;
        width:            0;
        bottom:           0;
        right:            0%;

        background-color: #f68181;
        border-left:       1px solid var(--text-color);
        border-radius:     0 var(--border-radius) var(--border-radius) 0;
        padding:           0;
    }

    .social-object:hover .remove-social {
        opacity: 1;
        width:   3rem;
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
    @media screen and (max-width: 700px) {
        section {
            width: 100%;
        }

        .remove-social {
            opacity: 1;
            width:   3rem;
        }
    }
</style>