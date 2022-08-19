import pool from "../db.js";

export const getAllTasks = async (req, res, next) => {
  try {

    const allTasks = await pool.query("SELECT * FROM task");

    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    result.rows.length === 0
      ? res.status(404).json({ message: "Task not found" })
      : res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *",
      [title, description]
    );

    res.json({ "Task created": result.rows[0] });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3",
      [title, description, id]
    );
    const result2 = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    result.rowCount === 0
      ? res.status(404).json({ message: "Task not found" })
      : res.json({ "Modified task": result2.rows[0] });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM task WHERE id = $1 RETURNING *",
      [id]
    );

    result.rows.length === 0
      ? res.status(404).json({ message: "Task not found" })
      : res.json({
          "Task deleted": {
            title: result.rows[0].title,
            description: result.rows[0].description,
          },
        });
  } catch (error) {
    next(error);
  }
};
