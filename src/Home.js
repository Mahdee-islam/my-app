import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mahdi');
    const [age, setAge ] = useState(25);

    const handleClick = () =>{
        setName('abir');
        setAge(26);
    }
   

    
   
    return ( 
        <div className="content">
            <h1>Homepage</h1>
            <p>{ name } is { age } years old. </p>
            <button onClick={handleClick}>Click me</button> 
          
            
            
        </div>
     );
}
 
export default Home;