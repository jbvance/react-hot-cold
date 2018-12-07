import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it ('Renders without crashing', () => {
        shallow(<TopNav />)
    });

    it('calls restart game callback', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback}/>);
        wrapper.find('a.new').simulate('click');
        expect(callback).toHaveBeenCalled();
    })

    it('calls get status callback', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onGenerateAuralUpdate={callback}/>);
        wrapper.find('a.status-link').simulate('click');
        expect(callback).toHaveBeenCalled();
    })

    
});

