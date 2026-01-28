import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// @desc    Get all tasks
// @route   GET /api/tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); // Newest first
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a task
// @route   POST /api/tasks
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Update task (Content or Status)
// @route   PUT /api/tasks/:id
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return updated doc & validate
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ id: req.params.id, message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;