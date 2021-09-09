import React, { Component } from "react";
import Loader from "./components/starter/Loader";
//import ShowDetail from "./components/ShowDetail";
import SplitPage from "./components/starter/SplitPage";
import { Grid } from '@material-ui/core'

class App extends Component {
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
 
  componentDidMount() {
    this.wait(2000);
  }

  render() {
    if (this.state.loading)
      return (
        <Grid 
        container 
        justify="center" 
        alignItems="center" 
        direction="column" 
        style={{minHeight: "100vh"}}
        >
          <Loader />
        </Grid>
      )

    return <SplitPage />;
  }
}

export default App;
