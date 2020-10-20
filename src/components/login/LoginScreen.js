import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {


    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        // Este es para redireccionar history.push('/marvel')
        // este es para borrar el historial de atras

        const laspath = localStorage.getItem('ruteSave')|| '/';



        const newData = {
            name: 'Felipe'
        }

        const action = {
            type: types.login,
            payload: newData
        }

        dispatch(action);

        history.replace(laspath);






    }

    return (
        <div className="container mt-5">
            <h1>Login </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
