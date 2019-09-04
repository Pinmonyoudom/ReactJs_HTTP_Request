import React, { Component } from 'react'
import axios from 'axios';
// import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        axios.post('/api/login',this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)            
            })
    }
    
    render() {
        const {email, password} = this.state
        return (       
            <div style={{marginTop:"20px"}}>
                <form onSubmit={this.submitHandler}>
                    <div style={{marginBottom:"20px"}}><input 
                        type="email" 
                        name="email"
                        placeholder="enter email"
                        value={email} 
                        onChange={this.changeHandler}/>                    
                    </div>
                    <div><input 
                        type="password" 
                        name="password"
                        placeholder="enter password"
                        value={password}
                        onChange={this.changeHandler}/>
                    </div> 
                    <button type="submit" style={{marginTop:"20px"}}>Login</button> 
                </form> 
            </div>
        );
    }
}

export default PostForm;







