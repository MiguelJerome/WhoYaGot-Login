import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  async function getPlayer() {
    const myPlayer = await fetch("https://api.sportsdata.io/v3/nhl/stats/json/PlayerSeasonStats/2023?key=df11543d3743432dac4ff406fc63e468");
    const response = await myPlayer.json();
    console.log(response)
}

getPlayer();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
