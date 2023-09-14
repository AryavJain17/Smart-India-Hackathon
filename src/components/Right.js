import React from 'react'


function Right(props) {
  return (
    
    <div><ul>
      <div className="divright1 width-auto">
   
        <li><img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"/></li>
        <li className='lir1' ><h5 style={{fontWeight: "400"}}>{props.department}</h5>
             <p style={{fontWeight: "700"}}>{props.deptname}</p>
        </li>
        </div>
        <li className='lir2'>{props.budget1}<br/></li>
    </ul>
</div>
  )
}

export default Right