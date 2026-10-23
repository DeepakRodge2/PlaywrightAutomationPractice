import { request ,expect} from '@playwright/test'
import{test} from '@playwright/test'
import { ADD_object_data, common_url, delete_object_data, get_all_user_url, get_one_user_url, go_rest_headers, Patch_object_data, Update_object_data } from '../test-data/api_testdata.ts'

test.describe("Api Automation",()=>
{
    test("first test case",async({request})=>
    {
        const respose=await request.get("https://api.restful-api.dev/objects")
        expect(respose).toBeOK()
        const JSONrespose=await respose.json()
        const statuscode=await respose.status()
        console.log(JSONrespose,statuscode)
        expect(JSONrespose.length).toBe(13)
        expect(statuscode).toBe(200)
    })
    test("second test case:get specific id detsils",async({request})=>
    {
        const respose=await request.get("https://api.restful-api.dev/objects/7")
        expect(respose).toBeOK()
        const JSONrespose=await respose.json()
        const statuscode=await respose.status()
        console.log(JSONrespose,statuscode)
       // expect(JSONrespose.length).toBe(13)
        expect(statuscode).toBe(200)
    })

    test("test case 3:Add new object",async({request})=>
    {
        const respose=await request.post(common_url,{ 
            data:ADD_object_data.request_body,
            headers:ADD_object_data.headers

        })
        expect(respose).toBeOK()
        const JSONrespose=await respose.json()
        const statuscode=await respose.status()
        console.log(JSONrespose,statuscode)
        expect(JSONrespose.name).toBe(ADD_object_data.request_body.name)
        expect(statuscode).toBe(200)
    })
    
    test("test case 4:update Add new object",async({request})=>
    {
        const respose=await request.post(common_url,{ 
            data:ADD_object_data.request_body,
            headers:ADD_object_data.headers

        })
        expect(respose).toBeOK()
        const JSONrespose=await respose.json()
        const statuscode=await respose.status()
        console.log(JSONrespose,statuscode)
        expect(JSONrespose.name).toBe(ADD_object_data.request_body.name)
        expect(statuscode).toBe(200)

        const newid=JSONrespose.id
        const updatedURL=`${common_url}/${newid}`
      //hit put method to update the multiple filed of object
        const resp2=await request.put(updatedURL,{

          data: Update_object_data.request_body,
          headers: Update_object_data.headers
        })

        expect(resp2).toBeOK()
        const resjson=await resp2.json()
        const respstatus= resp2.status()
        expect(resjson.name).toBe(Update_object_data.request_body.name)
        expect(respstatus).toBe(200)
        console.log("-------------------updated details--------------")
        console.log(resjson,respstatus)
    
        })
        
         test("test case 5:update object with patch method",async({request})=>
    {
        const respose=await request.post(common_url,{ 
            data:ADD_object_data.request_body,
            headers:ADD_object_data.headers

        })
        expect(respose).toBeOK()
        const JSONrespose=await respose.json()
        const statuscode=await respose.status()
        console.log(JSONrespose,statuscode)
        expect(JSONrespose.name).toBe(ADD_object_data.request_body.name)
        expect(statuscode).toBe(200)

        const newid=JSONrespose.id
        const updatedURL=`${common_url}/${newid}`
      //hit put method to update the multiple filed of object
        const resp2=await request.patch(updatedURL,{

          data: Patch_object_data.request_body,
          headers: Patch_object_data.headers
        })

        expect(resp2).toBeOK()
        const resjson=await resp2.json()
        const respstatus= resp2.status()
        expect(resjson.name).toBe(Patch_object_data.request_body.name)
        expect(respstatus).toBe(200)
        console.log("-------------------updated details--------------")
        console.log(resjson,respstatus)

    })
     
         test("test case 6:delete the object",async({request})=>
    {
        const Respose=await request.delete(delete_object_data)
    
        expect(Respose).toBeOK()
        const JSONrespose=await Respose.json()
        const statuscode=await Respose.status()
        console.log(JSONrespose,statuscode)
        expect(statuscode).toBe(200)
        console.log(JSONrespose,statuscode)

    })

     test("get all users with token authentication",async({request})=>
     {
         const response= await request.get(get_all_user_url,{
             headers: go_rest_headers

         })
         expect(response).toBeOK()
         const statuscode=await response.status()
         const JSONresponse=await  response.json()
         expect(JSONresponse).toBeInstanceOf(Array)
         console.log(JSONresponse,statuscode)
     })
     
     test("get one users with token authentication",async({request})=>
     {
         const response= await request.get(get_one_user_url,{
             headers: go_rest_headers

         })
         expect(response).toBeOK()
         const statuscode=await response.status()
         const JSONresponse=await  response.json()
         expect(JSONresponse).toMatchObject({ id: 8680363 })
         console.log(JSONresponse,statuscode)
     })

    })
