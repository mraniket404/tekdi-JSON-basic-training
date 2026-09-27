// ==========================================
// JavaScript JSON - Loading JSON
// ==========================================

// 1. Load a single JSON object
async function loadCustomer() {
  try {
    const response = await fetch("./customer.json");

    // Check HTTP response
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Convert JSON text into JavaScript value
    const customer = await response.json();

    console.log("Customer Data:");
    console.log(customer);

    console.log("Customer Name:", customer.name);
    console.log("Customer City:", customer.city);
    console.log("Member:", customer.member);
  } catch (error) {
    console.error("Error loading customer:", error.message);
  }
}


// 2. Load a JSON array
async function loadProducts() {
  try {
    const response = await fetch("./products.json");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const products = await response.json();

    console.log("\nProducts:");
    console.log(products);

    // Access first product
    console.log("First Product:", products[0].name);
    console.log("First Product Price:", products[0].price);

    // Loop through products
    products.forEach((product) => {
      console.log(`${product.name} - $${product.price}`);
    });
  } catch (error) {
    console.error("Error loading products:", error.message);
  }
}


// 3. Load multiple JSON files simultaneously
async function loadAllData() {
  try {
    const [customerResponse, productsResponse] = await Promise.all([
      fetch("./customer.json"),
      fetch("./products.json")
    ]);

    if (!customerResponse.ok) {
      throw new Error("Failed to load customer.json");
    }

    if (!productsResponse.ok) {
      throw new Error("Failed to load products.json");
    }

    const customer = await customerResponse.json();
    const products = await productsResponse.json();

    console.log("\nAll Data Loaded:");
    console.log("Customer:", customer);
    console.log("Products:", products);
  } catch (error) {
    console.error("Error:", error.message);
  }
}


// Call functions
loadCustomer();
loadProducts();
loadAllData();