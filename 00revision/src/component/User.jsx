import React,{useState} from 'react'

const product =[
  {name : 'Ajay',isMale: true, age: 22},
  {name : 'Sakshi',isMale: false,age: 22},
  {name : 'Ankur',isMale:true, age: 22},
  {name : 'Meena',isMale:false, age : 20}
]
function User() {
  const [count,setCount] = useState(0);
  const listItems = product.map(product=>
   <> 
   <li key={product.age} style={{color: product.isMale ? 'blue':'pink' }}>
      name : {product.name}
    </li>
    
    </>
    )
    const handleClick =()=> {
      setCount(count+1);
    }
    const handleClick2 =()=>{
      setCount(0);
    }
  return (
    <>
    <ul>{listItems}</ul>
    <button onClick={handleClick}>Click here {count}</button>
    <button onClick={handleClick2}>reset count</button>
  </>)
}


export default User;