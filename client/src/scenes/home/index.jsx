import { useState } from "react";

import axios from 'axios';

import Button from '@mui/material/Button';

const Home = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = async () => {
        setIsProcessing(true)

		try {
            // const baseURL = window.location.origin
            // const response = await axios.get(`/auth/login`, { withCredentials: true })
			const response = await axios.get('http://localhost:5000/auth/login', { withCredentials: true })

            if (response.status === 200) {
                const { redirectURL } = response.data
                window.location = redirectURL
                setIsProcessing(false)
            } else {
                setErrorMessage("An unexpected error occurred. Try again.")
                setIsProcessing(false)
            }

		} catch (error) {
            setErrorMessage("An unexpected error occurred. Try again.")
            setIsProcessing(false)
		}
	}


    return (
        <div className="test" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", padding: "15rem" }}>

            <div className="login-container">

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "5rem" }}>

                    <h1 style={{ marginBottom: "10px" }}>
                        Vibeify
                    </h1>

                    <h4>
                        Get a vibe check on your Spotify Usage.
                    </h4>
                    
                    <div style={{ padding: "2rem" }}>
                        <Button variant="contained" color="success" onClick={handleLogin} disabled={isProcessing} style={{ fontFamily: 'inter', fontWeight: 'bold' }}>
                            Login to Spotify
                        </Button>
                    </div>

                    {
                        (errorMessage !== '') ? 
                        <small className="p-error" style={{ display: "block", color: "red" }} >{errorMessage}</small> 
                        : <></>
                    }

                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "auto", marginBottom: "20px"}}>
                    <p>Powered by <a href="https://developer.spotify.com/documentation/web-api" rel="noreferrer" style={{ color: "green" }}>Spotify's Web API</a>.</p>
                    <p >Built by Lukar. <a href="https://github.com/lukarh/spotiinsights" rel="noreferrer" style={{ color: "green" }}>An Open Source</a> React.js & Node.js Application.</p> 
                    <p>This web application is not endorsed by with or promoted by Spotify.</p>
                    {/* style={{ color: "#9EE6CF" }} */}
                </div>

            </div>

        </div>
    )
}

export default Home;