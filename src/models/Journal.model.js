module.exports = (sequelize, DataTypes) => {
  const Journal = sequelize.define(
    "Journal",
    {
      trade_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      account: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      action: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      entryDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      entryPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      exitDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      exitPrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instrument: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fee: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      highestPrice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      lowestPrice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      market: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "options",
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pnl: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      sl: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      target: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      timeFrame: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "N",
      },
    },
    {
      freezeTableName: true,
      // tableName: "mta_journal",
    }
  );
  return Journal;
};
