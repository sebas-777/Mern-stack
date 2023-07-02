import React, { Component } from 'react'
import axios from 'axios'


export default class CreateUsers extends Component {
  state ={
    users:[],
    username:''
  }

 async componentDidMount(){ 
  try {
    const res= await axios.get('http://localhost:4000/api/users');
    this.setState({users:res.data})
    console.log(this.state.users)
  } catch (error) {
    console.log(error)
  }
  }
  
  onChangeUsername = (e) =>{
    this.setState({
      username:e.target.value
    })
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-4'>
          <div className="card card-body"> 
          <h3> Create New User</h3>
            <form>
              <div className="form-group">
                <input 
                type="text" 
                className='form-control' 
                onChange={this.onChangeUsername}
                />
              </div>
            </form>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="col-med-8">
            <ul className='list-group'>
                {
                  this.state.users.map(user => (
                  <li className='list-group-item list-group-item-action' key={user._id}>
                    {user.username}
                  </li>)
                  )
                }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
