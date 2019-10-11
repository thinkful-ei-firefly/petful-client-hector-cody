import React from 'react'
import './PetCard.css'

export default class PetCard extends React.Component{
  // state = {type: null, petData: null}

  // componentDidMount(){
  //   this.setState({type:this.props.type})
  //   this.setState({datathis.props.petData.name)
  // }

  render(){
    // console.log(this.props.petData.name)
    return (
      <div className='PetCard'>
        <h2>{this.props.type?this.props.type:'Type?'}</h2>
        <img alt={this.props.type?this.props.type:'Type?'} src={this.props.petData?this.props.petData.img:''}/>
        <section>
          <h3>{this.props.petData?this.props.petData.name:'No Name'}</h3>
        </section>
      </div>
    )
  }
  
  
}