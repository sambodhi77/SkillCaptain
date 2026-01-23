  let cafeName = "Tony's Café";        // e.g. "Tony's Café"
  let itemPrice = 180;        // e.g. 150
  let isAvailable = false;  // true or false
  let specialDish;          // leave undefined
  let discount = null;      // intentionally empty

  let cafeNameType = typeof cafeName;
  let itemPriceType = typeof itemPrice;
  let isAvailableType = typeof isAvailable;
  let specialDishType = typeof specialDish;
  let discountType = typeof discount;

  const inventoryDiv = document.getElementById("inventory");
  inventoryDiv.innerHTML = `
    <div class="inventory-item"><span>Café Name:</span> <span class="highlight">${cafeName}</span> (Type: ${cafeNameType})</div>
    <div class="inventory-item"><span>Item Price:</span> <span class="highlight">${itemPrice}</span> (Type: ${itemPriceType})</div>
    <div class="inventory-item"><span>Available:</span> <span class="highlight">${isAvailable}</span> (Type: ${isAvailableType})</div>
    <div class="inventory-item"><span>Special Dish:</span> <span class="highlight">${specialDish}</span> (Type: ${specialDishType})</div>
    <div class="inventory-item"><span>Discount:</span> <span class="highlight">${discount}</span> (Type: ${discountType})</div>
  `;
