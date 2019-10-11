import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default class Landing extends React.Component {
  render() {
    return (
      <div className="Landing">
        <header>
          <h2>Welcome To</h2>
          <img
            alt="dog"
            src={
              'https://i3.cpcache.com/merchandise/110_550x550_Front_Color-White.jpg?Size=Large&AttributeValue=NA&region={%22name%22:%22FrontCenter%22,%22width%22:8,%22height%22:8,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:100,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:800,%22crop_w%22:800,%22scale%22:0,%22template%22:{%22id%22:108878925,%22params%22:{}}}'
            }
          />
          <h1>Petful</h1>
        </header>
        <section>
          <article>
            <p>Welcome to petful the first in first out pet adoption!</p>
            <p>At petful we hold one cat and one dog until a cat or dog are adopted
            then we take in a new cat or dog until they are adopted.</p> 
            <p>Click Adopt! to view animals available.</p>
          </article>
        </section>
        <Link to={'#'} className="Link-btn">
          Adopt!
        </Link>
      </div>
    )
  }
}
