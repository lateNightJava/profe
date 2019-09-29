import * as React from 'react';
import './SearchBox.scss';

interface SearchBoxProps {
  search: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchBox: React.FC<SearchBoxProps> = props => (
  <input
    className="search-box"
    data-test="searchBoxComponent"
    type="text"
    placeholder="Guitar, Piano, Drum..."
    value={props.search}
    onChange={props.onChange}
  />
);

export {
  SearchBox,
  SearchBoxProps,
};
