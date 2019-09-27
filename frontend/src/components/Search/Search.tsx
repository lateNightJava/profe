import * as React from 'react';
import { SearchBox } from './SearchBox';
import { GeoSearchBox } from './GeoSearchBox';

export class Search extends React.Component<{}, {}> {
  render() {
    return (
      <div
        className="search-container"
        data-test="searchComponent"
      >
        <SearchBox />
        <GeoSearchBox />
      </div>
    );
  }
}
