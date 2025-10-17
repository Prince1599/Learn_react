import React from 'react'
import { Bookmark } from 'lucide-react'

const card = (props) => {
  console.log(props.company);
  return (
    <div>
        <div className='card'>
        <div className='top'>
          <img src={props.brandLogo} alt="" />
          <button>Save <Bookmark size={12} /></button>
        </div>
        <dev className="center">
          <div>
            <h3>{props.company} <span>{props.datePosted}</span></h3> 
          <h2>{props.post}</h2>
          </div>
        </dev>
        <dev className='tags'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </dev>
        <div className="bottom">
          <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default card
