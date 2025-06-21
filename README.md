# Product Dashboard

A simple React dashboard application for managing products.  
You can add, view, and (optionally) edit or delete products. All data is stored in your browser’s localStorage.

## Features

- **Dashboard View:**  
  View all products in a responsive grid with modern design.

- **Add Product:**  
  Fill out a form to add a new product with name, price, category, description, and image URL.  
  If no image is provided, a default placeholder image is used.

- **Delete Product:**  
  Remove products from the dashboard and localStorage.

- **Responsive Design:**  
  Works well on desktop and mobile devices.

- **Modern UI:**  
  Styled with Tailwind CSS and includes a gradient navbar.

- **LocalStorage Persistence:**  
  All products are saved in your browser and persist across reloads.

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```
2. **Start the development server:**
   ```
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/components/Navbar.jsx` – Navigation bar
- `src/components/ProductCard.jsx` – Product display card
- `src/pages/Dashboard.jsx` – Main dashboard page
- `src/pages/Add.jsx` – Add product form
- `src/pages/Edit.jsx` – (Optional) Edit product page

## Customization

- You can change the default image in `src/assets/images.png`.
- To reset all products, clear your browser’s localStorage.

## License

This project is for learning and demonstration purposes.