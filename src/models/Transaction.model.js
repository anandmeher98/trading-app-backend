module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      transactions_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      transactions_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      transactions_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      // tableName: "mta_transaction",
    }
  );
  return Transaction;
};
