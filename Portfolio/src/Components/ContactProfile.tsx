import { useContext } from "react";
import { LanguageContext } from "../Languages/LanguageProvider";
import { HeaderText } from "./HeaderText";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import { InformationText } from "./InformationText";
import { Container } from "@mui/material";


function ContactProfile(){
    const { dictionary } = useContext(LanguageContext)
    return(
        <>
            <HeaderText message={dictionary.contact} />
            <Container sx={{ display:"flex" }}>
                <LocationOn /><InformationText message={dictionary.address} />
            </Container>
            <Container sx={{ display:"flex"}}>
                <Phone /><InformationText message={dictionary.phone_me} />
            </Container>
            <Container sx={{ display:"flex"}}>
                <Email /><InformationText message={dictionary.my_email1} />
            </Container>
            <Container sx={{ display:"flex"}}>
                <Email /><InformationText message={dictionary.my_email2} />
            </Container>
        </>
    )
}

export default ContactProfile;