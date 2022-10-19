import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>Welcome,{user.email}</span>}
                {user?.email ?
                    <button className="btn btn-ghost normal-case text-xl" onClick={handleSignOut}>Log out</button>
                    : <Link to='/login'>
                        <button className="btn btn-sm"><span> Log in </span></button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;