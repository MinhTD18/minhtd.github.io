---
title: Create A Simple Todo List API Using FastAPI
author: MinhTD
description: The steps to create a simple to-do list API using FastAPI, a Python framework for building APIs quickly and easily. It covers the installation of necessary packages, the creation of a FastAPI app, and the implementation of various API routes to handle HTTP requests such as creating, retrieving, updating, and deleting to-do items. The guideline also utilizes Pydantic, a library for data validation and serialization, to define the structure of the to-do item. This is a basic example that can be customized and extended to meet specific requirements.
tag: 
  - Python
  - FastAPI 
category:
  - Guide
date: 2023-04-25
---

# Create A Simple Todo List API Using FastAPI

## To create a simple to-do list API using FastAPI, you can follow these steps:

### 1. Install FastAPI and uvicorn using pip:
FastAPI is a Python web framework for building APIs, and uvicorn is an ASGI server for running Python web applications. The `pip` command is used to install these packages.
```
pip install fastapi uvicorn
```

### 2. Create a new Python file and import the necessary FastAPI modules:
We import the `FastAPI` class from the `fastapi` module, and the `BaseModel` class from the `pydantic` module. `BaseModel` is used to define the structure of the to-do item.

```python
from fastapi import FastAPI
from pydantic import BaseModel
```
### 3. Define a class to represent a to-do item using Pydantic's BaseModel class:
We define a `TodoItem` class that inherits from `BaseModel`. The class has two attributes: `task`, which is a string representing the task to be done, and `completed`, which is a boolean indicating whether the task has been `completed` or not. The `completed` attribute has a default value of `False`.
```python
class TodoItem(BaseModel):
    task: str
    completed: bool = False
```

### 4. Create an instance of the FastAPI app:
We create an instance of the `FastAPI` class and store it in the `app` variable.
```python
app = FastAPI()
```

### 5. Create an empty list to store the to-do items:
We create an empty list named `todo_list` that will be used to store the to-do items.
```python
todo_list = []
```

### 6. Define a route to create a new to-do item:
We use the `@app.post` decorator to define a route that handles HTTP POST requests to the `/todo/` endpoint. The `create_todo_item` function takes a single argument item of type `TodoItem`. The function appends the new to-do item to the `todo_list` and returns a JSON response with a success message.
```python
@app.post("/todo/")
async def create_todo_item(item: TodoItem):
    todo_list.append(item)
    return {"message": "Todo item created successfully"}
```

### 7. Define a route to get all the to-do items:
We use the `@app.get` decorator to define a route that handles HTTP GET requests to the `/todo/{item_index}` endpoint. The `get_todo_items` function returns a JSON response with the entire `todo_list`.
```python
@app.get("/todo/")
async def get_todo_items():
    return {"todo_list": todo_list}
```

### 8. Define a route to get a specific to-do item by its index in the list:
We use the `@app.get` decorator to define a route that handles HTTP GET requests to the `/todo/{item_index}` endpoint, where `item_index` is an integer representing the index of the to-do item in the `todo_list`. The `get_todo_item` function returns a JSON response with the to-do item at the specified index.
```python
@app.get("/todo/{item_index}")
async def get_todo_item(item_index: int):
    return todo_list[item_index]
```

### 9. Define a route to update a specific to-do item:
We use the `@app.put` decorator to define a route that handles HTTP PUT requests to the `/todo/{item_index}` endpoint. The `update_todo_item` function takes two arguments: `item_index`, which is an integer representing the index of the to-do item to be updated, and `item`, which is an instance of `TodoItem` representing the updated to-do item. The function updates the to-do item at the specified index in the `todo_list` and returns a JSON response with a success message.
```python
@app.put("/todo/{item_index}")
async def update_todo_item(item_index: int, item: TodoItem):
    todo_list[item_index] = item
    return {"message": "Todo item updated successfully"}
```

### 10. Define a route to delete a specific to-do item:
We use the `@app.delete` decorator to define a route that handles HTTP DELETE requests to the `/todo/{item_index}` endpoint. The `delete_todo_item` function takes a single argument `item_index`, which is an integer representing the index of the to-do item to be deleted. The function deletes the to-do item at the specified index from the `todo_list` and returns a JSON response with a success message.
```python
@app.delete("/todo/{item_index}")
async def delete_todo_item(item_index: int):
    del todo_list[item_index]
    return {"message": "Todo item deleted successfully"}
```

### 11. Run the application using uvicorn:
Finally, we use the `uvicorn` command to run the application on a local server. We pass the name of the Python file and the name of the `FastAPI` instance (`app`) as arguments to the `uvicorn.run` function, along with other optional parameters like `host` and `port`. By default, the application will run on `http://localhost:8000/`.
```
uvicorn main:app --reload
```

This is a basic example of how to create a to-do list API using FastAPI. You can customize it further to meet your requirements.
