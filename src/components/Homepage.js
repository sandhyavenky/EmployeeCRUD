import React from "react";
import {  Router, Link, Switch, Route } from "react-router-dom";
import {Container, Form, Badge} from 'react-bootstrap'

import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';
import history from './history';

const Homepage = (props) => {
  return(
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <div>
          <hr></hr>
          <Container fluid="sm" style={{paddingTop: 30, paddingBottom: 30}} >
            <Form.Group align="left"><h1>Employee Record: CRUD</h1></Form.Group>
            <Form><Form.Group align="left">
              <li><Link to={"/Create"}> Create New Details </Link></li>
              <li><Link to={"/Read"}> Display Records</Link></li>
              <li><Link to={"/Update"}> Update Records </Link></li>
              <li><Link to={"/Delete"}> Delete Details</Link></li>
            </Form.Group></Form>
            </Container>
          </div>
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
          <Route path="*">
             <h1><Badge variant="secondary" >404: Unknown Page! Please enter correct URL!</Badge></h1>
          </Route>
      </Switch>    
    </Router>
  )
}

export default Homepage
