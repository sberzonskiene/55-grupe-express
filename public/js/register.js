const formDOM = document.forms[0];
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');

formDOM.addEventListener('submit', e => {
    e.preventDefault();

    const clientData = { 
        username: usernameDOM.value,
        password: passwordDOM.value,
    }; 
    /*const data = {
        username: username,
        password: password,
    };  arba galima ir taip rasyti, jei objekto raktas sutampa su kintamojo pavadinimu, pavyzdys zemiau

    const data = { username, password }; */

    // dazniausiai naudojami sie pagrindiniai 5 metodai, parasome, kokio reikia:
    fetch('/api/register', {   //kai klientas issiuncia duomenis
    //  method: 'GET',
    //  method: 'PATCH',
    //  method: 'PUT',
    //  method: 'DELETE',
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify(clientData),
    })
        .then(res => res.json())  // kai klientas gauna duomenis
        .then(data => {
            switch (data.status) {
                case 'succses':
                    console.log(data.msg);
                    break; 

                case 'error':
                    console.log(data.msg);
                    break;        
            }   
        })
        .catch(err => {
            console.log(err);   
        });
});   