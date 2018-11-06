const container = document.getElementById('container');
const container2 = document.getElementById('container2');

container.innerHTML = `<img id="img" src="${body.p_ref_images[0]}" alt="imagen">`;

enviar.addEventListener('click', () => {

  body.customer_username =  document.getElementById('name').value;
  container2.innerHTML =`<h5>${body.customer_username}</h5>`;
  // console.log(body.customer_username);
  

  console.log(body.customer_username);
});
