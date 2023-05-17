import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store'
import './index.css';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', 
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);