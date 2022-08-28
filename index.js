// Add your code here
function submitData(str1, str2) {
    let user = {name: str1,email:str2};
    
let objData = {
    method: "POST",
    headers: {
        "content-type":"application/json",
        Accept:"application/json" 
    },
    body: JSON.stringify(user)
}

return fetch("http://localhost:3000/users", objData)
.then(response=> response.json())
.then(serverResponse => {
    return document.body.innerHTML = serverResponse.id
})
.catch(error=>document.body.innerHTML=error.message)
}


submitData("nicco","nicholasnjeru@gmail.com")