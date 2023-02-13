import React , {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Checkout() {

    const navigate= useNavigate()
   const list = useSelector((index)=>index.ItemsInArray)
   const [totalp,settotalp] =useState(0)
   console.log(list,"oi hoi hoi ");


 
useEffect(() => {
  let a;
  a=list.map( (index)=>index.TotalPrice)
  const b =a.reduce(myFunc);
  function myFunc(total, num) {
    return total + num;
  }
  settotalp(b)
  
}, )


  return (
    <>
      <button
        className="btn btn-success align-right"
        onClick={() => {
          navigate("/project");
        }}
      >
        Go Back
      </button>
    <h1>So THanks For Shopping With Us </h1>
  
    <table class="table">
  <thead>
    <tr>

      <th scope="col">Product</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {list.map((index)=>{
        
 return(
    <tr>
    {/* <th scope="row">{count}</th> */}
    <td ><img width={250} src={index.data.img} /></td>
    <td>{index.data.tittle}</td>
    <td>{index.Pack}</td>
    <td>{index.TotalPrice}</td>

  </tr>
 )

    })}
 
<div style={{ width:'100%'}}> <h1 style={{float:'right' ,color:'red'}}>Total Price  Rs {totalp} </h1></div>
  
  </tbody>
</table>
    </>
  
    
  )
}

export default Checkout