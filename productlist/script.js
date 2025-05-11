const products = [
  {
    id: '1',
    title: 'Smartphone XYZ',
    price: 29999,
    image: 'https://via.placeholder.com/300?text=Smartphone+XYZ',
    description: 'Smartphone XYZ features a stunning display, long-lasting battery, and high-performance processor, making it perfect for gaming and productivity. Experience seamless multitasking and sharp photography with the triple-lens camera. Sleek design meets cutting-edge technology for the ultimate mobile experience.'
  },
  {
    id: '2',
    title: 'Laptop Pro 15',
    price: 89999,
    image: 'https://via.placeholder.com/300?text=Laptop+Pro+15',
    description: 'Laptop Pro 15 combines speed, power, and efficiency with a sleek design. Ideal for creators and professionals, it boasts a powerful processor, vibrant display, and extended battery life. Work and play with unmatched productivity and clarity on the go.'
  },
  {
    id: '3',
    title: 'Bluetooth Headphones',
    price: 4499,
    image: 'https://via.placeholder.com/300?text=Bluetooth+Headphones',
    description: 'Enjoy wireless freedom and exceptional sound quality with our Bluetooth Headphones. Built for comfort and long listening sessions, they deliver crisp audio, deep bass, and reliable connectivity. Great for commuting, workouts, or home use.'
  },
  {
    id: '4',
    title: 'Smart Watch',
    price: 6999,
    image: 'https://via.placeholder.com/300?text=Smart+Watch',
    description: 'Track your fitness and stay connected with the Smart Watch. Monitor heart rate, steps, and sleep while receiving calls and notifications. With a stylish design and customizable interface, it’s your perfect everyday companion.'
  },
  {
    id: '5',
    title: 'DSLR Camera',
    price: 45000,
    image: 'https://via.placeholder.com/300?text=DSLR+Camera',
    description: 'Capture stunning photos and videos with the DSLR Camera. Featuring a high-resolution sensor and fast autofocus, it’s perfect for enthusiasts and professionals. Record memories in rich detail and explore your creative potential.'
  },
  {
    id: '6',
    title: 'Wireless Mouse',
    price: 899,
    image: 'https://via.placeholder.com/300?text=Wireless+Mouse',
    description: 'Enhance your workflow with this ergonomic Wireless Mouse. Enjoy precise control, quick response, and cable-free convenience. Ideal for both casual use and professional work setups.'
  },
  {
    id: '7',
    title: 'Gaming Keyboard',
    price: 2199,
    image: 'https://via.placeholder.com/300?text=Gaming+Keyboard',
    description: 'Level up your gaming with this RGB-backlit Gaming Keyboard. Mechanical keys ensure swift response and tactile feedback, enhancing gameplay and productivity. Built to endure intense gaming sessions.'
  },
  {
    id: '8',
    title: 'Fitness Band',
    price: 2999,
    image: 'https://via.placeholder.com/300?text=Fitness+Band',
    description: 'Stay on top of your health goals with this lightweight Fitness Band. Track activity, heart rate, and sleep with precision. Water-resistant and stylish, it’s perfect for daily wear and fitness enthusiasts.'
  },
  {
    id: '9',
    title: 'Tablet 10 Inch',
    price: 17499,
    image: 'https://via.placeholder.com/300?text=Tablet+10+Inch',
    description: 'The 10 Inch Tablet is your portable entertainment and productivity hub. Stream movies, attend meetings, or browse the web on a vivid display with powerful speakers and a long battery life.'
  },
  {
    id: '10',
    title: 'Power Bank',
    price: 1499,
    image: 'https://via.placeholder.com/300?text=Power+Bank',
    description: 'Charge your devices on the go with this compact Power Bank. With high capacity and fast charging, it’s perfect for travel or emergencies. Sleek and lightweight design fits in any bag.'
  }
];

function getProductById(id) {
  return products.find(product => product.id === id);
}

function viewProduct(id) {
  localStorage.setItem('selectedProduct', id);
  window.location.href = 'product-details.html';
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}

function addToCartFromDetail() {
  const id = localStorage.getItem('selectedProduct');
  addToCart(id);
}

window.onload = function () {
  if (window.location.pathname.includes('product-details.html')) {
    const id = localStorage.getItem('selectedProduct');
    const product = getProductById(id);
    if (product) {
      document.getElementById('product-img').src = product.image;
      document.getElementById('product-title').textContent = product.title;
      document.getElementById('product-price').textContent = `Price: ₹${product.price}`;
      document.getElementById('product-description').textContent = product.description;
    }
  }
};
