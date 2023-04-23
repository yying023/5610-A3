import { render, screen, fireEvent } from '@testing-library/react';
import { UserForm } from '../pages/UserForm';
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};
describe('UserForm', () => {
    const user = {
        _id: '1234',
        username: 'testuser',
        email: 'testuser@example.com',
    };
    const setOperate = jest.fn();

    beforeEach(() => {
        render(<UserForm setOperate={setOperate} user={user} />);
    });

    test('renders UserForm correctly', () => {
        expect(screen.getByText('User Detail')).toBeInTheDocument();
        expect(screen.getByLabelText('User Name')).toHaveValue('testuser');
        expect(screen.getByLabelText('Email')).toHaveValue('testuser@example.com');
    });

    test('cancels form', () => {
        fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
        expect(setOperate).toHaveBeenCalledWith('none');
    });
});
