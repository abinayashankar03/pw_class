import {test,expect} from '@playwright/test'

test.describe("group1",()=>{

    test("test1",async({page})=>{
        console.log('1st test executed')
    })
    test("test2",async({page})=>{
        console.log('2nd test executed')
    })
    test("test3",async({page})=>{
        console.log('3rd test executed')
    })
})

test.describe('group2',()=>{

    test("test4",async({page})=>{
        console.log('4 th test executed')
    })
    test("test5",async({page})=>{
        console.log('5th test executed')
    })
})

