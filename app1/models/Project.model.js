module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      project_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      project_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      project_owner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      operating_company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ad_groups: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_RLSEnabled: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "N",
      },
      is_GLSEnabled: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "N",
      },
      is_OverrideEnabled: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "N",
      },
    },
    {
      // freezeTableName: true,
      tableName: "dmt_projects",
    }
  );
  return Project;
};
