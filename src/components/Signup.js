import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

    const history = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault()

        try {

            await axios.post("http://localhost:3000/signup/", {
                name, email, password
            })
            .then(res =>{
                if (res.data === "exist"){
                    alert("User already exists")
                }
                else if (res.data === "notexist") {
                    history("/home", {state:{id:name}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)
            })

        }
        catch(e) {
            console.log(e)
        }
    }


  return (
    <div className='signup'>
        <h1>Signup</h1>
        <form action='POST'>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Digite o seu nome"></input><br />
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Digite o seu email"></input><br />
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Digite a sua senha"></input><br />
            <input type="submit" onClick={submit}></input>
        </form>

        <br />
        <p>OR</p>
        <br />
        <Link to="/">Login Page</Link>

    </div>
  )
}

export default Signup