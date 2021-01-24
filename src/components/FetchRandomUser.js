// import React from "react";
import React, { Component } from "react";
import "./FetchRandomUser.css"
import People from "./People";
import SearchForm from "./SearchForm";
import API from "../utils/API";


export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    // person: [],
    // search: "",

      result: [],
      filter: "",
      filterBy: "lastName",
      currentSort: "default",
      sortField: ""
  
  
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
    const name = event.target.name;
    const value = event.target.value;

    // this.componentDidMount(this.state.search);
    this.filterEmployees(value);
    this.setState({

      [name]: value

    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);

  };


  
  // async componentDidMount() {
  //   const url = "https://randomuser.me/api/?results=50";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ 
  //           result: data.results, 
  //           loading: false,
  //           search: data.results.name
  //         });
  //       }

        componentDidMount() {
          API.search()
            .then(res => {
              console.log(res)
              this.setState({
                result:  res.data.results.map((e, i) => ({
                  firstName: e.name.first,
                  lastName: e.name.last,
                  picture: e.picture.thumbnail,
                  email: e.email,
                  phone: e.phone,
                  dob: e.dob.date,
                  key: i
                }))
      
              })
           
            })
            .catch(err => console.log(err));
        }
      

    filterEmployees = (searchkey) => {
      console.log(searchkey);
      console.log(this.state.result);
      var filterResult = this.state.result.filter(person => person.firstName.toLowerCase() === searchkey.toLowerCase())
  
      this.setState({
        result:filterResult
        
      })
    }
  


  render() {
    // if (this.state.loading) {
    //   return <div>loading...</div>;
    // }

    // if (!this.state.result) {
    //   return <div>didn't get a person</div>;
    // }

    return (
        
        <div> 
           <SearchForm 
            type = {this.state.result}
            // search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            value={this.state.search}
          />
            
            {/* <People type = {this.state.result}/> */}
            <div className="row">
          {/* <div > */}
          <table className="table">
            <tr>
              <th scope="col">Photo</th>
              <th>First Name</th>
              {/* <th onClick={this.onSortChange}>First Name   */}
              {/* <button onClick={this.onSortChange}> ^
								</button> */}
              {/* </th> */}
              <th scope="col">Last Name </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>

            {/* { [...this.state.result].sort(this.sortTypes[this.state.currentSort].fn).map((item) =>  */}
            {/* {this.state.result.length > 0 ? (
                <div>
                  {this.state.result.map(item => (
                    <EmployeeCard
                      picture={item.picture}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      email={item.email}
                      phone={item.phone}
                      key={item.key}
                    />
                  ))}
                </div>
              ) : (<div />)} */}
            {[...this.state.result].map((item) =>
              <People
                picture={item.picture}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />
            )}

          </table>
        </div>

        
        </div>
    );
  }
}