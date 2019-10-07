import * as React from 'react';
import { SearchBox } from './SearchBox';
import { GeoSearchBox } from './GeoSearchBox';
import { Input } from '../Utils/Input';
import './Search.scss';

interface SearchProps {
  className?: string;
}

interface SearchState {
  location: string;
  search: string;
}

class Search extends React.Component<SearchProps, SearchState> {
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
        className={`search ${this.props.className || ''}`}
        data-test="searchComponent"
      >
        <div
          className="search-input-container"
        >
          <span>learn:</span>
          <Input
            className="search-input"
            onChange={this.handleChange('search')}
            placeholder="Guitar, Piano, Drums..."
            type="text"
            value={this.state.search}
          />
        </div>
        <div
          className="search-input-container"
        >
          <span>in:</span>
          <Input
            className="search-input"
            onChange={this.handleChange('location')}
            placeholder="City, Zip, or Current Location"
            type="text"
            value={this.state.location}
          />
        </div>
        <i className="fa fa-search"></i>
      </div>
    );
  }
}

export {
  Search,
  SearchState,
};
