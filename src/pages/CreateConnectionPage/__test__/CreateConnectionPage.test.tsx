/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-wait-for-snapshot */
/* eslint-disable testing-library/no-render-in-setup */
import {
    cleanup,
    render,
    waitFor,
    screen,
    fireEvent,
    act,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreateConnectionPage from './../CreateConnectionPage';
import userEvent from '@testing-library/user-event';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
}));

const Component = () => (
    <BrowserRouter>
        <CreateConnectionPage />
    </BrowserRouter>
);

describe('connection page', () => {
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

    it('should change data when select filter', async () => {
        expect(screen.getAllByRole('button')).toHaveLength(4);
    });

    it('should render page of s3 when click S3 button', async () => {
        const s3Btn = screen.getByText('S3');
        fireEvent.click(s3Btn);
        expect(screen.getByText('Bucket Name')).toBeInTheDocument();
    });

    it('cannot create connection when field is null', async () => {
        const s3Btn = screen.getByText('S3');
        fireEvent.click(s3Btn);
        const createBtn = screen.getByText('Create Connection', {
            selector: 'button',
        });
        expect(createBtn).toBeDisabled();
    });

    it('able to click when fill the require field', async () => {
        const s3Btn = screen.getByText('S3');

        fireEvent.click(s3Btn);

        await act(async() => {
            fireEvent.change(screen.getByTestId('name'), {
                target: { value: 'testing' },
            });
        });
        
        const createBtn = screen.getByText('Create Connection', {
          selector: 'button',
        });

        expect(createBtn).not.toBeDisabled();
    });
});
