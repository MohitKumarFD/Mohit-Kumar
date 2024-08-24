let productBlocks = document.querySelectorAll('.product-grid-item.have-modal')
productBlocks.forEach((item)=>{
  const atcButton = item.querySelector('.mini-quick-add')
  const productModal = item.querySelector('.theme-quickadd-modal')
  
  atcButton.addEventListener('click',(e)=>{
    productModal.classList.add('active')
  })

  productModal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('theme-quickadd-modal')){
      e.target.classList.remove('active')
    }
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