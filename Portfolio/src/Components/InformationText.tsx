import { Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { IInformation } from "../Interfaces/IInformationText";

export function InformationText(data:IInformation){
    return(
        <>
            <Typography variant="h6" color={purple[300]} align="left">{data.message}</Typography>
        </>
    )
}