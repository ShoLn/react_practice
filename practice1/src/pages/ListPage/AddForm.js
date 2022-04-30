import React from "react";
import "./AddForm.scss";
import { useState } from "react";
import Lists from "./Lists";
import { p1Firestore } from "../../firebase/config";
import { useEffect } from "react";

export default function AddForm() {
    const [allList, setAllList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [firebaseUpdate, setFirebaseUpdate] = useState(false);

    // handle delete button
    const deleteLists = async (deleteId) => {
        try {
            await p1Firestore
                .collection("to_do_lists")
                .doc(`${deleteId}`)
                .delete();
            setFirebaseUpdate(true);
        } catch (err) {
            console.log(err);
        }
    };

    // handle add list button
    const handleAdd = async (e) => {
        e.preventDefault();
        let doc = { title: inputValue, timestamp: new Date().getTime() };
        inputValue
            ? await p1Firestore.collection("to_do_lists").add(doc)
            : alert("待辦事項不可為空");
        setInputValue("");
        setFirebaseUpdate(true);
    };

    // get firebase collection's data
    useEffect(() => {
        p1Firestore
            .collection("to_do_lists")
            .orderBy("timestamp")
            .get()
            .then((snapShot) => {
                console.log(snapShot);
                if (!snapShot.empty) {
                    let resutl = [];
                    snapShot.docs.forEach((doc) => {
                        resutl.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    setAllList(resutl);
                } else {
                    setAllList([]);
                }
            });
        setFirebaseUpdate(false);
    }, [firebaseUpdate]);

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
                        handleAdd(e);
                    }}
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            handleAdd(e);
                        }
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
