To create project:
- npx express-generator --no-view --git ./

# Tutorial
- Youtuber: JavaScript Mastery
- URL: https://www.youtube.com/watch?v=rOpEN1JDaD0

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
- Arcjet
- dayjs

# Info

- Can chain multiply middlewares as long as the middleware ends with 'next()' as it will forward to the next function. 

```bash
userRouter.get('/:id', authorize, getUser);
```