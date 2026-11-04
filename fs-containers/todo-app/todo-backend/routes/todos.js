const express = require('express');
const { Todo } = require('../mongo');
const redis = require('../redis'); // Import the Redis helper
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* GET statistics endpoint */
router.get('/statistics', async (req, res) => {
  const addedTodos = await redis.get('added_todos');
  
  res.json({
    added_todos: addedTodos ? Number(addedTodos) : 0
  });
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  });

  // Increment the todo counter in Redis
  const currentCount = await redis.get('added_todos');
  const newCount = currentCount ? Number(currentCount) + 1 : 1;
  await redis.set('added_todos', newCount);

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.deleteOne();  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.json(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { text, done } = req.body;

  if (text !== undefined) req.todo.text = text;
  if (done !== undefined) req.todo.done = done;

  const updatedTodo = await req.todo.save();
  res.json(updatedTodo);
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;