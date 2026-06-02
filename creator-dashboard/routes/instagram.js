const express = require('express');
const router = express.Router();

const BASE = 'https://graph.instagram.com/v19.0';
const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const ACCOUNT_ID = process.env.INSTAGRAM_ACCOUNT_ID;

// GET /api/instagram/profile
router.get('/profile', async (req, res) => {
  try {
    const url = `${BASE}/${ACCOUNT_ID}?fields=id,username,followers_count,media_count,profile_picture_url&access_token=${TOKEN}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) return res.status(400).json(data.error);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/instagram/media
router.get('/media', async (req, res) => {
  try {
    const url = `${BASE}/${ACCOUNT_ID}/media?fields=id,caption,media_type,timestamp,permalink,thumbnail_url,media_url&limit=20&access_token=${TOKEN}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) return res.status(400).json(data.error);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/instagram/insights/:mediaId
router.get('/insights/:mediaId', async (req, res) => {
  try {
    const { mediaId } = req.params;
    const url = `${BASE}/${mediaId}/insights?metric=reach,impressions,likes,comments,shares,saved,plays&access_token=${TOKEN}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) return res.status(400).json(data.error);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/instagram/account-insights
router.get('/account-insights', async (req, res) => {
  try {
    const url = `${BASE}/${ACCOUNT_ID}/insights?metric=reach,impressions,follower_count,profile_views&period=day&since=${Math.floor(Date.now()/1000) - 2592000}&until=${Math.floor(Date.now()/1000)}&access_token=${TOKEN}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) return res.status(400).json(data.error);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/instagram/comments/:mediaId
router.get('/comments/:mediaId', async (req, res) => {
  try {
    const { mediaId } = req.params;
    const url = `${BASE}/${mediaId}/comments?fields=id,text,timestamp,like_count&access_token=${TOKEN}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) return res.status(400).json(data.error);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
