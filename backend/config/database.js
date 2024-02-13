const mongoose =require('mongoose');


const connectDb = () => {
 
    if (process.env.DbURL) {
        mongoose.connect(process.env.DbURL)
            .then(() => {
                console.log("Connected to database");
            })
            .catch((err) => {
                console.log(err);
                // process.exit(1); 
            });
    }
};
module.exports=connectDb