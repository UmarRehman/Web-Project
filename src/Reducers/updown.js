const initialState = [];
const team =[]
let totalq=0
export const ItemsInArray = (state=initialState , action) =>{
    switch (action.type) {
        case 'IncrementItem': 
          console.log(action.payload)

               const {Pack , Price ,data} =action.payload
               console.log(Pack ,"Pack" , "TotalPrice" ,Price)
             team.push({"Pack" : Pack , "TotalPrice" :Price ,'data' : data})
            if(team.length>0)
            {
              for(let i=0;i<=team.length ;i++)
              {
               totalq+=team[i].Pack
              }
            }
             return {team }
       
          
        case 'DecreamentItem':  
        return state-1
         
        default:
         return  team
    }
}