const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;

export const dbConnection = {
  url: `mongodb+srv://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
};
