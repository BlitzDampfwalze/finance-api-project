const MORNINGSTAR_SEARCH_URL = 'https://morningstar-api.herokuapp.com/analysisData';

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: MORNINGSTAR_SEARCH_URL,
    data: {
      ticker: `${searchTerm}`
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  console.log(settings);
  $.ajax(settings);
}

function renderResult(result) {
  return `
    <div>
    	<h3>Company Profile</h3>
			${result.companyProfile}
		<div>Fair Value:</div>
			${result.valuation.fairValue}
		<div>Current Valuation:</div>
			${result.valuation.assessment}
		<div>Foward Trading Valuation:</div>
			${result.valuation.premiumDisc}
		<div>Moat:</div>
			${result.valuation.moat}
    </div>
  `;
}

function displayYouTubeSearchData(data) {
  //const results = data.items.map((item, index) => renderResult(item));
  // const stats = `5 of ${data.pageInfo.totalResults} results shown`;
  // $('.js-search-results-stats').html(stats); 
  console.log(data);
  $('.js-search-results').html(renderResult(data))
    //<div>
	//		${data.companyProfile}
    //</div>
  //`);
   // nextToken=`${YOUTUBE_SEARCH_URL}?key=AIzaSyBk_OjFoaTqmKgDpGuz1svo-a7OrwKsgV4&pageToken=${data.nextPageToken}`
  // $('.js-search-results').append();
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
        console.log(query)
    getDataFromApi(query, displayYouTubeSearchData);
  });
}

$(watchSubmit);
