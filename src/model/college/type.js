let {
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'College',
    description: 'A College type GQL object',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        collegename: {
            type: new GraphQLNonNull(GraphQLString)
        },
        collegecode: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})