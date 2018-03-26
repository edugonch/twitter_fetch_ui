import React, { Component, PropTypes } from 'react';
import WebpackerReact from 'webpacker-react';
import Twitt from './twitt';

export default class TwittsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentTwitts: [],
        currentTag: ''
    };
    this.getTwitts = this.getTwitts.bind(this);
  }

  componentDidMount() {
    App.observable.subscribe("getTwitts", this.getTwitts);
    let tag = App.observable.fire("getCurrentTag")();
    this.getTwitts(tag);
  }

  componentWillUnmount() {

  }

  getTwitts(tag){
    
    let self = this;
    this.setState({currentTag: tag}, function(){
      $.ajax({
        dataType: "json",
        url: self.props.twittsPath + encodeURI(tag),
        success: function(data){
          self.setState({currentTwitts: data.data});
        }
      });
        
    });
    
  }

 
  render() {
    let self = this;
    return (
        <div className="row row-cards row-deck">
            <div className="col-12">
              <button 
                onClick={() => { this.getTwitts(this.state.currentTag) }}
                type="button" className="btn btn-primary ml-auto">Refresh</button>
            </div>
            {this.state.currentTwitts.map(function(data){
              return (
                <Twitt key={data.id} twitt={data} />
              );
            })}
        </div>
    )
  }
}

WebpackerReact.setup({TwittsList});