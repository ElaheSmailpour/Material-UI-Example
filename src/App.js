import { Grid } from '@material-ui/core';
//import Navbar from './components/Navbar';
import PrimarySearchAppBar from "./material"
import Rightbar from './components/Rightbar';
import Leftbar from './components/Leftbar';
import Feeds from './components/Feeds';
import { makeStyles } from '@material-ui/core';
import Add1 from './components/Add1';
const useStyles = makeStyles((theme) => ({
  left: {

    [theme.breakpoints.down('xs')]: {
      display: "none"
    }
  }
}))
function App() {
  const classes = useStyles()

  return (

    <div>

      <PrimarySearchAppBar />
      {/* <Navbar /> */}
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feeds />
        </Grid>
        <Grid item sm={3} className={classes.left}>
          <Leftbar />
        </Grid>
      </Grid>
      <Add1 />
    </div>
  );
}

export default App;
