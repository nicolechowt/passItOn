import React from "react";
import API from "../utils/API";
import Nav from "../children/NavLoggedIn.js";

require("./Request.css");

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            typeOfService: "Other",
            requestDate: "",
            address: "",
            content: "",
            pictureURL: "http://AS3"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        const query = {
            title: this.state.title,
            dateWanted: new Date(this.state.requestDate),
            typeOfService: this.state.typeOfService,
            address: this.state.address,
            content: this.state.content,
            pictureURL: this.state.pictureURL,
            userEmail: "test@test.com"
        };

        API.request(query)
            .then( function(res){
                console.log("This is what has been sent \n" + res.data);
            })
            .catch(err => console.log(err));
        

        event.preventDefault();
    };
    
    render(){
        return (
        <div>
            <Nav />
            <header className="header">
                <h1>Request Help</h1>
                <h4>Tell your Story and get Help from your community</h4>
            </header>
            <section className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">
                            Title: 
                            <input
                                name="title"
                                type="text"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                className="form-control" id="requestTitle" placeholder="title goes here" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Type of service:
                            <select
                                name="typeOfService"
                                value={this.state.typeOfService}
                                onChange={this.handleInputChange}
                                className="form-control">
                                <option value="Money">Money</option>
                                <option value="Talking Pal">Talking Pal</option>
                                <option value="Labor">Labor</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Date you want it:
                            <input
                                name="requestDate"
                                type="date"
                                value={this.state.requestDate}
                                onChange={this.handleInputChange}
                                className="form-control" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">
                        Address
                        <input
                            name="address"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                            className="form-control" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Your Story:
                            <textarea
                            name="content"
                            value={this.state.content}
                            onChange={this.handleInputChange}
                            className="form-control" rows="5"></textarea>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-success">Help me</button>
                </form>
                {/* <article className="sideBar">
                    <h4>Specify your problem in here. Select the type of service you want. Specify the date you want the service.</h4>
                </article> */}
            </section>
        </div>
    )}
};

export default Request;