import './App.css'
import { Paper, Grid } from '@mui/material'
import { HeaderText } from './Components/HeaderText'

function App() {
  return (
    <>
      <Paper elevation={3} sx={{ margin:'50px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <HeaderText message={'Ping'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction={'column'}>
              <Grid item>

              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default App
