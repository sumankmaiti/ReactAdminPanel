import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { productInputs, userInputs } from './formSource';
import './styles/dark.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
	const {darkMode} = useContext(DarkModeContext)
	const loggedIn = false
	const RequiredAuth = ({children}) => {
		return loggedIn ? children : <Navigate to='/login'/>
	}

  return (
    <div className= {darkMode ? "app dark" : "app"}>
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route path='login' element={<Login />} />
					<Route index element={<RequiredAuth> <Home /> </RequiredAuth>} />
					<Route path='users'>
						<Route index element={<RequiredAuth> < List /> </RequiredAuth>} />
						<Route path=':userid' element={<RequiredAuth> <Single /> </RequiredAuth>} />	
						<Route path='new' element={<RequiredAuth><New input={userInputs} title='Add new User' /></RequiredAuth>} />
					</Route>
					<Route path='products'>
						<Route index element={<RequiredAuth>< List /></RequiredAuth>} />
						<Route path=':productid' element={<RequiredAuth><Single /></RequiredAuth>} />	
						<Route path='new' element={<RequiredAuth><New input={productInputs} title='Add new Product' /></RequiredAuth>} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
