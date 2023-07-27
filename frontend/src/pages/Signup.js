import './css/LogIn.css'
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Home = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {account, setAccount} = props


    const handleSubmit = async (e) => {
        e.preventDefault()

        const accountDetails = {email, password}

        const response = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            body: JSON.stringify(accountDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            await setAccount(json)
            console.log(json, account)
            setEmail('')
            setPassword('')
            setError('')
        }
    }

    function handleProvera() {

        return(
            console.log(account)
        )
    }


    return(
        <div className="login">
            <Navbar />

            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Log in</h1>
                
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
            </form>

        </div>
    )
}

export default Home;