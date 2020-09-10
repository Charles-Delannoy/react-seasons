import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './index.css'

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: "" };
  // }
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  // componentDidUpdate() {
  //   console.log("my component was just updated - it rerendered")
  // }

  // componentWillUnmount() {

  // }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div className="error-message">Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Waiting geolocation authorization...'/>
  }

  // React says we have to define render!!
  render() {
    return (
      <div className='container'>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
