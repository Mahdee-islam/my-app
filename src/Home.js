const Home = () => {

    const handleClick = () => {
        console.log('welcome')
    }
    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }
    const handleClickFurther = (name, e) => {
        console.log('hello ' + name, e.target)
    }
    return ( 
        <div className="content">
            <h1>Homepage</h1>
            {/* without parameter */}
            <button onClick={handleClick}>Click me</button> 
            {/* with parameter */}
            <button onClick={ () => {
                handleClickAgain('juniors')
            } }>Click me again</button>
            {/* with event handler */}
            <button onClick={(e) => {
                handleClickFurther('sonia', e)
            }}>Click me further</button>
            
            
            
        </div>
     );
}
 
export default Home;