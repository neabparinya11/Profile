import './App.css'
import { Paper, Grid, AppBar, Typography, MenuItem, Toolbar, Container } from '@mui/material'
import { LanguageContext } from './Languages/LanguageProvider'
import { useContext } from 'react'
import { InformationText } from './Components/InformationText'
import { HeaderText } from './Components/HeaderText'
import ContactProfile from './Components/ContactProfile'

function App() {
  const { dictionary, userLanguageChange } = useContext(LanguageContext)
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>User</Typography>
          <MenuItem onClick={() => userLanguageChange("en")}>
            <Typography>EN</Typography>
          </MenuItem>
          <MenuItem onClick={() => userLanguageChange("th")}>
            <Typography>TH</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} sx={{ padding: 5 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <ContactProfile />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction={'column'}>
              <HeaderText message={dictionary.about_me} />
              <Container sx={{ display:"flex" }}>
                <InformationText message={dictionary.name} />
                <InformationText message={dictionary.parinya} />
                <InformationText message={dictionary.muangrod} />
              </Container>
              <Container sx={{ display:"flex" }}>
                <InformationText message={dictionary.age} />
              </Container>
              <Container sx={{ display:"flex" }}>
                <InformationText message={dictionary.video_game} />
                ,
                <InformationText message={dictionary.drawing} />
                ,
                <InformationText message={dictionary.interest_and_activity} />
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default App
