import { Writable, writable } from "svelte/store";
import type { PageResponseDTO } from "../../../../api/dto";

export const pageStore: Writable<PageResponseDTO> = writable({
    page: {
        theme:        "std",
        accent_color: "#ffffff",
        bg_color:     "#000000",
        title_color:  "#ffffff",
        text_color:   "#000000",
        about:        "",
        socials:      []
    },
    user: {
        id:         "",
        username:   "",
        avatar_uri: ""
    },
    background: {
        background: ""
    }
});