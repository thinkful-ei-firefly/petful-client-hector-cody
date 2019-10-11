import React from 'react'
import PetfulApiService from '../../services/petful-api'
import PetCard from '../../components/PetCard/PetCard'
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'
import './Adopt.css'

export default class Adopt extends React.Component {
  state = { petData: [] }

  onClickDelete = () => {}

  async componentDidMount() {
    try{
      const cat = await PetfulApiService.getCat()
      const dog = await PetfulApiService.getDog()
      const pets = []
      pets.push(cat)
      pets.push(dog)

      this.setState({petData: pets})
    } catch(err){
      console.log('error')
    }

  }

  render() {
    return (
      <div className="Adopt">
        <div className='cards'>
        {this.state.petData.map((petData, i )=> {
          return <PetCard key={i} petData={petData} />
        })}
        </div>
        <CreateUserForm />
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
