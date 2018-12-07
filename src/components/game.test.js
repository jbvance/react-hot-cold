import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe ('<Game />', () => {
    it ('Renders without crashing', () => {
        shallow (<Game />);
    });

    it ('Updates guesses state when guesses are made', () => {
        const wrapper = shallow(<Game />);
        wrapper.instance().makeGuess(20);
        wrapper.update(); 
        wrapper.instance().makeGuess(30);
        wrapper.update();
        expect(wrapper.state('guesses').length).toEqual(2);
    });

    it('Resets state when game is restarted', () => {
        const wrapper = shallow(<Game />);
        wrapper.instance().restartGame();
        wrapper.update();       
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('guesses').length).toEqual(0);
        expect(wrapper.state('auralStatus')).toEqual('');
    });

})
