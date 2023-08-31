import type { UserDTO } from "./users.dto";

export interface PageDTO {
    theme:           string;
    bg_color:        string;
    accent_color:    string;
    title_color:     string;
    text_color:      string;
    about:           string;
    socials:         SocialsDTO[];
}

export interface SocialsDTO {
    mode:  string;
    name:  string;
    url:   string;
    color: string;
    hover: string;
}

export interface BackgroundDTO {
    background: string;
}

export interface PageResponseDTO {
    page:       PageDTO;
    background: BackgroundDTO;
    user:       UserDTO;
}