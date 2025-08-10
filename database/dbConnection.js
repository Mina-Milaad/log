import { connect } from "mongoose";

export const dbConn = connect('mongodb://mongo:27017/log-Project')
.then(() => {
    console.log("database Connected Successfully");
})
