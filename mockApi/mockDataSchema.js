var schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "description": {
            "type": "string",
            "faker": "specialite.description"
          }
        },
        "required": ["id", "type", "lastname", "description"]
      }
    }
  },
  "required": ["users"]
};

module.exports = schema;
