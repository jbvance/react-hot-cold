import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it ('Renders without crashing', () => {
        shallow(<GuessCount />)
    });

   it ('sets props when rendered', () => {
        const wrapper = mount(<GuessCount guessCount={3} />);
        expect(wrapper.prop('guessCount')).toEqual(3);
   });
    
});