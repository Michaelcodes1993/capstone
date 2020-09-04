import React from 'react'


export default function Registration() {
    return (<div className='container' >
        <h1>Registration</h1>
        <h4>All itmes with * are a required field
     </h4>
        <form className='registration-form' onSubmit={() => alert('ThankYou For Registering With Us!!')}>
            <label className='firstname'>FirstName *</label>
            <input className='firstname-input' type='text' placeholder='FirstName' required />
            <label className='lastname'>LastName *</label>
            <input className='lastname-input' type='text' placeholder='LastName' required />
            <label className='username'>UserName *</label>
            <input className='username-input' type='text' placeholder='UserName' required />
            <label className='email'>Email *</label>
            <input className='email-input' type='text' placeholder='Email' required />
            <label className='password'>PassWord *</label>
            <input className='password-input' type='password' placeholder='PassWord' required />
            <label className='confirm-password'>Confirm PassWord *</label>
            <input className='confirm-password-input' type='password' placeholder='Confirm Password' required />
            <input className='submit' type='submit' />
        </form>
    </div>
    )
}