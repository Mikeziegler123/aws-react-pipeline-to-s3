import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3client"; // Helper function that creates an Amazon S3 service client module.

export const bucketParams = { Bucket: "only-text-bucket" };

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  

  componentDidMount = () => {
    s3Client.send(new ListObjectsCommand(bucketParams)).then(json => this.setState({
    data: JSON.stringify(json) }))
  }

  render() {
    const { data } =  this.state;
    return (
    <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <code>Edited from A Computer</code>
            </p>
            <p>
              <code>Notifications sent to Mike v3</code>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>
              {data}
            </div>
          </header>
        </div>
    )
  }
}

export default App;