#! usr/bin
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "What do you need to do?"
        },
        {
            name: "add",
            type: "list",
            message: "Do you want to add more tasks?",
            choices: ["Yes", "No"]
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.add;
    console.log(todos);
}
