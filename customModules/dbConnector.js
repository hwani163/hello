const  mysql = require('mysql2/promise');
const dbConfig = {
  host: 'zieels-rds-mysql.ckynymohpye4.ap-northeast-2.rds.amazonaws.com'
  ,user: 'zieels'
  ,password: 'rlaqkddnjs1!'
  ,database: 'devmysql'
}

class DbConnector {
  async query (sql,paramArray) {
    let paramArrayNew = new Array();
    for (var i in paramArray) {
      if (typeof paramArray[i] == 'undefined') {
        paramArrayNew.push(null);
        console.log(paramArray[i]);
      }else{
        paramArrayNew.push(paramArray[i]);
      }
    }
    console.log(paramArrayNew);
    let returnValue;
    const connection = await mysql.createConnection(dbConfig);
    const [row,column] = await connection.execute(sql, paramArrayNew);
    connection.destroy();
    return row;
  }

}

module.exports = DbConnector
