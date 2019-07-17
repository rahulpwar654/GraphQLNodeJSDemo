
const express = require('express')
const bodyParser = require('body-parser')
const Routes = require('./routes')
const cors = require('cors');


/**
 *
 * 
const port = process.env.PORT || 9000;

const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')
const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
//const resolvers = require('./resolvers')

const {makeExecutableSchema} = require('graphql-tools')
const schema = makeExecutableSchema({typeDefs})
 
 * 
 * 
 */





///const app = express();
// app.use(cors(), bodyParser.json());
// app.use('/graphql',graphqlExpress({schema}))
// app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))



const fs = require('fs')
const typeDefs = fs.readFileSync('./src/schema.graphql',{encoding:'utf-8'})
//const resolvers = require('./src/resolvers.js')

const {makeExecutableSchema} = require('graphql-tools')
const schema = makeExecutableSchema({typeDefs})

const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')



class App {

    /**
     * 
     * 
     * Sets the properties to be used by this class to create the server
     * 
     */
    constructor() {
        this.expressApp = express()

        //Literal object containing the configurations
        this.configs = {
            get port() {
                return process.env.PORT || 8080
            }
        }
    }

    /**
     * 
     * 
     * Applies any middleware to be used by this app
     * 
     */
    applyMiddleware() {
        //Allows the server to parse json
        this.expressApp.use(bodyParser.json())

        // this.expressApp.use('/graphql',graphqlExpress({schema}))
        // this.expressApp.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))

        // import { importSchema } from "graphql-import";
        // import * as fs from "fs";
        
        // const text = importSchema("./schema.graphql");
        // fs.writeFileSync("./schema_prep.graphql", text);





        //Registers the routes used by the app
        new Routes(this.expressApp)
    }

    /**
     * 
     * 
     * Runs the app
     * 
     */
    run() {
        this.expressApp.use('/graphql',graphqlExpress({schema}))
        this.expressApp.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
        
        
        this.expressApp.listen(this.configs.port, () => {
            console.log("Express server running project on port " + this.configs.port + ".")
            console.log(`Environment: ${process.env.STAGE || "development"}`)
            console.log("Use Url:-   http://localhost:8080/graphql   ")

        })
    }

    
}

//Runs the thing
const app = new App()
app.applyMiddleware()
app.run()
