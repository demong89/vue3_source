import {add} from './../src/reactivity/index'

it('init',()=>{
  expect(true).toBe(true)
  expect(add(1,1)).toBe(2)
})