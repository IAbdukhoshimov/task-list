const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    _id: {
        type: String,
        default: function genUUID() {
            return uuidv4();
        }
    },
    title: {
        type: String
    },
    status: {
        type: Boolean
    }
});

module.exports = mongoose.model("Task", TaskSchema);
