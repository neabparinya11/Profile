import { Typography } from '@mui/material'
import { IHeaderText } from '../Interfaces/IHeaderText'
import { purple } from '@mui/material/colors'

/**
 * This function is for use formal of UI.
 * @param data type IHeaderText, it is pass data and configuration.
 * @returns Typography component to show message.
 */
export function HeaderText(data:IHeaderText){
    return(
        <>
            <Typography variant='h1' color={purple[300]}>{data.message}</Typography>
        </>
    )
}