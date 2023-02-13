import React, { useState } from 'react'

function SearchBar(props) {
    const [form, setform] = useState('')
  const [filteredarr,setfilteredarr] = useState([])

const handleSearchForm=(e)=>{
  
    setform(e.target.value )
  
const a=props.data.filter((index)=>{
    return index.tittle.toLowerCase().includes(form.toLowerCase())
})
setfilteredarr(a)

}
    const a=props.data.includes(form)
console.log(a);

    return (
   <>
   
   <div class="row">
            <div class="col-12">
              <div style={{width: '40%', float: 'right'}}>
                <form action="">
                  <div class="input-group mb-4">
                    <input
                      type="text"
                      placeholder={props?.placeholder}
                      aria-describedby="button-addon5"
                      class="form-control"
                      onChange={(e)=>handleSearchForm(e)}
                    />
                    <div class="input-group-append">
                      <button
                        id="button-addon5"
                        type="submit"
                        class="btn btn-primary"
                        // onClick={SearchButton}
                      >
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div  style={{display : form ? 'block' : 'none'}}  className='SearchList'>
                <table class="table table-hover">
             <tbody>            
                {form &&  filteredarr.map((index)=>{
            return ( <>
<tr><td colspan="2">{index.tittle}</td>
</tr>



                </>)
                    })}
                
                </tbody>
</table>   
                </div>
              </div>
            </div>
          </div>
   </>
  )
}

export default SearchBar