Here’s a simple README file based on your project setup:

---

# E-commerce Listing Page

This is a React-based E-commerce Listing Page assignment built following the provided Figma design. The application includes features like product listing, "View Product" navigation, "Add to Cart" modal functionality, and pagination.

## Features

- **Header Section**: Includes a search bar for products, profile icon, and cart icon.
- **Product List**: Displays a grid of products, including:
  - Product Image
  - Product Name
  - Price
  - "View Product" and "Add to Cart" buttons
- **View Product**: Clicking this button redirects the user to a custom Thank You page.
- **Add to Cart Modal**: Clicking the "Add to Cart" button opens a modal with product details and a confirmation option.
- **Pagination**: Allows users to navigate through multiple pages of products.
  
## Technologies Used

- **React**: Component-based architecture for the entire application.
- **Vite**: Fast and modern build tool for development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For navigation between the listing page and the Thank You page.
- **React Icons**: For icons in the header and UI components.
- **React Slick**: For creating carousels/sliders.
- **React Toastify**: For toast notifications.

## Challenges Faced

- **Nursery Slider**: Implementing the product slider with `react-slick` presented some difficulties in terms of styling and ensuring proper functionality.
- **Responsiveness**: Ensuring that the product grid and modal were responsive across all screen sizes, while adhering to the Figma design, took additional effort. Some issues were encountered with Tailwind CSS breakpoints but were resolved.

## Installation

1. Clone the repository:

```bash
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

## Project Structure

- **components/**: Contains reusable components such as `ProductCard`, `Header`, `Pagination`, `AddToCartModal`.
- **pages/**: Contains main page components like `ProductListingPage` and `ThankYouPage`.
- **data/**: Mock product data for listing purposes.
  
## How to Use

- **Product Listing**: View products in a grid layout with pagination.
- **View Product**: Redirects to a simple "Thank You" page.
- **Add to Cart**: Opens a modal with product details and allows users to confirm adding the product to the cart.

## Additional Notes

- **Routing**: Used `react-router-dom` for navigation between the product listing and the Thank You page.
- **Modal**: The "Add to Cart" modal opens up with a confirmation button for adding products.

---

This README provides an overview of your project and outlines the technologies used, challenges faced, and instructions for running the project. Feel free to modify or expand it based on any additional details you'd like to include.