import pool from "../configs/connectDB"


let getHomePage = async (req, res) => {


    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows, test: 'string test' })


}

const getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [, fields] = await pool.execute(`select * from users where id = ?`, [userId])
    return res.send(JSON.stringify(user[0]))
}

module.exports = {
    getHomePage, getDetailPage
} 