import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("wss://your-api-id.execute-api.us-east-1.amazonaws.com/dev");
        ws.onmessage = (event) => {
            const stockData = JSON.parse(event.data);
            setData(stockData);
        };
        return () => ws.close();
    }, []);

    return (
        <div>
            <h1>Stock Price Dashboard</h1>
            {data.map((stock, index) => (
                <p key={index}>{stock.ticker}: ${stock.avg_price}</p>
            ))}
        </div>
    );
};

export default Dashboard;
