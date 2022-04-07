const db = require("../db")

class postControllers {
  async createPost(req, res) {
		const {userId, title, content} = req.body
		const postCreate = await db.query(`insert into post(title, content, user_id) values ($1, $2, $3) returning *`, [title, content, userId])
		res.json({status: 200, data: postCreate.rows[0]})

	}
  async getPostByUser(req, res) {}
}

module.exports = new postControllers()
