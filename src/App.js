import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import Home from './Components/Home/Home'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import SidePanel from './Components/SidePanel/SidePanel'
import Profile from './Components/Profile/Profile'
function App() {
	const id=3
	const showToast = (type,message) => {
		switch(type){
			case 0:
				toast.warning(message)
				break;
			case 1:
				toast.success(message)
				break;
		}
	}
	return (
		<Router>
			<ToastContainer 
				autoClose= {2000}
				hideProgressBar={true}
				position = {toast.POSITION.TOP_RIGHT}
			/>
			<Switch >
				<Route exact path="/" component = {()=><Home id={id}/>} />
				<Route path="/signin" component = {()=><SignIn showToast={showToast}/>} />
				<Route path="/signup" component = {()=><SignUp showToast={showToast} />} />
				<Route path="/profile" component = {()=><Profile showToast={showToast} />} />
				<Route path="/chat" component = {()=><SidePanel showToast={showToast} />} />
			</Switch>
		</Router>
	);
}

export default App;
