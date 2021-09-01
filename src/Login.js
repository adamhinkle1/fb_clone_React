import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'
import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'
function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,  
            })
        }) 
        .catch((error)=> alert(error.message)) 
    }
    return (   
        <div className='login'>
            <div className="login_logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png'
                    alt=""
                />
                <img src="https://www.logo.wine/logo/Facebook"
                    alt="" 
                />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
