// services/api.js

const BASE_URL =
"https://script.google.com/macros/s/xxxxxxxx/exec";

export async function postData(data){

    const response = await fetch(BASE_URL,{
        method:"POST",
        body:JSON.stringify(data)
    });

    return response.json();
}