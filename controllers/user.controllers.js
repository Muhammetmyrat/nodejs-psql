const db = require("../db")

class userControllers {
  async createUser(req, res) {
    const { firstName, lastName, email } = req.body
    const userNew = await db.query(
      `insert into person(first_name, last_name, email) values ($1, $2, $3) returning *	`,
      [firstName, lastName, email]
    )
    res.json({
      status: 200,
      data: userNew.rows[0],
    })
  }
  async getUsers(req, res) {
    const users = await db.query(`select * from person`)
    res.json({
      status: 200,
      data: users.rows,
    })
  }
  async getUser(req, res) {
    console.log(req.params)
    const { id } = req.params
    const user = await db.query(`select * from person where id = $1`, [id])
    res.json({ status: 200, data: user.rows[0] })
  }
  async updateUser(req, res) {
    const { id, firstName, lastName, email } = req.body
    const userUpdate = await db.query(
      `update person set first_name = $1, last_name = $2, email = $3 where id = $4 returning * `,
      [firstName, lastName, email, id]
    )
    res.json({ status: 200, data: userUpdate.rows[0] })
  }
  async deleteUser(req, res) {
    const { id } = req.params
    const userDelete = await db.query(`delete from person where id = $1 returning *`, [id])
    res.json({
      status: 200,
      data: userDelete.rows[0],
    })
  }
}

module.exports = new userControllers()
