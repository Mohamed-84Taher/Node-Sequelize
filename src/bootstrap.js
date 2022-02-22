module.exports = async () => {
  const User = require("./models/User");
  const Tweet = require("./models/Tweet");
  User.hasMany(Tweet, { as: "Tweets", foreignKey: "userId" });
  Tweet.belongsTo(User, { as: "User", foreignKey: "userId" });
  const errorHandler = err => {
    console.error("Error :", err);
  };
  //   const user = await User.create({
  //     username: "mohamed taher",
  //     password: "123456",
  //   }).catch(errorHandler);
  const tweet = await Tweet.create({
    content: "this is me2",
    userId: 1,
  }).catch(errorHandler);
  //   const users = await User.findAll({
  //     where: { username: "mohamed taher" },
  //     include: [{ model: Tweet, as: "Tweets" }],
  //   }).catch(errorHandler);
  const tweets = await Tweet.findAll({ where: { userId: 1 } });
  console.log("All tweets :", tweets);
};
