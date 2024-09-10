$(document).ready(() => {
    function getLocationByIp() {
      const locatorUrl =      "https://gist.githubusercontent.com/thetradecoder/26a64f4fa158e7dc2016f9125c1f7aa1/raw/b6ca2f8e5ab10b54f02663b8337bd0169bbba132/ip-locator-api.json";
      $.getJSON(locatorUrl, (data) => {
        $.getJSON(data.endpoint, (json) => {   
          $("#locationByIp").html(`${json.city}, ${json.country_name}`);        
        });
      });
    }
    getLocationByIp();
  });