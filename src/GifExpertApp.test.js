import React from 'react';
import {shallow} from 'enzyme';
import ListComponent from './components/ListComponent';

describe('Pruebas en <ListComponent/>',()=>{
    test('Debe mostrarse correctamente',()=>{

        const wrapper = shallow(<ListComponent/>)
        expect(wrapper).toMatchSnapshot()
    })
})

