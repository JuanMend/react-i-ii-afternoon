import React, {Component} from 'react';

class Button extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        
        return(
            <div className="container">
      
        <ul className="footer-nav">
          <li className="leftPrev">
          <button className="btn-prev" onClick={this.props.prev}> 
          Previous</button>
          </li>

          <div className="foot-midnav">
          <li><button>Edit</button></li>
          <li><button>Delete</button></li>
          <li><button>New</button></li>
      

          </div>
          <div className="foot-midright">
          <li className="rightNext">
          <button className="btn-next" onClick={this.props.next}
          >Next</button></li>
          </div>
        </ul>

      </div>
        )
    }
}

export default Button;