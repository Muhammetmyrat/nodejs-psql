const db = require("../db")

class userControllers {
  async createUser(req, res) {
    const { firstName, lastName, email } = req.body
    const newUser = await db.query(
      `insert into person(first_name, last_name, email) values ($1, $2, $3) returning *	`,
      [firstName, lastName, email]
    )
    res.json({
      status: 200,
      data: newUser.rows[0],
    })
  }
  async getUsers(req, res) {}
  async getUser(req, res) {}
  async updateUser(req, res) {}
  async deleteUser(req, res) {
		const {id} = req.params.id
		const deleteUser = await db.query(`delete from person where id=${id} returning person.id=${id}`)
		res.json({
			status: 200,
			data: deleteUser.rows[0]
		})
	}
}

module.exports = new userControllers()
