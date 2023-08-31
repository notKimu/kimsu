export interface UserDTO {
	id:         string;
	username:   string
	avatar_uri: string;
}

export interface UpdateUserDTO {
	username:   string
	avatar_uri: string;
}