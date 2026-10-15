import{expect, test}from '@playwright/test'
test.describe("playwright assertion methods",()=>
{
    test("gereric assertion test1",async ()=>
    {
        var value=1;
        expect(value).toBe(1)
  });
  test("verify all test should be thiere",async()=>
{
    class Example{}
    expect(new Example()).toEqual(expect.any(Example));
        
    
    expect({prop:1}).toEqual({prop:expect.any(Number)})

    expect('good morning').toEqual(expect.any(String));

})

test("verify anything in the value expect null and undefined",async()=>
{
    
   var data={prop:1}
   expect(data).toEqual({prop: expect.anything()})
   
//    var data2={prop:undefined}//it will faile becuse it expect anything but will recive undefined
//    expect(data2).toEqual({prop: expect.anything()})
})

test("array contains some value",async()=>
{
    expect([1, 2, 3]).toEqual(expect.arrayContaining([3, 1]));
    expect([1, 2, 3]).toEqual(expect.arrayContaining([5, 1,4]));//this will fail becuase f 5 and 4 not conatin arrey

    expect([1, 2, 3]).not.toEqual(expect.arrayContaining([1, 4]));

})
test("Match instance of a class",async()=>
{
    // Match instance of a class.
class Example {}
expect([new Example(), new Example()]).toEqual(expect.arrayOf(Example));

// Match any string.
expect(['a', 'b', 'c']).toEqual(expect.arrayOf(String));
})
  
})