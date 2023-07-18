// Create web server 
// 1. Create a web server using express
// 2. Create a route handler for get requests to '/posts/:id/comments'
// 3. Get comments from the comments service
// 4. Return comments to browser

const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');