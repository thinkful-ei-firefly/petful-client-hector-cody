import React from 'react'
import './CreateUserForm.css'
import PetfulApiService from '../../services/petful-api'

export default class Adopt extends React.Component {

   handleSubmit = async (e) =>{
    e.preventDefault()
    // PetfulApiService
    console.log(e.target.name.value)
    const user = {
      name: e.target.name.value
    }
    try{
      // eslint-disable-next-line no-unused-vars
      const post = await PetfulApiService.newUser(user)
      console.log('post')
    } catch{
      console.log('new user post error')
    }

    // e.target.name.value = ''
  }

  render(){
    return(
      <div className='CreateUserForm'>
        <h2>Get inline to Adopt!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name='name'/>
          <input className='submit-btn' type="submit" />
        </form>
      </div>
    )
  }
}