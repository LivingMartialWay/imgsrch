 import React from 'react';
 import './SearchBar.css';
 import logo from'./imgs/db.png';

 class SearchBar extends React.Component {
   state = { term: '' };

   onFormSubmit = event => {
     event.preventDefault();

     this.props.onSubmit(this.state.term);
   };


   render() {
     return (
       <div className="ui segment">
        <img src={logo} alt="Daniel" className="header__logo"></img>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Dan's Top-10 Image Search</label>
            <input type="text"
             value={this.state.term}
             onChange={(e) => this.setState({ term: e.target.value})}
             />
          </div>
        </form>
     </div>
     );
   }
 }

export default SearchBar;
