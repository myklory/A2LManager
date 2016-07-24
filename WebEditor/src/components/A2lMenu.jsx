import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { getAsap2A2L, getAsap2Template } from '../ajax/RequestHelper';
import { Spin, Row, Col, Card, Icon } from 'antd';

export default class A2lMenu extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      a2llist:[],
      a2ltemplate: null
    }
  }

  componentWillMount(){
/*    $.get("http://localhost:8080/api/asap2/query/A2L", function (result) {
      var lastGist = result[0];
      console.log(result);
      /!*if (this.isMounted())*!/{
        this.setState({
          a2llist: result,
        });
        console.log(this.state.a2llist);
      }
    }.bind(this));*/
    getAsap2A2L().then((value) => {
//      console.log(value);
      this.setState({ a2llist: value });
    })

    getAsap2Template().then((value) => {
//      console.log(value);
      this.setState({ a2ltemplate: value });
    })/*.catch( (error) => {
      console.log(error);
    })*/;

  }

  callBack(a2llist) {
//    console.log(a2llist);
    this.setState({a2llist: a2llist});
  }

  createMenu(){
    let cards;
    let a2lcards;
    let template;
    if( this.state.a2llist.length === 0 && this.state.a2ltemplate === null) {
      return <div><Spin /><Spin /><Spin /></div>
    }
    if(this.state.a2llist.length !== 0 ) {
      a2lcards =
        <div>
          {/*this.state.a2llist.map( (a2l) =>
            <div className="col-md-4" key={a2l.id}>
              <Card key={a2l.id} title={a2l.version} style={{margin: "30px"}}>
                <div>版本:<span>{a2l.version}</span></div>
                <div>最后修改:<span>{Date}</span></div>
              </Card>
            </div>
          )*/}
        </div>
    }
    if( this.state.a2ltemplate ){
      template = <Link to="/adda2l"><Card key="new" className="new-action"><Icon type="plus" /></Card></Link>
    }
    else {
/*      menu = this.state.a2llist.map(a2l=>
        <Menu.Item key={a2l.id}><Link to="/actived">{a2l.version}</Link></Menu.Item>
      );*/

    }
    cards =
      <div className="row">
        { a2lcards }
        <Col>
          { template }
        </Col>
      </div>
    console.log(cards);
    return cards;
  }

  render(){
    return (
      <MainLayout>
        <div>
          {this.createMenu()}

        </div>
      </MainLayout>
    );
  }
}
