import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cards({img,tittle,text,href}) {
  const [isreadmore,handlereadmore] = useState (true)
const togglereadmore= ()=>{
  handlereadmore(!isreadmore)
}
  return (
  <>
  
  <div className="card mt-3" style={{width: '18rem'}}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{tittle}</h5>
    <p className="card-text">{isreadmore ? text.slice(0,30) : text   } </p> {isreadmore ? <a style={{cursor:'pointer',color:'red'}}  onClick={()=>{togglereadmore()}}>Read More</a> :  <a style={{cursor:'pointer' ,color:'green'}}   onClick={()=>{togglereadmore()}}>Read Less</a> }
    <br className='br'/>
  <button className='btn- btn-primary'> <Link to= {`/project/product-detail/${href}` } className="btn btn-primary btn-small ">Check</Link></button> 
  </div>
</div>
  </>
  )
}

export default Cards