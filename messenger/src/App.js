import './App.css';
import React from 'react';

class SubjetTitle extends React.Component {
  render() {
    return (
      <header className='title-header'>
        {this.props.value}
      </header>
    )
  }
}

// class MainLogo extends React.Component {
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           What shall I do with my life?
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     )
//   }
// }

function App() {
  return (
    <div>
      <div className='SubjectTitle'>
        <SubjetTitle value="okayy" />
      </div>
    </div>
  );
}

export default App;
