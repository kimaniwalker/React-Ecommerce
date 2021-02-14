# A React e-commerce boilerplate
e-commerce boilerplate using React & Node.Js

### Front End - Quick Summary
*Created client side using create-react-app 
*Boilerplate uses useContext hook to display Cart state over all components.
*Implemented bootstrap & SASS which can be used to styles pages and components. 
*Imported React router to manage front end routing.

#### cart-modules - Contains cart functions & context to help with state management
*cart-modules/use-cart.js contain cart functions such as add to cart , remove from cart , get item Id, changeCartQty, Clear Cart.
*cart-modules/cart-context.js contains context setup.

#### components - Items which can be used to build custom pages
*components/options - Optional : Should be used on product pages. Will allow the user to select specifc style, size, or color of product before adding to cart.
*component/product-item.jsx & products.jsx are used to map across the products.json data objects displaying each product item. Can be used to display data along with functionality to add to cart , remove from cart.

#### data - Product data
*data/product.json products objects are listed here. You can modify to fit your needs.

#### stylesheets - SASS & bootstrap configured to be used for stying pages and components
*App is configured to use SASS.

### Back-End
*Using Express.Js on server side.