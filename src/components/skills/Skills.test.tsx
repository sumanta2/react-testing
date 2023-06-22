import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

describe('Skills', () => {
    const skills=['HTML','CSS','Javascript']
    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const linkElement = screen.getByRole('list');
        expect(linkElement).toBeInTheDocument();
    });

    test('renders a list of skills', () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    })
})

/*
    vdo 28
    in 'renders a list of skills' test we test the the all list element are render properly or not here getAllByRole() method select all <li/> tag which role is 'listitem' in the form of array an next line we compare the length of listItemElements which store the all selected <li/> tag, with the length of skills which provided data to Skills component to render list
 */

