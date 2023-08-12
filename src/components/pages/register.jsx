import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import httppanel from "../../network/htpp-panel";
const REGISTER_URL = '/auth/registration';

const Register = () => {
    const { setAuth } = useAuth();
   

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [userName, setUser] = useState('');
    const [password, setPasword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [userName, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await httppanel.post(REGISTER_URL,
                JSON.stringify({ userName, password })
                
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.token;
            const roles = response?.data?.userRole;
            const token=response?.data?.token;
            setAuth({ userName, password, roles, accessToken });
            const authData={
                userName,
                roles
            }
            localStorage.setItem("auth",JSON.stringify(authData));
            localStorage.setItem("token",token)


            setUser('');
            setPasword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section className='login_section'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className='login_title'>Log in</h1>
            <form onSubmit={handleSubmit} className='login_form'>
                <label htmlFor="username"  className='login_lable'>User name:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={userName}
                    required
                    className='login_input'
                />

                <label htmlFor="password" className='login_lable'>Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPasword(e.target.value)}
                    value={password}
                    required
                    className='login_input'
                />
                <button className='login_btn' type='submit'>Sign In</button>
            </form>
            
        </section>

    )
}

export default Register;