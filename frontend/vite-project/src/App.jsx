import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ListingPage from './pages/Listing';
import DetailPage from './pages/Detail';

// Create an Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000', 
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/detail/:clientId" element={<DetailPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
