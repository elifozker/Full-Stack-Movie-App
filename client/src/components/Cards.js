import "../styles/Cards.css";

function Cards() {

    return (

        <div className="card">
            
            <div className="card-container">
            <h1 className="title">MOVIEBOX LET'S YOU</h1>
                <div className="card-first">
                    <span id="eye" className="material-symbols-outlined">
                        visibility
                    </span>
                    <h5 className="card-desc">Keep track of every film you've ever watched <br></br>(or just start<br></br> from the day you join)</h5>
                </div>
                <div className="card-two">
                    <span id="str"  className="material-symbols-outlined">
                        star
                    </span>
                    <h5 className="card-desc">Rate each film on a five-star<br></br> scale to record and<br></br> share your reaction</h5>

                </div>
                <div className="card-three">
                    <span id="library" className="material-symbols-outlined">
                        library_add
                    </span>
                    <h5 className="card-desc">Compile and share lists of<br></br> films on any topic and keep a <br></br>watchlist of films to see</h5>
                </div>
                <div className="card-fourth">
                    <span id="search" className="material-symbols-outlined">
                        search
                    </span>
                    <h5 className="card-desc">Browse your watched films<br></br> Your account, profile and settings<br></br>shows our most popular lists</h5>
                </div>
                <h5 className='tex'>The social network for film lovers</h5>

            </div>

           
        </div>

    );
}

export default Cards;