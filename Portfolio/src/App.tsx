import './App.css'
import { Paper, Grid, Button } from '@mui/material'
import { HeaderText } from './Components/HeaderText'
import { LanguageContext } from './Languages/LanguageProvider'
import { useContext } from 'react'
import { InformationText } from './Components/InformationText'

function App() {
  const { dictionary, userLanguageChange } = useContext(LanguageContext)
  return (
    <>
      <Paper elevation={3} sx={{ margin:'50px' }}>
        <Button onClick={() => userLanguageChange("en")}>EN</Button>
        <Button onClick={() => userLanguageChange("th")}>TH</Button>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <HeaderText message={'Ping'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction={'column'}>
              <Grid item>
                <InformationText message={dictionary.address} />
              </Grid>
              <Grid item>
                <InformationText message={dictionary.computer_engineering} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default App
