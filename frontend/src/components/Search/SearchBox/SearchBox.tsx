import * as React from 'react';

export interface SearchBoxProps {
  search: string;
  onChange(): void;
}

export const SearchBox = (props: SearchBoxProps) => (
  <input
    className="search-box"
    data-test="searchBoxComponent"
    type="text"
    placeholder="Guitar, Piano, Drum..."
    value={props.search}
    onChange={props.onChange}
  />
);
