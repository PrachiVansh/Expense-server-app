const mongoose = require("mongoose");


//OsmtZwqddpEZ2lbJ
//mongodb+srv://me:<password>@cluster0.eoeqvnq.mongodb.net/


const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        );
        console.log("Database connected");
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;