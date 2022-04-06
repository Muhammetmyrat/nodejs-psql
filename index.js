const express = require('express')
const app = express()
const userRoutes = require('./routes/user.routes')

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use('/api', userRoutes)

app.listen(PORT, () => console.log(`Server has been started port on ${PORT}`));