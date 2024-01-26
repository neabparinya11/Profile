import { useContext } from "react";
import { HeaderText } from "./HeaderText";
import { LanguageContext } from "../Languages/LanguageProvider";

function SkillsProfile(){
    const { dictionary } = useContext(LanguageContext)
    return(
        <>
            <HeaderText message={dictionary.skill} />
            
        </>
    )
}

export default SkillsProfile;