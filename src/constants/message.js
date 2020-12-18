module.exports = Object.freeze({
  schemaMessages: {
    WRONG_FORMAT_EMAIL: `Email must have '@' and ['.com','.net'] Example: exmaple@gmail.com`,
    WRONG_FORMAT_DOB: `dateOfBirth format must be ISO 8601`
  },
  messages: {
    REGISTER_SUCCESS: "Register successful",
    BAD_CREDENTIALS:"Bad Credentials",
    LOGIN_SUCCESS: "Login successful",
    DUPLICATE_EMAIL: "Email exist",
    GET_USER_SUCCESS: "Get profile success",
    USER_NOT_FOUND: "User has not found",
    UPLOAD_IMAGE_SUCCESS: "Upload image successful",
    UPDATE_PROFILE_SUCCESS: "Update profile successful",
    UNAUTHORIZED: "Unauthorized"
  }
})