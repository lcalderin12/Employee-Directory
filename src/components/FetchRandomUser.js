import React from "react";
import "./FetchRandomUser.css"
import People from "./People";
import SearchForm from "./SearchForm"

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: [],
    search: "",
      // results: []
  
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.componentDidMount(this.state.search);
  };


  
  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=50";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ 
            person: data.results, 
            loading: false,
            search: data.results.name
        });
    }


  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
        
        <div>
           <SearchForm 
            type = {this.state.person}
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
            
            <People type = {this.state.person}/>
        
        </div>
    );
  }
}