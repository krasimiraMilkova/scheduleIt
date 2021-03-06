module.exports.sendErrorResponse = function (req, res, status, message, err) {
  if (req.get("env") === "production") {
    err = undefined;
  }
  res.status(status).json({
    code: status,
    message,
    error: err,
  });
};

module.exports.replace_id = function (entity) {
  entity.id = entity._id;
  delete entity._id;
  return entity;
};

module.exports.replace_date = function (entity) {
  entity.date = entity.date.toISOString().split("T")[0];
  return entity;
};
