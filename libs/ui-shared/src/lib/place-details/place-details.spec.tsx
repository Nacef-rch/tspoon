import { render } from '@testing-library/react';

import PlaceDetails from './place-details';

describe('PlaceDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlaceDetails />);
    expect(baseElement).toBeTruthy();
  });
});
