import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, withStyles, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

//style for Buttons
const styles = (theme) => ({
  navButton: {
    marginTop: "20px",
    width: "300px",
    align: "center",
  },
});

class View extends Component {
  // defining States
  state = {
    currentIndex: -1,
    list: this.returnList(),
  };

  // return Values
  returnList() {
    if (localStorage.getItem("transactions") == null)
      localStorage.setItem("transactions", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("transactions"));
  }
  // Handle Delete
  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };
  // Add User
  onAddOrEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex == -1) list.push(data);
    else list[this.state.currentIndex] = data;
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider>
        <Container maxWidth="sm">
          <div>
            <Table>
              <TableBody>
                {this.state.list.map((item, index) => {
                  return (
                    <div>
                      <tr key={index}>
                        <TableCell>{item.FirstName}</TableCell>
                        <TableCell>{item.LastName}</TableCell>
                        <TableCell>{item.Email}</TableCell>
                        <TableCell>{item.Bio}</TableCell>

                        <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => this.handleDelete(index)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </tr>
                    </div>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div>
            <Link to="/create" style={{ textDecoration: "none" }}>
              <Button
                className={classes.navButton}
                variant="contained"
                width="50%"
                color="secondary"
              >
                Create
              </Button>
            </Link>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(View);
