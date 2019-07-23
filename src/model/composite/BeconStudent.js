let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'BeconStudent',
    description: 'Becon and Student Join',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        type: {
            type: new GraphQLNonNull(GraphQLString)
        },
        price: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        firstname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        collegeid: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    }
})