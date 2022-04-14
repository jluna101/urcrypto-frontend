import React, { useState } from 'react';

function CryptoPrices(props, {signedIn}) {
    const data = props.coinData;
    const [cryptoData, setCryptoData] = useState(data)
    function integer(num){
        return parseInt((num).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    return (
        <div className="table-responsive">
            <h1 className="text-center">Cryptocurrency Prices</h1>
            <table className="table tablie-light table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="opacity-0">.</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>1h</th>
                        <th>24hr</th>
                        <th>7d</th>
                        <th>Market Cap</th>
                        <th>24h Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoData.slice(0,30).map((element, index) => (
                        <tr key={element.volume}>
                            <td>{element.rank}</td>
                            <td><img src={element.icon} alt={element.id}/></td>
                            <td>{element.symbol}</td>
                            <td>${integer(element.price)}</td>
                            <td>{element.priceChange1h}%</td>
                            <td>{element.priceChange1d}%</td>
                            <td>{element.priceChange1w}%</td>
                            <td>${integer(element.marketCap)}</td>
                            <td>${integer(element.volume)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CryptoPrices;