## BE

+ start w the init_L
+ add new routes
+ add new MODELS in the app to be have them in the DB
+ add records with the app from the Postman and see the results in the DB and FE

## MYSQL

+ add the DB mysql from the BE 
+ take care of the dockr-compose and the images names such that they communicate properly

## FE

+ clean it
+ add axios
+ add useEffect()
+ run it first time

    npm start

+ build it in the Docker

     docker build -t ropadeltour_client_1 .

+ run it in the Docker

    docker run -dp 3000:3000 ropadeltour_client_1

## rafactor docker-compose to have FE, BE, MySQL

    add the client FE service

