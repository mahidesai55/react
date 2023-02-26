import React from 'react'

function Section(props) {
  return (
    <section className='Content' style={{backgroundImage:`url("Images/${props.backgroundImage}")`}}>
    <section className='carName' >
       <h1>{props.carName}</h1>
       <p>{props.text}</p>
    </section>
    <section className=' twoOption '>
         <a href=''>{props.leftbtn}</a>
         {props.rightbtn && <a href=''>{props.rightbtn}</a>}
    
     <div className='arrow'>
        {props.ico &&<img src='images/down-arrow.svg'/>}
     </div>
    </section>
    </section>
  )
}

export default Section