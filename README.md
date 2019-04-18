# Magic Burgers
My Angular project is on topic food delivery and title "Magic Burgers". Admins can create toppings and burgers.
Users can order this burgers, respectively with preferred products,
toppings and delivery type. Only admins can change status of there orders. Users can estimate every burgers
with a comment or like/dislike. If some of users are doing something forbidden, like post hate comments, admins have choise to block him/her.
When user is bloked, he/she can`t create orders and comments for burger.

## Functionality:
### Unauthenticated users can:
- Login
- Register
- View home page with top the newest/most liked/most commented burgers
- View menu with all burgers
- View details for burger and its comments

### Authenticated users can:
- Use all functionalities like unauthenticated users expect login and register
- Order a burger with prefered products, toppings, delivery type if isn`t blocked
- Create comment for burger if he/she isn`t blocked
- Remove his/her own comments
- Like/Dislike burger
- View page with details of toppings
- View her/his own orders
- View details for her/his orders
- View her/his profile page
- Logout

### Admins can:
- Use all functionalities like authenticated users
- Create new burgers
- Create new toppings
- View page with all orders
- Can edit status of every burger if it isn`t delivered
- View all users profile
- Block and unblock users

## Tools:
1. Express
2. MongoDB
3. Angular
4. NgRx
5. Angular-animations
6. Ngx-toastr
7. Ngx-pagination
8. Scss