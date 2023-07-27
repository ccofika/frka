import './css/LogIn.css'
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Home = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [account, setAccount] = useState('')
    const [success, setSuccess] = useState('')
    
    const credits = 0


    const handleSubmit = async (e) => {
        e.preventDefault()

        const account = {username, email, password, credits}

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify(account),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setUsername('')
            setEmail('')
            setPassword('')
            setError('')
            await setAccount(json)
            console.log(json, account)
            setSuccess('Successfully created account. Go to signup')
        }
    }


    return(
        <div className="login">
            <Navbar />

            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="">Username</label>
                <input 
                 type="text"
                 onChange={(e) => setUsername(e.target.value)}
                 value={username}
                />
                
                <label htmlFor="">Email</label>
                <input 
                 type="text"
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}
                />
                
                <label htmlFor="">Password</label>
                <input 
                 type="password"
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}
                />
                

                <button>Login</button>
                {error && <h1>{error}</h1>}
                {success && <h1>{success}</h1>}
            </form>
        </div>
    )
}

export default Home;