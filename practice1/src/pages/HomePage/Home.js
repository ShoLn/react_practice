import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <div className="title">React 練習專案</div>
            <div className="welcome">歡迎光臨我的頁面</div>
            <Link to="/listpage">
                <button>點此開始</button>
            </Link>
        </div>
    );
}
