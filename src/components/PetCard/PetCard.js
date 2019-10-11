import React from 'react'
import './PetCard.css'

export default class PetCard extends React.Component {
  // state = {type: null, petData: null}

  // componentDidMount(){
  //   this.setState({type:this.props.type})
  //   this.setState({datathis.props.petData.name)
  // }

  render() {
    // console.log(this.props.petData.name)
    if (this.props.petData) {
      return (
        <div className="PetCard">
          <h2>{this.props.petData.type ? this.props.petData.type : 'Type?'}</h2>
          <img
            alt={this.props.type ? this.props.imageDescription : 'Type?'}
            src={this.props.petData ? this.props.petData.imageURL : ''}
          />
          <section>
            <h3>{this.props.petData ? this.props.petData.name : 'No Name'}</h3>
            <h4>Sex: {this.props.petData.sex}</h4>
            <h4>Age: {this.props.petData.age}</h4>
            <h4>Breed: {this.props.petData.breed}</h4>
            <article>
              {this.props.petData.story}
            </article>

          </section>
        </div>
      )
    } else {
      return (
        <div className="PetCard">
          <p>No Data</p>
        </div>
      )
    }
  }
}
