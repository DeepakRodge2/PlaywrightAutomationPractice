export const common_url="https://api.restful-api.dev/objects"

export const ADD_object_data={
    request_body:{
               "name": "Apple MacBook Pro 16",
              "data": {
              "year": 2019,
               "price": 1849.99,
              "CPU model": "Intel Core i9",
              "Hard disk size": "1 TB"
         }
    },
    headers:  {"Content-Type" :"application/json"}
}

export const Update_object_data={
    request_body:{
               "name": "Apple MacBook Pro 19",
              "data": {
              "year": 2026,
               "price": 2020.99,
              "CPU model": "Intel Core i15",
              "Hard disk size": "2 TB"
         }
    },
    headers:  {"Content-Type" :"application/json"}

}


export const Patch_object_data={
    request_body:{
               "name": "sumsung ultra",
              "data": {
              "year": 2026,
               "price": 2020.99,
              "CPU model": "Intel Core i15",
              "Hard disk size": "2 TB"
         }
    },
    headers:  {"Content-Type" :"application/json"}
}

export const delete_object_data="https://api.restful-api.dev/objects/ff808181a09d98f701a168285416699c"

/////////////////////////////////////////////////////////////////////////////////////////////////

export const gorest_server="https://gorest.co.in"
export const get_all_user_url=`${gorest_server}/public/v2/users`
export const get_one_user_url=`${gorest_server}/public/v2/users/8680363`
export const Bearer_token="54aa74248a525f8f194195b4ef6fd5441bcc5b0a1617c77d2a28afac06b7beb6"
export const go_rest_headers= {Authorization: `Bearer ${Bearer_token}`}
