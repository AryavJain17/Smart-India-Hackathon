import React from 'react'


function left(props) {
  return (
    
    <div>
      <div className="divleft1 overflow-hidden">
   
   <ul>
        <li><img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"/></li>
        <li className='li1' ><h5 style={{fontWeight: "400"}}>Project Name</h5>
             <p style={{fontWeight: "700"}}>{props.company}</p><span style={{fontSize: "15px"}}>12 Sept- 24 Sept</span>
        </li>
        <li ><div className='li2'>Budget {props.budget}</div ><br/> <div class="divleft2" >{props.complete} Completed</div></li>
    </ul>
</div></div>
  )
}

export default left