# Routes

Separate API routes from Client AngJS app.

Client's routes goes here:
/

API:
/api/

# REST API 

| URL                 | HTTP Verb | Request Body | Result                   | Access                |
| ------------------- | --------- | ------------ | ------------------------ | --------------------- |
| /api/users          | GET       | empty        | return all users         | admin only            |
| /api/users          | POST      | JSON string  | create new user          | admin only            |
| /api/users/:id      | GET       | empty        | returns single user      | user itself + admin   |
| /api/users/:id      | PUT       | JSON string  | updates user             | user itself + admin   |
| /api/users/:id      | DELETE    | empty        | deletes user             | admin only            |
| /api/pricelists     | GET       | empty        | return all pricelists    | user specific + admin |
| /api/pricelists     | POST      | JSON string  | create new pricelist     | admin only            |
| /api/pricelists/:id | GET       | empty        | returns single pricelist | user specific + admin |
| /api/pricelists/:id | PUT       | JSON string  | updates pricelist        | admin only            |
| /api/pricelists/:id | DELETE    | empty        | deletes pricelist        | admin only            |

# Client App Routes
## Not authorized
/*** -> /login 
## Authorzed (user)
/ -> /download-pricelist (page with buttons for pricelists downloads)
/download/:pricelist-token (download specific price)
/logout
## Authorzed (admin)
/admin -> /admin/pricelists
/admin/users

