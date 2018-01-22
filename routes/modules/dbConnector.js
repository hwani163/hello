const  mysql = require('mysql2/promise');
const bluebird = require('bluebird');
const dbConfig = {
  host: '127.0.0.1'
  ,user: 'APP'
  ,password: 'qwer1234'
  ,database: 'bit'
}

class DbConnector {
  async selectQuery (sql,paramArray) {
    let returnValue;
    const connection = await mysql.createConnection(dbConfig);
    const [row,column] = await connection.execute(sql, paramArray);
    connection.destroy();
    return row;
  }

}

module.exports = DbConnector
