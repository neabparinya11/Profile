import { ReactElement, createContext, useState } from "react";
import { IProviderData } from "../Interfaces/ILanguageProvider";
import th from '../Languages/th/translations.json';
import en from '../Languages/en/translations.json';

const dictionaryList = { th, en }
// const languageOptions = {
//     en: "English",
//     th: "Thai"
// }

export const LanguageContext = createContext<IProviderData>({} as IProviderData)

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
        userLanguage: userLanguage,
        dictionary: userDictionary,
        userLanguageChange: userLanguageChange
    }

    return(
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}