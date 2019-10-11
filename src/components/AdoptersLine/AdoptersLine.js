import React from 'react'
import PetfulApiService from '../../services/petful-api'
import './AdoptersLine.css'

export default class AdoptersLine extends React.Component{
  state = {users:null}

  async componentDidMount() {
    try {
      const users = await PetfulApiService.getUsers()
      this.setState({ users: users })
    } catch (err) {
      console.log('error in AdoptersLine')
    }
  }

  render(){
    return(
      <div className='AdoptersLine'>
        <h2>Adoption Line:</h2>
        {this.props.users?this.state.users.map((user, i) => {
          return <div key={i}>{i+1}-{user}</div>
        }):'No One In Line!'}
      </div>
    )
  }
}