import { useState } from 'react'
function Profile() {

    const [loggedIn, setLoggedIn] = useState(3)
    // const [loggedIn, setLoggedIn] = useState(2)
    // const [loggedIn, setLoggedIn] = useState(3)

    return (
        <div>
            {loggedIn == 1 ? <h1>Hello Raul 1</h1> : loggedIn == 2 ? <h1>Hello User 2</h1> : <h1>Hello User 3</h1>}
        </div>
    )

}
export default Profile;