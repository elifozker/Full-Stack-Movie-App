import Profile from "./pages/profile/Profile"
import Description from "./pages/description/Description";
import {

  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
  
} from "react-router-dom";
import NavBar from "./components/NavBar";
import  Movie  from "./pages/Movie/Movies";
import {Home} from "./pages/Home";
import Watchlist from "./pages/watchlist/Watchlist";
import Favourites from "./pages/favourites/Favourites";
import { AuthContext } from "./context/authContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {useContext} from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Admin from "./pages/admin/Admin";


function App() {

  const {currentUser}=useContext(AuthContext);//eğer login yapılmamışsa,home profile gibi children sayfaları giriş yapamamalıyım.
  const queryClient = new QueryClient();
 /* return (
    <div className="App">
     <Router>
        
        <div className="pages">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/movies" component={Movie} />
            <Route path="/watchlist" component={Watchlist} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/description/:movieid" component={Description}/>
            <Route path="/profile/" component={Profile}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

          </Switch>
        </div>
      </Router>


    </div>
  );
*/
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div >
          <NavBar />
          <Outlet />
        </div>
      </QueryClientProvider>

    );
  };
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/watchlist",
          element: <Watchlist />,
        },
        {
          path: "/favourites",
          element: <Favourites />,
        },
        {
          path: "/movies",
          element: <Movie />,
        },
        {
          path: "/description/:movieid",
          element: <Description />,
        },
       

      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },

  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

  /*const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        
        <div style={{ flex: 6 }}>
            <Outlet />

          </div>
      </div>
      </QueryClientProvider>
    );
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
        
    },
    {
      path: "/description/:movieid",
      element: <Description/>,
    },
    {
      path: "/profile/:userid",
      element: <Profile/>,
    },
  ]);
  return (
    <div>
        <Description/>
  </div>
  );*/




export default App;