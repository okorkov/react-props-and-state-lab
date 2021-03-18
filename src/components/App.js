import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  FindPetsClick = () => {

    if(this.state.filters.type === 'all') {
      fetch('/api/pets').then(element => element.json()).then(data => this.setState({ pets: data}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(element => element.json()).then(data => this.setState({ pets: data}))
    }
  }

  setAdopted = (id) => {
      const newPets = []
      this.state.pets.map(p => {
        if(p.id === id) {
          p.isAdopted = true;
        }
      newPets.push(p)
      })
      this.setState({
        pets: newPets
      })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.FindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.setAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
