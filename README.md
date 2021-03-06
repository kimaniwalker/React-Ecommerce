# A React e-commerce boilerplate
e-commerce boilerplate using React & Node.Js

### Front End - Quick Summary
Created client side using create-react-app <br> 
Boilerplate uses useContext hook to display Cart state over all components.<br>
Implemented bootstrap & SASS which can be used to styles pages and components.<br> 
Imported React router to manage front end routing.<br>

#### cart-modules - Contains cart functions & context to help with state management
cart-modules/use-cart.js contain cart functions such as add to cart , remove from cart , get item Id, changeCartQty, Clear Cart.<br>
cart-modules/cart-context.js contains context setup.<br>

#### components - Items which can be used to build custom pages
components/options - Optional : Should be used on product pages. Will allow the user to select specifc style, size, or color of product before adding to cart.<br>
component/product-item.jsx & products.jsx are used to map across the products.json data objects displaying each product item. Can be used to display data along with functionality to add to cart , remove from cart.<br>

#### data - Product data
data/product.json products objects are listed here. You can modify to fit your needs.<br>

#### stylesheets - SASS & bootstrap configured to be used for stying pages and components
App is configured to use SASS.<br>

### Back-End
Using Express.Js on server side.<br>