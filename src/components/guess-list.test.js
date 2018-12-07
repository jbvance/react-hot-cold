import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders with correct guesses', () => {
        const wrapper = mount(<GuessList guesses={[10, 20, 30, 40]}/>);
        expect(wrapper.prop('guesses').length).toEqual(4);
    });
});