let productBlocks = document.querySelectorAll('.product-grid-item.have-modal')
productBlocks.forEach((item)=>{
  let atcButton = item.querySelector('.mini-quick-add')
  atcButton.addEventListener('click',(e)=>{
    let modalID = e.target.getAttribute('data-quickadd-modal');
    alert(modalID);
  })
})

let addToCartForm = document.querySelectorAll("form.custom-cart-add");
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
      alert('Product Added in Cart');
      return response.json();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  })
})