const { GraphQLObjectType } = require('graphql')
const baconQueries = require('../model/bacon/queries')
const studentQueries = require('../model/student/queries')
const compQueries = require('../model/composite/queries')
const collegeQueries = require('../model/college/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //for becon
        bacon: baconQueries.bacon,
        bacons: baconQueries.bacons,
        //deleteBecon: baconQueries.deletebacon,
        getBecon: baconQueries.getAllBecon,
        //for student
        getStudents:studentQueries.getStudent,
        getStudentByID: studentQueries.getStudentByID,

        //For College
        colleges:collegeQueries.colleges,
        getCollegeById:collegeQueries.getCollegeById,

        //Composite
        getStudBecon: compQueries.getStudBecon

    }
})