import { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../lib/hooks/useAuth";
import { APP_TITLE } from "../../constants/appTitle";
import { useLoginUserMutation as useLogin } from "../../store/userSlice";
import { PulseLoader } from "react-spinners";

export const Login = () => {
	const [errorLoginMessage, setErrorLoginMessage] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();
	const [loginUser, { isLoading }] = useLogin();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setErrorLoginMessage("");

		const res = await loginUser({
			username,
			password,
		});

		if (res.error) {
			if ("data" in res.error) {
				setErrorLoginMessage(res.error.data.message);
			}
		} else if (res.data) {
			setErrorLoginMessage("");
			login(res.data.accessToken);
		}
	};

	return (
		<section className={`${styles.contentWrapper}`}>
			<header className={styles.header}>
				<div className={`container ${styles.logo}`}>{APP_TITLE}</div>
			</header>
			<div className='container'>
				<h1 className={styles.title}>Sign in</h1>

				<div className={styles.signInWrapper}>
					<p className={styles.errorLoginText}>
						{errorLoginMessage === "Invalid credentials" &&
							"Incorrect login or password"}
					</p>
					<form
						onSubmit={handleSubmit}
						className={styles.formAuth}>
						<label htmlFor='username'>
							<input
								type='text'
								id='username'
								autoComplete='off'
								placeholder='Login'
								required
								min='2'
								max='20'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className={styles.formInput}
							/>
						</label>

						<label htmlFor='password'>
							<input
								type='password'
								id='password'
								autoComplete='off'
								placeholder='Password'
								required
								min='3'
								max='30'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={styles.formInput}
							/>
						</label>

						<button
							type='submit'
							disabled={isLoading}
							className={`${styles.btnSubmit} buttonLink`}>
							{!isLoading ? (
								"Sign in"
							) : (
								<PulseLoader
									color='#ffffff'
									aria-label='Loading Spinner'
								/>
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
