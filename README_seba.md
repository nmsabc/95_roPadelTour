## BE

+ start w the init_L
+ add new routes
+ add new MODELS in the app to be have them in the DB
+ add records with the app from the Postman and see the results in the DB and FE

## MYSQL

+ add the DB mysql from the BE 
+ take care of the dockr-compose and the images names such that they communicate properly

## FE >> add the client FE service
+ clean it
+ add axios
+ add useEffect()
+ run it first time

    npm start

+ build it in the Docker

     docker build -t ropadeltour_client_1 .

+ run it in the Docker

    docker run -dp 3000:3000 ropadeltour_client_1

+ rafactor docker-compose to have FE, BE, MySQL

    at the end run docker-compose up and wait for the compilation
    start the test and continue the dev of FE

#### continue dev on FE

+ resolve CORS blocking the FE to access BE
add this code to the server _index.js_

    // used to resolve the FE being blocked by CORS policy
    let cors = require("cors");
    app.use(cors());
see more here https://stackoverflow.com/questions/46522749/how-to-solve-redirect-has-been-blocked-by-cors-policy-no-access-control-allow


### add Formik

to be able to create forms easier

### add Material-UI

to make the FE simple and nicer

## Authentication
### use bycript 

to encript a simple passwd before storing it in the DB


### add JWT

jsonwebtoken - to be able to store sessions info