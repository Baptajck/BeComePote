module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
  // attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: DataTypes.STRING(64),
      notNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      notNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      notNull: false,
    },
    pseudo: {
      type: DataTypes.STRING(15),
      notNull: false,
    },
    email: {
      type: DataTypes.STRING,
      notNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      notNull: false,
    },
    avatar: {
      type: DataTypes.STRING(128),
      notNull: true,
    },
    age: {
      type: DataTypes.STRING(10),
      notNull: true,
    },
    presentation: {
      type: DataTypes.TEXT,
      notNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  // Options
  {
    timestamps: false,
  });

  return User;
};
