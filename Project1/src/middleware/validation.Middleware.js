exports.validateModel = (model) => (req, res, next) => {
  const { error } = model.validate(req.body);
  if (error) {
    res.status(422).send(error.details[0].message);
  } else {
    next();
  }
};

exports.validateParam = (params) => (req, res, next) => {
    const { error } = params.validate(req.params);
    if (error) {
      res.status(422).send(error.details[0].message);
    } else {
      next();
    }
  };
