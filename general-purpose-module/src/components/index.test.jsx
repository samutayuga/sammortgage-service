import {describe,expect, it} from 'vitest'
import renderer from 'react-test-renderer'
import Greeting from './index.jsx';
import React from 'react'

describe('Greeting Component',()=>{
    it('Greeting component renders correctly',()=>{
        const component = renderer.create(
            <Greeting/>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('prop working',()=>{
        const component = renderer.create(
            <Greeting message={'Universe'}/>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
}
)