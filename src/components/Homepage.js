import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {
    return (
        <div>
            <h1>Welcome to urCrypto!</h1>
            <div>
                Expore your favorite cryptocurrencies and see how they're doing.
                <Link to ='/prices' >
                    <button type="button" class="btn btn-primary">See Prices</button>
                </Link> 
            </div>
            <div>Stay on top of the latest crypto news in real time!
                <Link to ='/news' >
                    <button type="button" class="btn btn-primary">See News</button>
                </Link> 
            </div>
        </div>
    );
}

export default Homepage;