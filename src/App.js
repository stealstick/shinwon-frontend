import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/main/Main'
import Center from './pages/center/Center'
import Introduction from './pages/introduction/Introduction'
import Service from './pages/service/Service'
import Foundation from './pages/foundation_introduction/Foundation'
import OfficialDetail from './pages/service/components/OfficialDetail'
 
function App() {
  	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route exact path="/center/:num" component={Center}/>
				<Route exact path="/introduction/:num" component={Introduction}/>
				<Route exact path="/service/:num" component={Service}/>
				<Route exact path="/service/:num/:officialid" component={OfficialDetail}/>
				<Route exact path="/foundation/:num" component={Foundation}/>
			</Switch>
		</BrowserRouter>
  	);
}

export default App;
