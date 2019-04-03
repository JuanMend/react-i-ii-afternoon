import React, { Component } from 'react'
import data from '../data'


class PeopleInfo extends Component{
    constructor(props) {
        super(props);
    }
  
render(){
    let index = this.props.index
    return(
        <div className='bodystyle'>
                        <div className='bodymid'>
                        <div className='bodymid2'>
                       <h2 className="Name">{`${data[index].name.first} ${data[index].name.last}`}</h2>
                       <h2 className="number">{this.props.index}/{data.length}</h2>  
                       </div>
                      
                       <ul className="List">
                      
                <h2><strong>From:</strong>{`${data[index].city} ${data[index].country}`}</h2>
                <h2><strong>Job Title:</strong>{`${data[index].title}`}</h2>
                <h2><strong>Employer:</strong>{`${data[index].employer}`}</h2>
            </ul>
            <ol className="MovieList"> <strong>Favorite Movies:</strong>
            <li>{`${data[index].favoriteMovies[0]}`}</li>
                <li>{`${data[index].favoriteMovies[1]}`}</li>
                <li>{`${data[index].favoriteMovies[2]}`}</li>
            </ol>
            
            </div>
        </div>
    )
}

}

export default PeopleInfo