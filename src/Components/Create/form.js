import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./CreateUser.css";
import Button from "@material-ui/core/Button";

// States
class TransactionForm extends Component {
  state = {
    ...this.returnStateObject(),
  };

  // returning State
  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        FirstName: "",
        LastName: "",
        Email: "",
        DOB: "",
        Bio: "",
      };
    else return this.props.list[this.props.currentIndex];
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list !== this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
      console.log(prevProps, this.props);
    }
  }

  // Handle Change
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // Handle Submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <Container maxWidth="sm">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField
            id="filled-read-only-input"
            label="First Name"
            defaultValue="First Name"
            name="FirstName"
            variant="filled"
            onChange={this.handleInputChange}
            value={this.state.FirstName}
            required
          />
          <br />
          <TextField
            id="LastName"
            label="Last Name"
            defaultValue="Last Name"
            name="LastName"
            variant="filled"
            onChange={this.handleInputChange}
            value={this.state.LastName}
            required
          />
          <br />

          <TextField
            type="email"
            id="filled-read-only-input"
            label="Email"
            defaultValue="Email"
            name="Email"
            variant="filled"
            onChange={this.handleInputChange}
            value={this.state.Email}
            isEmail
            errorMessages={["this field is required", "email is not valid"]}
            required
          />
          <br />
          <TextField
            type="date"
            id="dob"
            defaultValue="2017-05-24"
            label="DOB"
            name="DOB"
            variant="filled"
            onChange={this.handleInputChange}
            value={this.state.DOB}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            id="filled-read-only-input"
            label="Bio"
            defaultValue="Bio"
            name="Bio"
            variant="filled"
            onChange={this.handleInputChange}
            value={this.state.Bio}
            required
          />
          <br />
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}

export default TransactionForm;
