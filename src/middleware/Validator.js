
const validateMiddleware = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property])

    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;

      const message = details.map(i => i.message).join(',');
      res.status(422).send({
        statusCode: 422,
        message: "Invalid request data",
        errorMessage: message,
        data: {}
      });
    }
  }
}

module.exports = validateMiddleware