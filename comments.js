// Create web server
// Create a route for /comments
// Return a list of comments
// Create a route for /comments/:id
// Return a single comment
// Create a route for /comments/:id/edit
// Return a form to edit a comment
// Create a route for /comments/:id/edit
// Update a comment
// Create a route for /comments/:id/delete
// Delete a comment

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Create a route for /comments
router.get('/', function(req, res) {
    // Return a list of comments
    Comment.find({}, function(err, comments) {
        // Render the comments
        res.render('comments/index', {comments: comments});
    });
});

// Create a route for /comments/:id
router.get('/:id', function(req, res) {
    // Return a single comment
    Comment.findById(req.params.id, function(err, comment) {
        // Render the comment
        res.render('comments/show', {comment: comment});
    });
});

// Create a route for /comments/:id/edit
router.get('/:id/edit', function(req, res) {
    // Return a form to edit a comment
    Comment.findById(req.params.id, function(err, comment) {
        // Render the form
        res.render('comments/edit', {comment: comment});
    });
});

// Create a route for /comments/:id/edit
router.put('/:id/edit', function(req, res) {
    // Update a comment
    Comment.findByIdAndUpdate(req.params.id, req.body.comment, function(err, comment) {
        // Redirect to the comment
        res.redirect('/comments/' + comment._id);
    });
});

// Create a route for /comments/:id/delete
router.delete('/:id/delete', function(req, res) {
    // Delete a comment
    Comment.findByIdAndRemove(req.params.id, function(err, comment) {
        // Redirect to the comments
        res.redirect('/comments');
    });
});

module.