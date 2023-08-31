interface SocialTypeDTO {
  svg: string;
  url: string;
}

const statusMap = {
  twitter:   {svg: "/socials/twitter.svg",   url: "https://twitter.com/"},
  discord:   {svg: "/socials/discord.svg",   url: "https://discord.gg/"},
  twitch:    {svg: "/socials/twitch.svg",    url: "https://www.twitch.tv/"},
  youtube:   {svg: "/socials/youtube.svg",   url: "https://www.youtube.com/@"},
  github:    {svg: "/socials/github.svg",    url: "https://github.com/"},
  instagram: {svg: "/socials/instagram.svg", url: "https://www.instagram.com/"},
  linkedin:  {svg: "/socials/linkedin.svg",  url: "https://www.linkedin.com/in/"},
  website:   {svg: "/socials/default.svg",   url: ""}
} satisfies Record<string, SocialTypeDTO>;

export const mappedStatusMap: Record<
  keyof typeof statusMap | (string & {}),
  SocialTypeDTO
> = statusMap;

export const defaultSocialIcon = {svg: "/socials/default.svg", url: ""};
