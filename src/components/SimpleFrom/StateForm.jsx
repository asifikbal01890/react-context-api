import React, { useState } from 'react';

const StateForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')



const handleSubmit = e => {
    e.preventDefault()
console.log(name);
console.log(email);
console.log(pass);


}

const handleEmail = (e) =>{
    setEmail(e.target.value)
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className='border-2 text-xl p-2 w-96' type="text" name="name" />
                <br />
                <br />
                <input 
                onChange={handleEmail}
                className='border-2 text-xl p-2 w-96' type="email" name="email"/>
                <br />
                <br />
                <input onChange={(event)=> setPass(event.target.value)} className='border-2 text-xl p-2 w-96' type="password" name="password"/>
                <br />
                <br />
                <input className='border-2 text-xl p-2 w-96 bg-green-500' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm;