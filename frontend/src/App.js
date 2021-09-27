import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { GetAllProducts } from './services/fakestore.service';
import { seProducts } from './store/actions/products';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Footer from './components/footer/Footer.jsx';
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Products = React.lazy(() => import('./pages/Products/Products'));

const theme = createTheme({
  palette: {
    primary: {
      main: pink['600'],
    },
    secondary: {
      main: '#000',
    }
  }
})

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    GetAllProducts().then((response) => {
      console.log(response);
      dispatch(seProducts(response));
    })
  }, [dispatch]);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route path='/products'><Products /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
        {/* <Footer /> */}
      </ThemeProvider>
    </HashRouter>

  )
}

export default App
