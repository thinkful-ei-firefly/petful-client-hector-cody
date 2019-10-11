import React from 'react'
import PetfulApiService from '../../services/petful-api'
import './AdoptersLine.css'

export default class AdoptersLine extends React.Component{

  render(){
    return(
      <div className='AdoptersLine'>
        <h2>Adoption Line:</h2>
        {this.props.users?this.props.users.map((user, i) => {
          return <div key={i}>{i+1}-{user}</div>
        }):'No One In Line!'}
      </div>
    )
  }
}