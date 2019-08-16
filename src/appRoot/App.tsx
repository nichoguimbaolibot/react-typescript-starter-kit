import React, { Component } from 'react';
import Router from './routes';
import AppContext from './App.context';
import Layout from 'components/Layout/Layout';

class App extends Component<any, any> {
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.setState({
      isLoggedIn: isLoggedIn === 'true',
    });
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
    localStorage.setItem('isLoggedIn', 'true');
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
    localStorage.removeItem('isLoggedIn');
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <AppContext.Provider
        value={{
          isLoggedIn,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout,
        }}
      >
        <Layout>
          <Router isLoggedIn={isLoggedIn} />
        </Layout>
      </AppContext.Provider>
    );
  }
}

export default App;
