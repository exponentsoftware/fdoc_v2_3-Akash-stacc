var projects = [
  {
    name: "Project A",
    client: "Client A",
    tasks: [
      {
        title: "Task 1",
        assignee: "Alice",
        status: "In Progress",
        dueDate: "2023-04-30",
      },
      {
        title: "Task 2",
        assignee: "Bob",
        status: "Completed",
        dueDate: "2023-05-05",
      },
      {
        title: "Task 3",
        assignee: "Charlie",
        status: "Not Started",
        dueDate: "2023-04-25",
      },
    ],
  },
  {
    name: "Project B",
    client: "Client B",
    tasks: [
      {
        title: "Task 1",
        assignee: "Alice",
        status: "In Progress",
        dueDate: "2023-05-10",
      },
      {
        title: "Task 2",
        assignee: "Bob",
        status: "Not Started",
        dueDate: "2023-05-15",
      },
      {
        title: "Task 3",
        assignee: "Charlie",
        status: "Completed",
        dueDate: "2023-04-28",
      },
    ],
  },
];
function findOverdueTasks(projects, currentDate) {
  var overdueTasks = [];

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    for (var j = 0; j < project.tasks.length; j++) {
      var task = project.tasks[j];
      var dueDate = new Date(task.dueDate);
      var currentDateObj = new Date(currentDate);

      if (dueDate < currentDateObj && task.status !== "Completed") {
        overdueTasks.push(task);
      }
    }
  }

  return overdueTasks;
}
var overdueTasks = findOverdueTasks(projects, "2023-05-01");
console.log(overdueTasks);

function updateTaskStatus(projects, projectName, taskTitle, newStatus) {
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    if (project.name === projectName) {
      var tasks = project.tasks;

      for (var j = 0; j < tasks.length; j++) {
        var task = tasks[j];

        if (task.title === taskTitle) {
          task.status = newStatus;
          break;
        }
      }

      break;
    }
  }
}
