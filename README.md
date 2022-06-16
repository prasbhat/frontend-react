# Frontend-React
In this project, I will be developing a ***Model-View-Controller (MVC)*** application using **ReactJS Framework**, *which would consume the REST APIs exposed by* the **[Spring Boot Microservice](https://github.com/prasbhat/microservice-springboot-h2)** project created earlier.

## Requirements
- **Node.js v8+**
- **[Visual Studio Code](https://aka.ms/win32-x64-user-stable)** - An IDE for developing the code. You can use any IDE of your choice, that supports *TypeScript*. I will be using the **Visual Studio Code**.

Develop the frontend application using the **ReactJS Framework**, so that we can *consume the REST APIs, mentioned below, exposed by our microservice application*:
| Description | CRUD Operation  | HTTP Method | REST API Endpoint |
|:-----------:|:--------------:|:-----------:|:-----------------:|
| Create New Todo Task | CREATE | POST | `/tasks` |
| Fetch All Todo Tasks | READ | GET | `/tasks` |
| Fetch One Todo Task | READ | GET | `/tasks/{id}` |
| Update One Specific Todo Task | UPDATE | PUT | `/tasks` |
| Delete One Specific Todo Task | DELETE | DELETE | `/tasks/{id}` |

## Further help
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Read the [HELP.md](/HELP.md) for guide on using ReactJS Commands.

More detailed documentation regarding this project can be found [here](https://myzonesoft.com/post/frontend-react/).