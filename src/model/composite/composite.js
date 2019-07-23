const DAO = require('../../lib/dao')
const mysql = require('../../lib/mysqlWrapper')

class Composite extends DAO {
   


    /**npm start 
     * Retrieves a single entry matching the passed ID
     * 
     */
    static async getStudBecon() {
        return (await mysql.createQuery({
            query: `SELECT * FROM ?? WHERE ?? = ? LIMIT 1;`,
            params: [this.TABLE_NAME, this.PRIMARY_KEY, id]
        })).shift()
    }

/**
 * 
 * Inner Join
 * 
 * SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
 */




}

module.exports = Composite