import React from 'react'
import './App.css'

class Login extends React.Component{
	State={
		username:"",
		password:""
	}
	handelClick=()=>{
		console.log(this.state.username)
		console.log(this.state.password)
	}
	handelChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	} 
	render(){
		return(
			<div class="Login">
			<h1>Login</h1>
			<input onChange={this.handelChange} 
			 placeholder="enter name" name="username" class="username"/>
			<p><input onChange={this.handelChange} 
			 placeholder="enter password"
			 name="password" class="password"/></p>
			 <button onClick={this.handelClick} class="but">Login</button>
			</div>
	    )
	}
}

export default Login
