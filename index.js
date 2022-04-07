const express = require('express')
const app = express()
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', postRoutes)

app.listen(PORT, () => console.log(`Server has been started port on ${PORT}`));