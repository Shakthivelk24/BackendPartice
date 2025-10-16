import express from 'express';
import connectDB from './db.mjs';
import healthModel from './healthCare.mjs';

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// ✅ GET all items
app.get('/', async (req, res) => {
  try {
    const items = await healthModel.find();
    if (items.length === 0)
      return res.status(404).json({ message: 'not found' });

    res.status(200).json({ data: items });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ✅ POST new item
app.post('/', async (req, res) => {
  const { patientName,doctorName,reason} = req.body;
  try {
    const item = new healthModel({ patientName, doctorName, reason});
    await item.save();

    res.status(201).json({ message: 'New record added', data: item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ✅ GET single item by ID
app.get('/:id', async (req, res) => {
  try {
    const item = await healthModel.findById(req.params.id);
    if (!item)
      return res.status(404).json({ message: ' not found' });

    res.status(200).json({ data: item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ✅ UPDATE item
app.put('/:id', async (req, res) => {
  try {
    const item = await healthModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item)
      return res.status(404).json({ message: 'not found' });

    res.status(200).json({ message: 'Updated successfully', data: item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ✅ DELETE item
app.delete('/:id', async (req, res) => {
  try {
    const item = await healthModel.findByIdAndDelete(req.params.id);
    if (!item)
      return res.status(404).json({ message: 'not found' });

    res.status(200).json({ message: 'Deleted successfully', data: item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ✅ Start server
app.listen(3000, () => {
  console.log(`Server running at port http://localhost:${3000}`);
});
