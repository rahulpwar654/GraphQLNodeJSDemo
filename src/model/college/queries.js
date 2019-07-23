const { GraphQLList,
        GraphQLID,
        GraphQLInt,
        GraphQLObjectType,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const GraphQLCollegetype = require('./type')
const College = require("./college")

// Defines the queries
module.exports = {
    colleges: {
        type: new GraphQLList(GraphQLCollegetype),
        args: {
            collegename: {
                type: GraphQLString
            },
            collegecode: {
                type: GraphQLString
            }
        },
        resolve: College.findMatching.bind(College)
    },
    getCollegeById: {
        type:GraphQLCollegetype,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: College.getByID.bind(College)
    }
    // ,
    // getAllBecon: {
    //     type: new GraphQLList(GraphQLCollegetype),
    //     args: {
            
    //     },
    //     resolve: College.getAllBecons.bind(College)
    // },
    
}