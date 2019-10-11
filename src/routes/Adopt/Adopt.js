import React from 'react'
import PetfulApiService from '../../services/petful-api'
import PetCard from '../../components/PetCard/PetCard'
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'
import AdoptersLine from '../../components/AdoptersLine/AdoptersLine'
import './Adopt.css'

export default class Adopt extends React.Component {
  state = {
    petData: [],
    currUser: 'Hector',
    users: null,
    newUser: null,
    adoptionHistory: null
  }

  onClickAdopt = async petData => {
    // const adoptData = {
    //   pet: petData,
    //   owner: this.state.currUser
    // }
    console.log('adopt')
    // PetfulApiService
    try{
      if(petData.type==='cat'){
        PetfulApiService.deleteCat()
        PetfulApiService.getCat()
      } if (petData.type==='Dog'){
        // service for delete dog
        PetfulApiService.deleteDog()
        PetfulApiService.getDog()
      }
    }catch{

    }
  }

  onClickNewUser = (newUser) => {
    this.setState({newUser:newUser})
    console.log('here')
  }


  onClickSetRandomUser = () => {
    console.log(this.state.users)
    const users = this.state.users
    const currUser = users[Math.floor(Math.random() * users.length)]
    this.setState({ currUser: currUser })
  }
  async componentDidMount() {
    try {
      const cat = await PetfulApiService.getCat()
      const dog = await PetfulApiService.getDog()
      const users = await PetfulApiService.getUsers()

      const pets = []
      pets.push(cat)
      pets.push(dog)

      this.setState({ petData: pets, users: users })
    } catch (err) {
      console.log('error')
    }
  }

  render() {
    return (
      <div className="Adopt">
        <div>
          <button onClick={this.onClickSetRandomUser} className="adopt-btn">
            Pick Random User
          </button>
          <h2>
            Current User:{' '}
            {this.state.currUser ? this.state.currUser : 'Pick a Random User!'}
          </h2>
        </div>
        <div className="cards">
          {this.state.petData.map((petData, i) => {
            return (
              <PetCard
                key={i}
                petData={petData}
                allowedToAdopt={
                  this.state.currUser === this.state.users[0] ? true : false
                }
                onClickAdopt={this.onClickAdopt}
              />
            )
          })}
        </div>
        <AdoptersLine users={this.state.users} />
        <CreateUserForm onClickNewUser={this.onClickNewUser} />
      </div>
    )
  }
}

// const testPetData = [
//   {
//     type: 'Cat',
//     img:
//       'https://www.washingtonpost.com/resizer/0dNIIeFMlRoS7e2XEocUbKwnkIA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AN6TYEVEOEI6PMKP6QLXHTK2CQ.jpg',
//     name: 'Fluffy'
//   },
//   {
//     type: 'Dog',
//     img: 'https://travelafricamag.com/wp-content/uploads/2017/11/Hyena1024.jpg',
//     name: 'Still Fluffy'
//   }
// ]
