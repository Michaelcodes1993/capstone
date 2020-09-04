import React from "react";

export default function Login() {
	return <form className='login' onSubmit={() => alert('You Have Successfully Logged In')}>
		<label className='username'>UserName</label>
		<input className='username-input' type='text' required />
		<label className='password'>PassWord</label>
		<input className='password-input' type='password' required />
		<input className='submit' type='submit' />
	</form>
}
