import $ from './es6-jquery.js'

/**
 * @param {string} url
 */
function requireJSON(url) {
  let returnValue
  $.ajax({
    url: url,
    async: false,
    dataType: 'json',
    /**
     * @param {*} response
     */
    success: function (response) {
      returnValue = response
    }
  });
  return returnValue
}

export default requireJSON
