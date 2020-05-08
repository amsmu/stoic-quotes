/**
 * Created by codeslayer1 on 05/10/18.
 */
"use strict";

var Utils = require("../services/Utils");

module.exports = {
  getRandomStoicQuote: function (params, cb) {
    //Check for mandatory params that needs to be passed in api
    var mandatoryParams = [];
    var missingParam = Utils.checkMandatoryParams(params, mandatoryParams);
    if (missingParam != null) {
      return Utils.sendErrorResponse(
        400,
        {
          code: Utils.config().errorCodes.missing_params,
          message:
            "@" +
            missingParam +
            " param is missing. Mandatory params are: " +
            mandatoryParams,
          display_message: Utils.config().errorMessages.error_generic,
        },
        cb
      );
    }

    return Utils.sendSuccessResponse(
      {
        quote: Utils.config().quotes[
          parseInt(Utils.config().quotes.length * Math.random())
        ],
      },
      cb
    );
  },
};
