export type UserT = {
	username: string;
	password: string;
};

export type UserResponseT = {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	accessToken: string;
	refreshToken: string;
};
