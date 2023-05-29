/* eslint-disable testing-library/no-wait-for-snapshot */
/* eslint-disable testing-library/no-render-in-setup */
import { cleanup, render, waitFor , screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const Component = () => (
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>
);

describe('home page', () => {
  beforeEach(async () => {
    render(<Component />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render and match the snapshot', async () => {
    const { asFragment } = render(<Component />);
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('navigate will be call when click create new connection', async () => {
    const createBtn = screen.getByText('Create Connection')
    fireEvent.click(createBtn)
    expect(mockedUsedNavigate).toBeCalled()
  });
});
