const db = require('../db')

class userControllers {

	async createUser(req, res) {
		const {first_name, last_name, email} = req.body
		const newUser = await db.query(`insert into person(first_name, last_name, email) values (${1}, ${2}, ${3}) returning *	`, [first_name, last_name, email])
		res.json({
			status: 200,
			data: newUser.rows
		})
	}
	async getUsers(req, res) {

	}
	async getUser(req, res) {

	}
	async updateUser(req, res) {

	}
	async deleteUser(req, res) {

	}

}

module.exports = new userControllers()