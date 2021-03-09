import React, { Component } from "react";
import TransactionForm from "./form";
import { Container } from "@material-ui/core";

class Create extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList(),
  };

  // list
  returnList() {
    if (localStorage.getItem("transactions") == null)
      localStorage.setItem("transactions", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("transactions"));
  }

  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  onAddOrEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex === -1) list.push(data);
    else list[this.state.currentIndex] = data;
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container maxWidth="xs">
          <TransactionForm
            currentIndex={this.state.currentIndex}
            list={this.state.list}
            onAddOrEdit={this.onAddOrEdit}
          />
        </Container>
      </div>
    );
  }
}

export default Create;
