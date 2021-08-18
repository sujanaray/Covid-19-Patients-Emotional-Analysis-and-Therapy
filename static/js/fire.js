const cafelist=document.querySelector('#cafe-list')
const form= document.querySelector('#c1');

function renderAttributes(doc){
    let li=document.createElement('li');
    let name=document.createElement('span');
    let email=document.createElement('span');
    let password=document.createElement('span');
    let confirmpassword=document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent=doc.data().name;
    email.textContent=doc.data().email;
    password.textContent=doc.data().password;
    confirmpassword.textContent=doc.data().confirmpassword;
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(password);
    li.appendChild(confirmpassword);

    cafelist.appendChild(li);
}
//Getting data
db.collection('cafes').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
        renderAttributes(doc);
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        confirmpassword: form.confirmpassword.value

    });
})