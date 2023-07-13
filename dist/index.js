"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataSource = require("./data-source");

var _User = require("./entity/User");

require("reflect-metadata");

_dataSource.AppDataSource.initialize().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var user, users;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Inserting a new user into the database...");
          user = new _User.User();
          user.firstName = "Timber";
          user.lastName = "Saw";
          user.age = 25;
          _context.next = 7;
          return _dataSource.AppDataSource.manager.save(user);

        case 7:
          console.log("Saved a new user with id: " + user.id);
          console.log("Loading users from the database...");
          _context.next = 11;
          return _dataSource.AppDataSource.manager.find(_User.User);

        case 11:
          users = _context.sent;
          console.log("Loaded users: ", users);
          console.log("Here you can setup and run express / fastify / any other framework.");

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})))["catch"](function (error) {
  return console.log(error);
});