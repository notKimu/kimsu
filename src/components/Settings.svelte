<script lang="ts">
    import TitleBar from "./svelte-components/components/TitleBar.svelte";
    import type { UserDTO } from "../../api/dto";
    import { updateUser } from "../../api/requests";
  import AsyncText from "./AsyncText.svelte";

    export let user: UserDTO;
    delete user.id;

    let [loading, erroed, succsex] = [false, false, false];

    export let token: string;
    let newImage: string | null = null;

    async function handleFileUpload(event: any) {
        let file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    newImage = reader.result;
                    user.avatar_uri = newImage;
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUserUpdating = async () => {
        loading = true;
        const response = await updateUser(user, token);
        loading = false;
        if (!response) {
            erroed = true;
            return;
        }
        succsex = true;
    };
</script>

<div class="window">
    <TitleBar type="std" title="{user.username}.sh" />

    <div class="window-content gap-x padding-x">
        <div class="user-info flex a-center gap-x">
            <div class="user-pfp grid place-center">
                <div class="user-image-container circle" style="background-image: url({newImage ?? user.avatar_uri});" />
                <input
                    on:change={handleFileUpload}
                    class="upload-pfp" type="file"
                />
                <div class="change-pfp circle">
                    <xml class="upload-svg h-100 w-100" version="1.0" encoding="utf-8">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 8V3M18 3L16 5M18 3L20 5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </xml>
                </div>
            </div>
            <div class="flex column gap-m">
                <h2>Username</h2>
                <input class="w-100" bind:value={user.username} type="text" maxlength="31" />
            </div>
        </div>

        <button
            class="hoverme to-right {loading ? "button-loading" : ""} {erroed ? "button-error" : ""} {succsex ? "button-success" : ""}"
            on:click={async () => await handleUserUpdating()}
        >
            <AsyncText
                text="Update!"
                erroed={erroed}
                loading={loading}
                succsex={succsex}
            />
        </button>
    </div>
</div>

<style>
    .window-content {
        backdrop-filter:  blur(1px);
        background-color: #1414208c;
    }

    .user-image-container {
        height:              7rem;
        width:               7rem;

        background-position: center;
        background-size:     cover;
    }

    .user-pfp {
        cursor:   pointer;
        position: relative;
    }

    .change-pfp {
        position:         absolute;
        height:           100%;
        width:            100%;
        top:              0;
        left:             0;

        background-color: transparent;
    }
    
    .upload-svg {
        display:       grid;
        place-content: center;
        filter:        blur(5px);
        opacity:       0;
    }
    .upload-svg svg {
        height: 4rem;
        width:  4rem;
    }

    .upload-pfp {
        all:              unset;

        position:         absolute;
        height:           100%;
        width:            100%;
        top:              0;
        left:             0;

        background-color: transparent;
        border:           none;
        opacity:          0;
        z-index:          10;
    }

    .user-pfp:hover .change-pfp {
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow:       inset 0 0 2rem black;
    }
    .user-pfp:hover .upload-svg {
        filter:  blur(0);
        opacity: 1;
    }

    @media screen and (max-width: 500px) {
        .user-info {
            flex-direction: column;
        }
    }
</style>