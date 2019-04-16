import React, { Component } from 'react';
import Table from './Table';
import './App.css';
// import logo from './logo.svg';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
	// const name = 'Sergio';

	render() {

		const characters = [
			{
				name: 'Charlie',
				job: 'Janitor',
			},
			{
				name: 'Mc',
				job: 'Bouncer',
			},
			{
				name: 'Dee',
				job: 'Aspring Actress',
			},
			{
				name: 'Dennis',
				job: 'Bartender',
			},
		];

		return (
			<div className="Container">
				<Table characterData={characters} />
			</div>
		);
	}
}

export default App;
