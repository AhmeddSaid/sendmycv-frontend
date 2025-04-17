const passwordRegex: RegExp =
	/^(?!.*(.)\1{2,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};:,.<>/?]{8,}$/;

export default passwordRegex;
