import React from 'react'
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <section className='Content' style={{backgroundImage:`url("Images/${props.backgroundImage}")`}}>
    <Fade left>
    <section className='carName' >
       <h1>{props.carName}</h1>
       <p>{props.text}</p>
    </section>
    </Fade>
    <Fade right>
    <section className=' twoOption '>
         <a href='' className={props.blackBg ? 'black': ''}>{props.leftbtn}</a>
         {props.rightbtn && <a href=''>{props.rightbtn}</a>}
    
     
    </section>
    </Fade>
    
    <div className='arrow'>
        {props.ico &&<img src='images/down-arrow.svg'/>}
     </div>
     
    </section>
  )
}

export default Section