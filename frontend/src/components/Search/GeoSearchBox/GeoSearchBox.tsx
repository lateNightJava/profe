import * as React from 'react';
import './GeoSearchBox.scss';

interface GeoSearchBoxProps {
  location: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const GeoSearchBox = (props: GeoSearchBoxProps) => (
  <input
    className="geo-search-box"
    data-test="geoSearchBoxComponent"
    type="text"
    placeholder="City, Zip, or Current Location"
    value={props.location}
    onChange={props.onChange}
  />
);

export {
  GeoSearchBox,
  GeoSearchBoxProps,
};
