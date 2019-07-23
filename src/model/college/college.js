const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class College extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'college'
    }

    /**
     * Returns a bacon by its ID
     */
    static async getByID(_, {id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of bacons matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all bacons if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching bacons
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new bacon
     */
    static async createEntry(_, {collegename, collegecode}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    collegename, 
                    collegecode                    
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a bacon 
     */
    static async updateEntry(_, {id, collegename, collegecode}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    collegename, 
                    collegecode
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = College