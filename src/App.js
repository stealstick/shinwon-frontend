import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/main/Main'
import Center from './pages/center/Center'
import Introduction from './pages/introduction/Introduction'
import Service from './pages/service/Service'
import Foundation from './pages/foundation_introduction/Foundation'
import OfficialDetail from './pages/service/components/OfficialDetail'
import RecruitmentList from './pages/service/components/RecruitmentList'
import RecruitmentDetail from './pages/service/components/RecruitmentDetail'
import Rnd from './pages/r&d/Rnd'
import Personal from './pages/Personal'
import Sitemap from './pages/Sitemap'
 
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
				<Route exact path="/recruitment" component={RecruitmentList}/>
				<Route exact path="/recruitment/:id" component={RecruitmentDetail}/>
				<Route exact path="/rnd" component={Rnd}/>
				<Route exact path="/personal" component={Personal}/>
				<Route exact path="/sitemap" component={Sitemap}/>
			</Switch>
		</BrowserRouter>
  	);
}

export default App;
