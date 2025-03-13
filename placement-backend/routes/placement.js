const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const db = require('../config/db');

// Companies
router.get('/companies', auth, async (req, res) => {
  try {
    const [companies] = await db.query('SELECT * FROM companies');
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/companies', auth, async (req, res) => {
  try {
    const { name, details, website, logo_url } = req.body;
    const [result] = await db.query(
      `INSERT INTO companies (name, details, website, logo_url)
       VALUES (?, ?, ?, ?)`,
      [name, details, website, logo_url]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Placements
router.get('/placements', auth, async (req, res) => {
  try {
    const [placements] = await db.query(`
      SELECT p.*, u.name AS student_name, c.name AS company_name 
      FROM placements p
      JOIN users u ON p.user_id = u.id
      JOIN companies c ON p.company_id = c.id
    `);
    res.json(placements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Resources
router.get('/resources', auth, async (req, res) => {
  try {
    const [resources] = await db.query(`
      SELECT r.*, u.name AS uploaded_by_name 
      FROM resources r
      LEFT JOIN users u ON r.uploaded_by = u.id
    `);
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upcoming Companies
router.get('/upcoming', auth, async (req, res) => {
  try {
    const [upcoming] = await db.query(`
      SELECT uc.*, c.name AS company_name, c.logo_url 
      FROM upcoming_companies uc
      JOIN companies c ON uc.company_id = c.id
    `);
    res.json(upcoming);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Student Profiles
router.get('/profile', auth, async (req, res) => {
  try {
    const [profile] = await db.query(
      'SELECT * FROM student_profiles WHERE user_id = ?',
      [req.user.id]
    );
    res.json(profile[0] || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Get all companies (updated)
router.get('/companies', auth, async (req, res) => {
  try {
    const [companies] = await db.query(`
      SELECT id, name, details, website 
      FROM companies
    `);
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;