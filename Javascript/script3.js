  let cafeName = "Tony's Café";        
  let itemPrice = 180;        // e.g. 150
  let isAvailable = false;  // true or false
  let specialDish = undefined;          // leave undefined
  let discount = null;      // intentionally empty

  // ===============================
  // TASK 2: Use typeof yourself!
  // ===============================
  // ❗ Use typeof operator to check the data type of each variable below
  // Example: let cafeNameType = typeof cafeName;
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

  // 💡 Tip: Try changing data types (like price to "150" or availability to "true")
  // and see how the type displayed changes on the UI!