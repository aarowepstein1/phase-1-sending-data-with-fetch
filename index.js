const formData = {
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
    },
    body: JSON.stringify(formData),
};


function submitData () {
    
   return fetch('http://localhost:3000/users', configurationObj)
    .then(resp => resp.json())
    .then(object => document.body.append(object.id))
    .catch( error => {
        document.body.append("Unauthorized Access");
    });
}
