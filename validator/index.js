exports.userSignupValidator = (req, res) => {
  req.check("name", "name is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+@.+\..+/).withMEssage("Email must contain @").isLength({
        min: 4,
        max: 32
    });
    req.check("password", "Password is required").notEmpty()
};
