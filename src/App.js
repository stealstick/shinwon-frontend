import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/main/Main'
import Center from './pages/center/Center'
import Introduction from './pages/introduction/Introduction'
import Service from './pages/service/Service'
 
function App() {
  	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route exact path="/center" component={Center}/>
				<Route exact path="/introduction" component={Introduction}/>
				<Route exact path="/service" component={Service}/>
			</Switch>
		</BrowserRouter>
  	);
}

export default App;
