const { GraphQLList,
        GraphQLID,
        GraphQLInt,
        GraphQLObjectType,//Start Here
        GraphQLString,
        GraphQLFloat } = require('graphql')
const GraphQLBaconObjecttype = require('./type')
const mutation = require('./mutations')
const Bacon = require("./bacon")

// Defines the queries
module.exports = {
    bacons: {
        type: new GraphQLList(GraphQLBaconObjecttype),
        args: {
            type: {
                type: GraphQLString
            },
            price: {
                type: GraphQLFloat
            }
        },
        resolve: Bacon.findMatching.bind(Bacon)
    },
    bacon: {
        type:GraphQLBaconObjecttype,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Bacon.getByID.bind(Bacon)
    },
    getAllBecon: {
        type: new GraphQLList(GraphQLBaconObjecttype),
        args: {
            
        },
        resolve: Bacon.getAllBecons.bind(Bacon)
    },
    
}