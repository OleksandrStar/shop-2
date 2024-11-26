import React, { useEffect, useState } from "react";

const NewsTicker = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=YOUR_API_KEY`)
            .then((res) => res.json())
            .then((data) => setNews(data.news))
            .catch((err) => console.error("Failed to fetch news:", err));
    }, []);

    if (!news.length) return <p>Loading news...</p>;

    return (
        <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
            <marquee>
                {news.slice(0, 5).map((article, index) => (
                    <span key={index} style={{ marginRight: "20px" }}>
            {article.title}
          </span>
                ))}
            </marquee>
        </div>
    );
};

export default NewsTicker;
