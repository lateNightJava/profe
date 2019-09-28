import * as React from 'react';
import { SearchBox } from './SearchBox';
import { GeoSearchBox } from './GeoSearchBox';

export interface SearchState {
  location: string;
  search: string;
}

export class Search extends React.Component<{}, SearchState> {
  state: SearchState = {
    location: '',
    search: '',
  }

  handleChange = (field: string) => (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ ...this.state, [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div
        className="search-container"
        data-test="searchComponent"
      >
        <SearchBox
          search={this.state.search}
          onChange={this.handleChange('search')}
        />
        <GeoSearchBox
          location={this.state.location}
          onChange={this.handleChange('location')}
        />
      </div>
    );
  }
}
