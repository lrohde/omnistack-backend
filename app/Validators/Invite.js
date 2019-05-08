"use strict";

class Invite {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      invites: "required",
      "invites.*": "required|email"
    };
  }
}

module.exports = Invite;
