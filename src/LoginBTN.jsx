import { useAuth0 } from '@auth0/auth0-react';

export const LoginBTN = () =>{
    const { loginWithRedirect } = useAuth0() 
    return <button className="btn-login" onClick={() => loginWithRedirect()}>Login</button>
}






