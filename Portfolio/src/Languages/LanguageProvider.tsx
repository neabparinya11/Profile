import { ReactElement, createContext, useCallback, useEffect, useState } from "react";
import { IProviderData } from "../Interfaces/ILanguageProvider";
import th from '../Languages/th/translations.json';
import en from '../Languages/en/translations.json';

const dictionaryList = { th, en }

export const LanguageContext = createContext<IProviderData>({} as IProviderData)

/**
 * 
 * @param children is React component 
 * @returns 
 */
export function LanguageContextProvider({children}:{children:ReactElement}){
    const [userLanguage, setUserLanguage] = useState("en")
    const [userDictionary, setUserDictionary] = useState(dictionaryList["en"])

    useEffect(()=>{
        setUserLanguage("en")
        setUserDictionary(dictionaryList["en"])
    },[])

    const userLanguageChange = useCallback((selected: string) =>{
        setUserLanguage(selected)
        if(selected == "en"){
            setUserDictionary(dictionaryList.en)
        }
        if(selected == "th"){
            setUserDictionary(dictionaryList.th)
        }
    },[])


    return(
        <LanguageContext.Provider value={{ Language: userLanguage, dictionary: userDictionary, userLanguageChange: userLanguageChange}}>
            {children}
        </LanguageContext.Provider>
    )
}