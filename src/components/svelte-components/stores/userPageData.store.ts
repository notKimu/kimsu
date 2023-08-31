import { Writable, writable } from "svelte/store";
import type { PageResponseDTO } from "../../../../api/dto";

export const userPageData: Writable<PageResponseDTO> = writable();