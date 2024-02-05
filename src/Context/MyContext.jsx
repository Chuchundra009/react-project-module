import { createContext, useEffect, useState } from "react";
import Get from "../Services/Get";

export const MyContext= createContext();

export function ComponentsContext({children}){
    const [words, setWords] = useState(false);
    const value = {words, setWords};

    useEffect(() => {
        getWordsServer()
    },[])

    async function getWordsServer() {
        const postServer = await Get.getWords();
        setWords(postServer)
    }

    if(!words){
        return <h1>Loading...</h1>
    }

    return <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
}