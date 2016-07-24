import React from 'react';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { getAsap2Template } from '../ajax/RequestHelper';

export default class AddA2L extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      a2ltemplate: null
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
    getAsap2Template().then( (value) => {
//      console.log(eval(JSON.stringify(value)));
      this.setState({ a2ltemplate: value });

    })

  }

  createRender(child) {
    console.log("each")
    if(!this.state.a2ltemplate) {
      return;
    }

    let doms = [];
    for(var key in child){
      if( typeof(child[key]) === 'string') {
        doms.push(<div key={key}>{key}</div>)
      } else {
        doms.push(<div><div key={key}>{key}</div><div> {this.createRender(child[key]) }</div></div>)
      }
    }
    console.log(doms)
    return <div>{doms}</div>;
  }

  render() {
    return (
      <MainLayout>
        <div>111{ this.createRender(this.state.a2ltemplate) }</div>
      </MainLayout>
    );
  }
}
