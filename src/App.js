import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/main/Main'
import Center from './pages/center/Center'
import Introduction from './pages/introduction/Introduction'
import Service from './pages/service/Service'
import Foundation from './pages/foundation_introduction/Foundation'
 
function App() {
  	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route exact path="/center" component={Center}/>
				<Route exact path="/introduction" component={Introduction}/>
				<Route exact path="/service" component={Service}/>
				<Route exact path="/foundation" component={Foundation}/>
			</Switch>
		</BrowserRouter>
  	);
}

export default App;
