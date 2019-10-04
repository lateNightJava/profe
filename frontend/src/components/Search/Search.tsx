import * as React from 'react';
import { SearchBox } from './SearchBox';
import { GeoSearchBox } from './GeoSearchBox';
import { Input } from '../Utils/Input';
import './Search.scss';

interface SearchState {
  location: string;
  search: string;
}

class Search extends React.Component<{}, SearchState> {
  state: SearchState = {
    location: '',
    search: '',
  }

  handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ ...this.state, [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div
        className="search"
        data-test="searchComponent"
      >
        <Input
          className="search-input"
          onChange={this.handleChange('search')}
          placeholder="Guitar, Piano, Drum..."
          type="text"
          value={this.state.search}
        />
        <Input
          className="search-input"
          onChange={this.handleChange('location')}
          placeholder="City, Zip, or Current Location"
          type="text"
          value={this.state.location}
        />
      </div>
    );
  }
}

export {
  Search,
  SearchState,
};

// <SearchBox
//   search={this.state.search}
//   onChange={this.handleChange('search')}
// />
// <GeoSearchBox
//   location={this.state.location}
//   onChange={this.handleChange('location')}
// />
