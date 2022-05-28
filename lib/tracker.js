const db = require("../db/connection");

class Tracker {
   viewAll() {
    const sql = "SELECT * FROM employee";
    db.query(sql, function(err, res) {
      if (err) {
        console.log(err)
      }
      console.log("You are currently viewing all employees")
      console.table(res)
    })
  }
}

module.exports = Tracker;
