import Home from '../../src/pages/index';
import { render } from '../testUtils';

describe('Index page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
