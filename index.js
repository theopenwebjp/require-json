import $ from './es6-jquery.js'

function requireJSON(url){
  let returnValue
  $.ajax({
    url: url,
    async: false,
    dataType: 'json',
    success: function (response) {
      returnValue = response
    }
  });
  return returnValue
}

export default requireJSON