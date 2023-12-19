import { ReactElement, createContext, useState } from "react";
import { ILanguageProvider, IProviderData } from "../Interfaces/ILanguageProvider";
import th from '../Languages/th/translations.json';
import en from '../Languages/en/translations.json';

export const dictionaryList = { th, en }
export const languageOptions = {
    en: "English",
    th: "Thai"
}

export const LanguageContext = createContext<ILanguageProvider>({
    userLanguage: "en",
    dictionary: dictionaryList.en
})

export function LanguageContextProvider({children}:{children:ReactElement}){
    const [userLanguage, setUserLanguage] = useState("en")
    const [userDictionary, setUserDictionary] = useState(dictionaryList.en)

    const userLanguageChange = (selected: string) =>{
        setUserLanguage(selected)
        if(selected == "en"){
            setUserDictionary(dictionaryList.en)
        }
        if(selected == "th"){
            setUserDictionary(dictionaryList.th)
        }
    }
    const provider: IProviderData = {
        userLanguage,
        dictionary: userDictionary,
        userLanguageChange: userLanguageChange
    }

    return(
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}