import React, { Component, PropTypes } from 'react';
import WebpackerReact from 'webpacker-react';

export default class TagsMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selected: 'healthcare'
    };
    this.setActive = this.setActive.bind(this);
    this.getCurrentTag = this.getCurrentTag.bind(this);
  }

  componentDidMount() {
    App.observable.subscribe("getCurrentTag", this.getCurrentTag);
  }

  componentWillUnmount() {

  }

  getCurrentTag(){
      return this.state.selected;
  }

  setActive(tag){
      this.setState({ selected: tag }, function(){
        App.observable.fire("getTwitts")(tag);
      });
  }

 
  render() {
    let self = this;
    return (
        <div className="header-nav d-none d-lg-flex">
            <div className="container">
                <div className="row align-items-center">
                <div className="col">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${this.state.selected == 'healthcare' ? 'active' : ''}`}
                            onClick={ () => self.setActive('healthcare') }                            
                            ><i className="fa fa-medkit"></i> Health Care</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${this.state.selected == 'nasa' ? 'active' : ''}`}
                            onClick={ () => self.setActive('nasa') }          
                            ><i className="fa fa-rocket"></i> Nasa</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${this.state.selected == 'open source' ? 'active' : ''}`}
                            onClick={ () => self.setActive('open source') }          
                            ><i className="fa fa-gear"></i> Open Source</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

WebpackerReact.setup({TagsMenu});