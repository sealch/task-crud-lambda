# Task-CRUD-lambda
#### This is serverless version of https://github.com/sealch/task-crud

## Trying it out:

Send request to: https://79jrw32kt7.execute-api.us-east-1.amazonaws.com/dev/
#### Note: Playground is disabled in production. Only POST requests accepted for best practices

#

## Available requests:
### Queries:
#### allTasks

```
query {
  allTasks {
    id,
    name,
    done
  }
}
```
Returns a list with all tasks in database.

### Mutations:
#### createTask

```
mutation {
  createTask(name:"Do some stuff", done: false) {
    id,
    name,
    done
  }
}
```
Creates new task. Name and done are required.

#### updateTask

```
mutation {
  updateTask(id: "5e8090d4ac4ca929fd603f99", done: true ) {
    id,
    name,
    done
  }
}
```
Updates status of existing task. Id and done are required.

#### deleteTask

```
mutation {
  deleteTask(id: "5e8090d4ac4ca929fd603f99") {
    id,
    name,
    done
  }
}
```
Deletes existing task. Id is required.

### Data types:
| id | name |  done |
| ------ | ------ | ------ |
| String | String | Boolean |
