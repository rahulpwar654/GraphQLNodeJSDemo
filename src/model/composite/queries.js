const { GraphQLList,
        GraphQLID,
        GraphQLObjectType,
        StudBecon,
        GraphQLString,
        GraphQLFloat } = require('graphql')

const composite = require("./composite")
const BeconStudent = require("./BeconStudent")


// Defines the queries
module.exports = {
    getStudBecon: {
        type: new GraphQLList(BeconStudent),
        args: {
           
        },
        resolve: composite.getStudBecon.bind(composite)
    }
    
}