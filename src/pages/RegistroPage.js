import { useNavigate } from "react-router-dom";
import { RegistroUser } from "../services/api";
import React from "react";
import "./Registro.css";


function Registro(){

    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const registrarUsarios = async(e) => {
        try {
            e.preventDefault();
            const datos = {
                username: username,
                password: password,
                email: email
            }
            const resp = await RegistroUser(datos);
            if (resp) {
                navigate("/login")
            } else {
                console.log("error de registro");
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }

    return <>
    <div className="Session">
        <form  className="fomularioSession" onSubmit={registrarUsarios}>
            <h1 className="hSession">Registrarse</h1>
            <div className="usuario">
                <label className="labelSession">Usuario</label>
                <input 
                    className="inputSession"
                    type="Text"
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nombre"
                />
            </div>
            <div className="email">
                <label className="labelSession">Email</label>
                <input
                    className="inputSession"
                    type="email"
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Correo electronico'
                />
            </div>
            <div className="contraseña">
                <label className="labelSession">Contraseña</label>
                <input
                    className="inputSession"
                    type="password"
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Contraseña'
                />
            </div>
            <div>
                <button className="botonSession">Acceder</button>
            </div>
        </form>
    </div>
    </>

}

export {Registro}