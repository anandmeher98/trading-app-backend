const express = require("express");
const app = express();

// Project controller
const projectController = require("../controllers/project.controller");

// used for sending json request,
app.use(express.json());

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - body
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         userId:
 *           type: integer
 *           description: id of author
 *         title:
 *           type: string
 *           description: title of post
 *         body:
 *           type: string
 *           descripton: content of post *
 *       example:
 *         id: 1
 *         userId: 1
 *         title: my title
 *         body: my article
 *
 */

/**
 * @swagger
 * /project/v1/all:
 *   get:
 *     summary: Returns all Projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: the list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.route("/all").get(projectController.getAllProjects);

/**
 * @swagger
 * /project/v1/:projectId:
 *   get:
 *     summary: Return Project by id
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: return book by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.route("/get/:projectId").get(projectController.getProjectById);
router.route("/create").post(projectController.createProject);
router.route("/update/:projectId").put(projectController.updateProject);
router.route("/delete/:projectId").delete(projectController.deleteProject);

module.exports = router;
