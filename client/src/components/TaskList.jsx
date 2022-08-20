import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await fetch("http://localhost:4000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  });
  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card
          style={{ marginBottom: ".8rem", backgroundColor: "#1e272e" }}
          key={task.id}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ color: "white" }}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>

            <div style={{marginTop: '.6rem'}}>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => console.log("edit")}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                style={{ marginLeft: ".5rem" }}
                onClick={() => console.log("delete")}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default TaskList;
