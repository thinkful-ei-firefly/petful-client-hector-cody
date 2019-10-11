import React from 'react'
import PetfulApiService from '../../services/petful-api'
import PetCard from '../../components/PetCard/PetCard'
import './Adopt.css'

export default class Adopt extends React.Component {
  componentDidMount() {
    // PetfulApiService get
  }

  render() {
    return (
      <div className="Adopt">
        <PetCard
          type="Cat"
          petData={{
            img:
              'https://www.washingtonpost.com/resizer/0dNIIeFMlRoS7e2XEocUbKwnkIA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AN6TYEVEOEI6PMKP6QLXHTK2CQ.jpg',
            name: 'Fluffy'
          }}
        />
        <PetCard
          type="Dog"
          petData={{
            img:
              'https://travelafricamag.com/wp-content/uploads/2017/11/Hyena1024.jpg',
            name: 'Still Fluffy'
          }}
        />
      </div>
    )
  }
}
