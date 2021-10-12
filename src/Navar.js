const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <a href="/" style={{
                    margin: "40px auto"
                }}>Home</a>
                <a href="/create" style ={{
                    color:'#fff',
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}
                >New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;