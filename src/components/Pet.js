import React from 'react'

class Pet extends React.Component {

  // disable = (e) => {
  //   e.target.className = 'ui disabled button';
  //   e.target.parentNode.children[0].className = 'ui primary button';
  // }

  render() {
    if(this.props.pet){
      return (
        <div className="card">
          <div className="content">
            <a className="header">
              <h3>Pet's Name: {this.props.pet.name}</h3>
              {(this.props.pet.gender === 'male') ? '♂' : '♀'}
            </a>
            <div className="meta">
              <span className="date">{this.props.pet.type}</span>
            </div>
            <div className="description">
              <p>Age: {this.props.pet.age}</p>
              <p>Weight: {this.props.pet.weight}</p>
            </div>
          </div>
          <div className="extra content">
            {(this.props.pet.isAdopted) ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button> }
          </div>
        </div>
      )
    }
  }
}

export default Pet
