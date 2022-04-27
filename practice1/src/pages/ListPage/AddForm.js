import React from "react";
import "./AddForm.scss";
import { useState } from "react";
import Lists from "./Lists";
import { v4 as uuidv4 } from "uuid";

export default function AddForm() {
    const [allList, setAllList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const deleteLists = (deleteId) => {
        setAllList((prevAllLists) => {
            return prevAllLists.filter((a) => {
                return a.id !== deleteId;
            });
        });
    };

    return (
        <div className="add-form">
            <form className="add">
                <input
                    type="text"
                    placeholder="請輸入欲新增待辦事項"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        inputValue
                            ? setAllList((prevAllLists) => {
                                  return [
                                      ...prevAllLists,
                                      {
                                          title: inputValue,
                                          id: uuidv4(),
                                      },
                                  ];
                              })
                            : alert("待辦事項不可為空");
                        setInputValue("");
                    }}
                >
                    新增紀錄
                </button>
            </form>
            <hr />
            <Lists allList={allList} deleteLists={deleteLists} />
        </div>
    );
}
