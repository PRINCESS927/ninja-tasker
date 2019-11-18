// creating a model for our tacks//

//exporting this model to our index
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Tasks", {
    //   define columns of our tables
    todo: { type: DataTypes.STRING }
  });
  return Task;
};
