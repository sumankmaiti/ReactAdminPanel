import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { productInputs, userInputs } from './formSource';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='users'>
						<Route index element={< List />} />
						<Route path=':userid' element={<Single />} />	
						<Route path='new' element={<New input={userInputs} title='Add new User' />} />
					</Route>
					<Route path='products'>
						<Route index element={< List />} />
						<Route path=':productid' element={<Single />} />	
						<Route path='new' element={<New input={productInputs} title='Add new Product' />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
