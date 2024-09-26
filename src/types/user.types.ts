export type UserT = {
	username: string;
	password: string;
};

export type UserLoginResponseT = {
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

export type CurrentUserResponseT = {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
};
