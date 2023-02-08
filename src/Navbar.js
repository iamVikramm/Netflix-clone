function Navbar(){
    return(
        <div className="Navbar">
            <div className="nav-img-div">  
                <a href="/">
                <img href="/" className="nav-img" alt="nav-logo" src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"></img>
                </a>
            </div>
            <div className="profile-img-div">
                <img title="Vikram" style={{cursor:"pointer"}} alt="profile-img" className="profile-img" src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"></img>
            </div>
        </div>
    )
}

export default Navbar;