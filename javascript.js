const searchInput = document.querySelector("#searchInput")

searchInput.addEventListener('keypress', event => {
    if (event.charCode >= 1) {
        const searchTerm = event.target.value;

        filteredSales = salesByWeek.filter(sale => {
            for (const salesAgentValue of Object.values(sale.sales_agent)) {
                if (salesAgentValue.includes(searchTerm)) {
                    return sale;
                }
            }
        })
        //the upper code and lower code should prob be separated into different methods.
        //may make this change later
        let searchResultHtml = ""
        filteredSales.forEach(sale => {

            searchResultHtml += `<section>`
            for (const salesAgentValue of Object.entries(sale.sales_agent)) {
                searchResultHtml += `<p>${salesAgentValue[0]}: ${salesAgentValue[1]}</p>`
            }
            searchResultHtml += `<p>gross profit: ${sale.gross_profit}</p>`
            searchResultHtml += `</section>`
        });
        addSearchResultHtml(searchResultHtml)
    }
})

const addSearchResultHtml = searchResultHtml => {
    document.querySelector("#searchResults").innerHTML = searchResultHtml;
}



