module.exports = (sequelize, DataTypes) => {
  const MetadataTable = sequelize.define(
    "MetadataTable",
    {
      metadata_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      table_column_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      table_column_length: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      table_column_dataType: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      table_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      edit_operation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dropdown: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      is_primarykey: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      column_label: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tool_tip: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      is_mandatory: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      column_default_filter: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      is_autosearch_enable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      dropdown_association_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      // freezeTableName: true,
      tableName: "dmt_table_metadata",
    }
  );
  return MetadataTable;
};
