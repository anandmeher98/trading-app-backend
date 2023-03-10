module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define(
    "Table",
    {
      table_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      table_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      connection_profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      column_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      column_label_query: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      column_gls_query: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      // freezeTableName: true,
      tableName: "dmt_table_info",
    }
  );
  return Table;
};
