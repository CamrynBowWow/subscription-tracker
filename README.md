To create project:
- npx express-generator --no-view --git ./

<br>

# Tech Stack

- express
- nodemon
- eslint
- dotenv
- MongoDB
- mongoose (ORM)
- jsonwebtoken
- bcryptjs

# Info

- Can chain multiply middlewares as long as the middleware ends with 'next()' as it will forward to the next function. 

```bash
userRouter.get('/:id', authorize, getUser);
```