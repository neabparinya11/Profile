import './App.css'
import { Paper, Grid, Button } from '@mui/material'
import { HeaderText } from './Components/HeaderText'
import { LanguageContext, LanguageContextProvider } from './Languages/LanguageProvider'
import { useContext } from 'react'

function App() {
  const { dictionary, userLanguageChange } = useContext(LanguageContext)

  return (
    <LanguageContextProvider>
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
                <HeaderText message={dictionary.computer_engineering} />
              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </LanguageContextProvider>
  )
}

export default App
