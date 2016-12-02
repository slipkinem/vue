/**
 * Created by slipkinem on 2016/11/28.
 */
'use strict';


module.exports = function (app) {
  app.use('/articles',require('./articles'));
};