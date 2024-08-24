let addToCartForm = document.querySelectorAll("[action='/custom/cart/add']");
  // console.log(addToCartForm);
  addToCartForm.forEach((formItem)=>{
  let formData = new FormData(formItem);
  formItem.addEventListener('submit', (e)=>{
    e.preventDefault();
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      // alert('Product Added in Cart');
      return response.json();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  })
})