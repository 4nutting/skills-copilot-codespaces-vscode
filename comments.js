// Create web server
// ------------------------------

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

// Create server
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Data
const commentsByPostId = {}