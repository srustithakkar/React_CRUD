import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./MainView.css";
import Button from "@material-ui/core/Button";
import { Container, Box, withStyles, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

// Ovveriddes Mui Theme
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        fontWeight: "bold",
        width: "200px",
        display: "inlineBlock",
        margin: "10px",
      },
    },
  },
});
// Custom Classe
const styles = (theme) => ({
  buttons: {
    marginTop: "45%",
  },
  box: {
    display: "flex !important",
  },
});

class ContainedButtons extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Container maxWidth="xs">
            <Box>
              <Link to="/create" style={{ textDecoration: "none" }}>
                <Button
                  className={classes.buttons}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Create
                </Button>
              </Link>
              <Link to="/view" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  fullwidth
                  color="secondary"
                >
                  View
                </Button>
              </Link>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}
export default withStyles(styles)(ContainedButtons);
