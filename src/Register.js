import React from 'react'
import './App.css'

class Register extends React.Component{
	State={
		email:"",
		name:"",
		username:"",
		password:""
	}
	handleClick=()=>{
		console.log(this.state.email)
		console.log(this.state.name)
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
			<div class="Register">
			<h1>Registration</h1>
				<p><input 
				   name="email" onChange={this.handleChange} 
				   placeholder="enter emailornumber" class="email"/></p>
				<p><input 
				   name="name" onChange={this.handleChange} 
				   placeholder="enter name" class="name"/></p>
				<p><input 
				   name="username" onChange={this.handleChange} 
				   placeholder="create username" class="username"/></p>
				<input 
				   name="password" onChange={this.handleChange} 
				   placeholder="create password" class="password"/>
				<p><button onClick={this.handleClick} class="but">Submit</button></p>
			</div>
			)
	}
}

export default Register