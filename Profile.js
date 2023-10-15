import {useState} from 'react'
function Profile() 
{
    // const [loggedIn, setLoggedIn] = useState(true)
    const [loggedIn, setLoggedIn] = useState(true)
    if (loggedIn) {
        return ( 
            <div>
                <h1>Hello Raul</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Hello User</h1>
            </div>
        )

    }

}

export default Profile;