const SEARCH_URL = 'https://morningstar-api.herokuapp.com/analysisData?ticker=TICKER';

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: SEARCH_URL,
    data: {
      q: `${searchTerm}`,

    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}

function renderResult(result) {
  return `
    <div>


    </div>
  `;
}

function displaySearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displaySearchData);
  });
}

$(watchSubmit);


