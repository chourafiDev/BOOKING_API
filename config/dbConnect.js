import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connect.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_URL_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) =>
      console.log(
        `✔️ [MonogDb]: MongoDb Success Connected:  ${conn.connection.host}`
      )
    );
};

export default dbConnect;
