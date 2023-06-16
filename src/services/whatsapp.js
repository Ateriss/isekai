const botId = '107481242381926';
const phoneNbr = '51931059256';
let bearerToken = 'EAAEMIZBAWEekBAKREag4UzZC4c2qXvyAw988w3ZBte8zsp3wSzr3L99R5wG6aCN7BfbZCRHbR2zR8E77AMCRecKGH5CkrMpT5ZCPaCCPGdBc6FmqsOUB9w7vZB23henZC7DCCxGZAa42AAuUogCU6ky9Jb1HizaCXwYRMJ74AvGgNJxEH2CyOYdVrwquxtQyPVexZBAweXfbvQAZDZD';

const url = `https://graph.facebook.com/v17.0/${botId}/messages`;

const data = {
    messaging_product: 'whatsapp',
    to: phoneNbr,
    type: 'template',
    //cambiar variable usuario
    template:{
        name: 'hello_world',
        language: { code: 'en_US '}
    }
};

const postReq = {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    json:true
};

fetch(url, postReq)
    .then(data => {
        return data.json
    })
    .then(res =>{
        console.log(res)
    })
    .catch(error => console.log(error));