import { React ,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectData } from "../Components/Commons/CardsData";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import {addItemtoList , RemoveItemtoList } from '../Actions/index'

function ProductDetails() {
  const list =useSelector((index)=>index.ItemsInArray)
  const dispatch=useDispatch();
  let navigate = useNavigate();
   let { id } = useParams();
  const [data, setdata] = useState();
  const [Pack , setPack] =useState(0);
  const [PriceChange,setPriceChanger] =useState('')
  const [Effect , handleEffect] =useState(true)
 useEffect(() => {


  handlePriceFun()




 }, [Pack , Effect])
 const handlePriceFun = () =>{

  if (Pack>=0)
{
f.map((index)=>{
let a=parseInt(index.price);
let b = a*Pack
if(Pack>0){
  setPriceChanger(b)
}
else{
  setPriceChanger(a)
}

})
}
 }
const handleChange =(e)=>{
const value= e.target.textContent
if(value == '+')
{
  setPack(Pack+1)
}
if(value == '-')
{
  setPack(Pack-1)
}
}
  const f = projectData.filter((ele) => {
    return ele.id == id;
  });


  return (
    <div>
      <button
        className="btn btn-success align-right"
        onClick={() => {
          navigate("/project");
        }}
      >
        Go Back
      </button>
      <div className="row">
              <div className="col-lg-6">
                <img
                  style={{ maxWidth: "28rem", marginTop: "114px" }}
                  src={f[0].img}
                />
              </div>
              <div className="col-lg-6">
                <h1 className="fontWeightofHeadings">{f[0].tittle}</h1>
                <p className="mt-5" style={{ fontFamily: "emoji" }}>
                  {f[0].text}
                </p>
                <h1
                  className="h1 text-danger"
                  style={{ fontFamily: "fantasy" }}
                >
                Price  RS : {PriceChange}  

                </h1>
                
                <div
                  className="d-flex align-items-center   "
                  style={{ width: "fitContent" }}
                >
                  <button
                    className="border "
                    style={{ fontSize: "30px", width: "30px" }}
                    onClick={(e)=>handleChange(e)}
                  >
                    +
                  </button>
                  <h1 className="fw-bold" style={{  margin: "19px",}}>{Pack}
                  </h1>
                  <button
                    className="border fw-bold "
                    style={{
                      fontSize: "30px",
                      width: "30px",
                    
                    }}

                    onClick={(e)=>handleChange(e)}
                  >
                    -
                  </button>
                </div>
           <div className="d-flex">
           {Pack > 0 && <button className="btn btn-primary mx-2"
            onClick={
              ()=>  dispatch(addItemtoList(Pack , PriceChange  ,f[0])  , handleEffect(!Effect))
            
              }>Add to Cart</button>}
              
              {list.length>0 && <button className="btn btn-success"><a onClick={()=>navigate('/checkout')}>Check Out</a></button> }
           </div>
              </div>
            </div>
          
      
   
    </div>
  );
}

export default ProductDetails;
