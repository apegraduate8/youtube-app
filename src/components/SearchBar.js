import React from 'react';
import ReactDOM from 'react-dom';

class SeacrhBar extends React.Component {
  state = { text: '' };

  onInputChange = (event) => {
      this.setState({ text: event.target.value });
  };

  onFormSubmit = (event) => {
      event.preventDefault();

      // call callback from parent component
      this.props.onFormSubmit(this.state.text);
  };

  render() {
    return(
        <div className=" search-bar ui segment">
            <form onSubmit={ this.onFormSubmit } className="ui form">
                <div className="field">
                    <label> Search </label>
                    <input
                      value={ this.state.text }
                      type="text"
                      onChange={ this.onInputChange }
                    />
                </div>
            </form>
        </div>
    );
  }
}

export default SeacrhBar;
