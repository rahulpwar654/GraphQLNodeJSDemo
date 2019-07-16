const { GraphQLList,
        GraphQLID,
        GraphQLInt,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const GraphQLObjecttype = require('./type')
const mutation = require('./mutations')
const Student = require("./student")

// Defines the queries
module.exports = {
    getStudent: {
        type: new GraphQLList(GraphQLObjecttype),
        args: {
            firstname: {
                type: GraphQLString
            },
            lastname: {
                type: GraphQLString
            },
            collegeid:{
                type: GraphQLInt
            }
        },
        resolve: Student.findMatching.bind(Student)
    },
    getStudentByID: {
        type:GraphQLObjecttype,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Student.getByID.bind(Student)
    }
}