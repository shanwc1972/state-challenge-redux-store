# state-challenge-redux-store

## Description
This is application resembling an e-commerce online shopping site. The application has been developed using the MongoDB, Express, React and Node (MERN) stack. This application, though, functions using a global state via Redux as is a port of the same application that employed the React Context API. This application also employs the stripe API that functions as a payment gateway.

## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  
## Installation
No installation is required as this is a deployed application via React.  
  
## Usage
The application / page can be accessed at: https://state-challenge-redux-store.onrender.com/

The following image shows the application's appearance and functionality:

![Screenshot 2024-11-03 at 11 03 37 am](https://github.com/user-attachments/assets/5c055110-62d3-4a7b-b425-2adda307f0b3)


By default, a list of categories and products is displayed. You can click on a category to filter the products shown. By default, the application displays all categories.

The application has a menu along the top, allowing you to sign up or log in (if you have already signed up). If you are logged in, you will see an additional option called Order History.

You can click the Add to Cart button below each product to add it to the shopping cart, specifying the desired quantity. You can continue adding other products, and when ready, you can complete your shopping experience by clicking Checkout. Note that checkout requires you to be logged in.

You may also click on each product to go to a product detail page, which displays a larger image and a description of the product. This page includes two buttons, Add to Cart and Remove from Cart, allowing you to manage this product in your shopping cart. You can also click Back to Products to return to the default view.

To complete your order, select Checkout, and you will be directed to a Stripe.com payment form. Your cart items are listed on the left, and a form for payment is on the right. Note that Stripe is in test mode in this application, so it will not process actual transactions. You can enter test card details and click Pay to complete the test transaction.

Upon completion, you will be redirected to the default view. You can then click Order History to view the Order History page, which shows the dates and details of your previous orders. You can click Back to Products to return to the default view.

### GraphQL
As this application employs a GraphQL API, use of a GraphQL API developer tool, like the Apolloserver Studio Sandox, allows one to employ any of the queries or mutations exposed by the application. These include:

Queries:  
`categories: [Category]`  - to provide an array of categories  
`checkout([productIDs])`  - to provide an array of products in your shopping cart  
`order(OrderId): Order` - to query a list of product and purchase dates for a given order Id  
`product(ProudctId): Product`  - to query details for a given product ID  
`Products(CategoryId, name): [Product]` - to query a list of products for a given catefgory Id  
`user: User` - to query the logged on user  

Mutations:  
`addOrder([products]): Order`  - creates an order given an array of products  
`addUser(firstanme, lastname, email, password): Auth` - creates a new user given a name, email and password  
`logon(email): Auth` - logs in a user given their email  
`updateProdict(productId, quantity): Product`  - updates a product given an ID and quantity  
`updateUser(firstname, lastname, email, password): user`  - updates a user given a name, email and password  
 

## Contributing
The code is largely a refactoring of the Module 22, Activity 26 code which operated using the React Context API. All refactored code and the addition of Redux was done by Warren Shan.
  
## License
None
