let productBlocks = document.querySelectorAll('.product-grid-item.have-modal')
productBlocks.forEach((item)=>{
  const atcButton = item.querySelector('.mini-quick-add')
  const productModal = item.querySelector('.theme-quickadd-modal')
  const closeBtn = productModal.querySelector('.close-btn')
  
  atcButton.addEventListener('click',(e)=>{
    productModal.classList.add('active')
  })

  closeBtn.addEventListener('click', (e)=>{
      productModal.classList.remove('active')
  })

  productModal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('theme-quickadd-modal')){
      e.target.classList.remove('active')
    }
  })
})

function updateVariantId() {
  var selectedOptions = [];
  {% for option in product_block.options_with_values %}
    selectedOptions.push(document.querySelector('select[name="options[{{ option.name | handleize }}]"]').value);
  {% endfor %}
  
  var matchingVariant = productVariants.find(function(variant) {
    return variant.options.map(function(option) { return option.toLowerCase().replace(/\s+/g, '-'); }).join('-') === selectedOptions.join('-');
  });
  
  if (matchingVariant) {
    console.log(matchingVariant)
    document.getElementById('variant-id').value = matchingVariant.id;
  }
}


let addToCartForm = document.querySelectorAll("form.custom-cart-add");
  // console.log(addToCartForm);
  addToCartForm.forEach((formItem)=>{
  let formData = new FormData(formItem);
  formItem.addEventListener('submit', (e)=>{
    e.preventDefault();
    updateVariantId();
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

