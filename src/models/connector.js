
const mongoose  = require("mongoose");

const ConnectorSchema = new mongoose.Schema({
  id: {
    type   : Number,
    unique : true,
    require: true
  },
  name: {
    type   : String,
    require: true
  },
  type: {
    type    : String,
    required: true
  },
  privacy: {
    type    : String,
    required: true
  },
  base_url: {
    type: String
  },
  logo_url: {
    type: String
  },
  category: {
    type    : String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type    : Boolean,
    required: true
  }
});

const Connector = mongoose.model("Connector", ConnectorSchema);
module.exports = Connector;