let addToCartForm = document.querySelector('#theme-cart-add');
let formData = new FormData(addToCartForm);

addToCartForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    alert('Product Added in Cart');
    return response.json();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
})

