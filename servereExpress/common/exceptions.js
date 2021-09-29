//manejo de errores propios

const exceptionType = {
  unhandledException: {
    code: 200,
    message: "Unhandled exception",
    httpStatus: 500,
  },
  notFound: {
    code: 300,
    message: "Not found",
    httpStatus: 404,
  },
  badRequest: {
    code: 400,
    message: "Bad Request",
    httpStatus: 400,
  },
  invalidToken: {
    code: 501,
    message: "Invalid token",
  },
  budget: {
    notFound: {
      code: 2000,
      message: "budget is not found",
      httpStatus: 404,
    },

    badRequest: {
      code: 2001,
      message: "missing mandatory parameterss",
      httpStatus: 400,
    },
  },
  // code of users 100
  users: {
    invalidPassword: {
      code: 100,
      message: "Incorrectly Crediantials",
      httpStatus: 401,
    },
    cannotCreateUser: {
      code: 101,
      message: "User can not be created",
      httpStatus: 500,
    },
    notFound: {
      code: 102,
      message: "User not found",
      httpStatus: 404,
    },
    userExists: {
      code: 103,
      message: "the user is already register",
      httpStatus: 400,
    },
    emailExists: {
      code: 104,
      message: "the email is already register",
      httpStatus: 400,
    },
  },
  database: {
    entity: {
      canNotBeCreated: {
        code: 400,
        message: "Can not be create entity",
        httpStatus: 500,
      },
    },
  },
};

module.exports = {
  exceptionType,
};
