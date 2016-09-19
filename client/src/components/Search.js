import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Results from './Results.js';
import API from './../stores/api.js';

const style = {
  margin: 12
};



class SearchComponent extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showResultsState: false,
      resultsList : [],
      searchVal : ''
    };
  }

  getResults(){
   this.setState({resultsList : API.search(this.state.searchVal)});
   this.setState({showResultsState: true});
  }
  
  handleChange(event){
    this.setState({searchVal : event.target.value})
  }

  handleKeyPress(event){
    if(event.key === 'Enter') {
      this.getResults();
    }
  }

  render(){
    const showResultsBool = this.state.showResultsState;
    const list = this.state.resultsList;

    return(
      <div onKeyPress={this.handleKeyPress.bind(this)}>
        <TextField id="search" onChange={this.handleChange.bind(this)} value={this.state.searchVal} />
        <RaisedButton onClick={this.getResults.bind(this)} label="Search"  primary={true} style={style} />
        {showResultsBool &&
          <Results data={list}/>
        }
      </div>
    )
  }
}

export default SearchComponent;