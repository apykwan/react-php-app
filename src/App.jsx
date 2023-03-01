import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ListUser from './pages/ListUser';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
			<h5>React / PHP / MYSQL Stack APP</h5>
			<BrowserRouter>
				<Toaster />
				<Navbar />
				<Routes>
					<Route index element={<ListUser />} />
					<Route path="user/create" element={<CreateUser />} />
					<Route path="user/:id/edit" element={<EditUser />} />
				</Routes>
			</BrowserRouter>
		</div>
  )
}

export default App;
