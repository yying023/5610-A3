import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserDetail from '../pages/UserDetail';
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};
describe('UserDetail', () => {
    const user = { username: 'test user', email: 'testuser@example.com' };
    const setOperate = jest.fn();
    const authUser = {};

    it('renders user detail', () => {
        render(<UserDetail setOperate={setOperate} user={user} authUser={authUser} />);
        expect(screen.getByText('My Profile')).toBeInTheDocument();
        expect(screen.getByText(user.username)).toBeInTheDocument();
        expect(screen.getByText(user.email)).toBeInTheDocument();
    });

    it('calls setOperate function on edit button click', () => {
        render(<UserDetail setOperate={setOperate} user={user} authUser={authUser} />);
        const editButton = screen.getByText('Edit');
        userEvent.click(editButton);
        expect(setOperate).toHaveBeenCalledWith('edit');
    });
});
