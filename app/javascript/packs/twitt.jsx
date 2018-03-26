import React, { Component, PropTypes } from 'react';
import WebpackerReact from 'webpacker-react';

export default class Twitt extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }


 
  render() {
    let self = this;
    return (
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body d-flex flex-column">
              <h4><a target="_blank" href={this.props.twitt.attributes.url}>See on twitter</a></h4>
              <div className="text-muted">{this.props.twitt.attributes.text}</div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <div className="avatar avatar-md mr-3" style={{ backgroundImage: `url(${this.props.twitt.attributes["profile-image-url"]})`}}></div>
                <div>
                  <a href="./profile.html" className="text-default">{this.props.twitt.attributes["user-name"]}</a>
                  <small className="d-block text-muted">{this.props.twitt.attributes["human-date"]} ago</small>
                </div>
                <div className="ml-auto text-muted">
                  <span  className="icon d-none d-md-inline-block ml-3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

WebpackerReact.setup({Twitt});