import * as React from 'react';

export interface GeoSearchBoxProps {
  location: string;
  onChange(): void;
}

export const GeoSearchBox = (props: GeoSearchBoxProps) => (
  <input
    className="geo-search-box"
    data-test="geoSearchBoxComponent"
    type="text"
    placeholder="City, Zip, or Current Location"
    value={props.location}
    onChange={props.onChange}
  />
);
