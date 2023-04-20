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

let createNewUser = async (req, res) => {
    console.log(req.body);
    let { firstName, lastName, email, address } = req.body;
    // let firstName = req.body.firstName giống dòng trên
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.redirect('/')
}

module.exports = {
    getHomePage, getDetailPage, createNewUser
} 