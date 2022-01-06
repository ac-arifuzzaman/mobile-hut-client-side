import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import Header from './Pages/Header/Header';
import Register from './Pages/Login/Register/Register';
import MoreProducts from './Pages/MoreProducts/MoreProducts';
import MyOrder from './Pages/OrdeNow/MyOrder';
import OrderNow from './Pages/OrdeNow/OrderNow';
import AddReview from './Pages/Review/AddReview';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>

          <Routes>

            <Route path="/home" element={<Home />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/moreproduct" element={<MoreProducts />}>
            </Route>

            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/dashboard/*" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
            </Route>
            <Route path="/ordernow/:itemId" element={<PrivateRoute>
              <OrderNow />
            </PrivateRoute>}></Route>
            <Route path="/myorders" element={<PrivateRoute>
              <MyOrder />
            </PrivateRoute>}></Route>
            <Route path="/addReview" element={<PrivateRoute>
              <AddReview />
            </PrivateRoute>}></Route>
          </Routes>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
