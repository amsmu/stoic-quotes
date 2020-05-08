/**
 * Created by amsmu on 07/05/20
 */
var Stoicism = require("../models/Stoicism");
var Utils = require("../services/Utils");

module.exports = {
  /**
   * @description Stoicism controller corresponding to Get Random Stoic quote Model
   */
  getRandomStoicQuote: function (req, res) {
    var input = Utils.getAllParams(req);

    Stoicism.getRandomStoicQuote(input, function (err, result) {
      if (!Utils.isEmpty(err)) {
        return res.error(err);
      }

      return res.success(result);
    });
  },
};
