// connecting to db
const db = require("../../config/sequelize");

// destructuring Project model for creating instance
const { Project } = db;

function getAllProjects(req, res, next) {
  console.log("Get all projects!");
  Project.findAll()
    .then((projects) => {
      if (projects.length) {
        res.send(projects);
      } else {
        res.send("No Project!");
      }
    })
    .catch((e) => console.log(e));
}

function getProjectById(req, res, next) {
  console.log("Get project by id!");
  Project.findByPk(req.params.projectId)
    .then((project) => {
      if (project) {
        res.send(project);
        // res.send(project.toJSON());
      } else {
        res.send("No Project found  with given id!");
      }
    })
    .catch((e) => console.log(e));
}

// const getProjectById = async (req, res) => {
//   const project = await Project.findByPk(req.params.projectId);
//   if (project) {
//     res.send(project);
//   } else {
//     res.send("No project found with given id!");
//   }
// };

function createProject(req, res) {
  console.log("Create project!");
  const project = Project.build(req.body);
  // console.log(project.toJSON());
  project.save().then((savedProject) => {
    // console.log(savedProject);
    if (savedProject && savedProject.dataValues) {
      res.send(savedProject.toJSON());
    } else {
      console.log("ERROR CREATING PROJECT!");
      res.send("ERROR CREATING PROJECT!");
    }
  });
}
// Project.create() need to be waited since it is an async function, so we have to use await before assining to a variable

// const createProject = async (req, res) => {
//   console.log("create projects!", req.body);
//   // const project = Project.build(req.body);
//   const project = await Project.create(req.body);
//   // console.log(project.toJSON());
//   console.log(project);
//   // p1.save();
//   res.send(req.body);
// };

function updateProject(req, res) {
  console.log("Update project!");
  Project.update(req.body, {
    where: { project_id: req.params.projectId },
  });
  console.log("Project updated successfully!");
  res.send("Project updated successfully!");
}
function deleteProject(req, res) {
  console.log("delete projects!", req.params.projectId);
  Project.destroy({ where: { project_id: req.params.projectId } });
  res.send("Delete Projects");
}

// createProject();
// getAllProjects();

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
