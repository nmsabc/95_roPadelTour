## Docker specific

build the docker repo on https://hub.docker.com/

build the local image
    docker build -t <hub-user>/<repo-name>[:<tag>]
    docker build -t lotus21investments/rpt_fe:3_fe_fe_mysql
push the docker image
    docker push <hub-user>/<repo-name>:<tag>

pull the image like
        docker pull lotus21investments/rpt_fe:3_fe_be_mysql

create your docker compose
    docker-compose up

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

### add the midleware

with this you can validate if the user is logged in or not
and move to next() actions


### model redefinition

drop table Players;drop table Comments;drop table Posts;drop table Users;

desc Players;desc Comments;desc Posts;desc Users;


## read more here
  let data_str_in_js =
    "https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/";


### email reply
<a href="mailto:Mohamed.Ali@soorce.de?subject=Ich%20habe%20Interesse%20am%20Projekt%20Technischer+Aufbau+von+Dialogmarketingkampagnen+in+Salesforce&amp;body=Hallo%20Soorce%20Team,%20danke,%20ich%20bin%20an%20ihrem%20Projekt%20Technischer+Aufbau+von+Dialogmarketingkampagnen+in+Salesforce%20interessiert.%20Lassen%20Sie%20uns%20dazu%20telefonieren." target="_blank"><font color="#ffffff" size="2">Ja, das ist interessant</font></a>

<a href="mailto:Mohamed.Ali@soorce.de?subject=Nicht%20verf%C3%BCgbar%20Technischer+Aufbau+von+Dialogmarketingkampagnen+in+Salesforce&amp;body=Hallo%20Soorce%20Team,%20Ich%20bin%20die%20n%C3%A4chsten%203%20Monate%20nicht%20verf%C3%BCgbar." target="_blank"><font color="#ffffff" size="2">Ich bin leider nicht verfügbar</font></a>

### model defintion

    module.exports = (sequelize, DataTypes) => {
    const User_chatGptModel = sequelize.define("user_chatgpt_model", {
        username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    });

    const Post_chatGptModel = sequelize.define("post_chatgpt_model", {
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        body: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
    });

    const Comment_chatGptModel = sequelize.define("comment_chatgpt_model", {
        body: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
    });

    // User
    User_chatGptModel.hasMany(Post_chatGptModel, {
        foreignKey: "UserId",
        as: "posts",
    });
    
        User_chatGptModel.hasMany(Comment_chatGptModel, {
        foreignKey: "UserId",
        as: "comments",
        });

        // Posts
    Post_chatGptModel.belongsTo(User_chatGptModel, {
        foreignKey: "UserId",
        as: "author",
    });

    Post_chatGptModel.hasMany(Comment_chatGptModel, {
        foreignKey: "PostId",
        as: "comments",
    });

    // Comments

    Comment_chatGptModel.belongsTo(User_chatGptModel, {
        foreignKey: "UserId",
        as: "author",
    });


    Comment_chatGptModel.belongsTo(Post_chatGptModel, {
        foreignKey: "PostId",
        as: "post",
    });

    return Comment_chatGptModel, User_chatGptModel, Post_chatGptModel;
    };

## Weather usage

https://home.openweathermap.org/dashboard/trigger

API keys
https://home.openweathermap.org/api_keys