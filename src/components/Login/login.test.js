import React from 'react'
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import ConnectedLogin ,{Login} from './login'


describe('Dumb Component',()=>{
    const wrapper = shallow(<Login />);
    test('Load without crashing' ,()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
    });

    test('check it contains form with three input',()=>{
        expect(wrapper.find('form').length).toBe(1)
        expect(wrapper.find('input').length).toBe(3);
        expect(wrapper.containsMatchingElement(<input type="text" name="email"/>)).toEqual(true)
        expect(wrapper.containsMatchingElement(<input type="password" name="password"/>)).toEqual(true)
        expect(wrapper.containsMatchingElement(<input type="button" value="Login"/>)).toEqual(true)
    })
});
