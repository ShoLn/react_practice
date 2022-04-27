import React from "react";
import "./Lists.scss";
import { Link } from "react-router-dom";

export default function Lists({ allList, deleteLists }) {
    return (
        <div className="lists">
            {allList.map((list, index) => {
                return (
                    <div className="list" key={list.id}>
                        <div>
                            {index + 1} - {list.title}
                        </div>
                        <button
                            onClick={() => {
                                deleteLists(list.id);
                            }}
                        >
                            刪除
                        </button>
                    </div>
                );
            })}
            <Link to="/">
                <button className="return">返回首頁</button>
            </Link>
        </div>
    );
}
