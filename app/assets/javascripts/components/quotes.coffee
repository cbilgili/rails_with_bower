@Quotes = React.createClass
    getInitialState: ->
      quotes: @props.data

    getDefaultProps: ->
      quotes: []

    addQuote: (quote) ->
      quotes = @state.quotes.slice()
      quotes.push quote
      @setState quotes: quotes

    deleteQuote: (quote) ->
      quotes = @state.quotes.slice()
      index = quotes.indexOf quote
      quotes.splice index, 1
      @replaceState quotes: quotes

    render: ->
      React.DOM.div
        className: 'quotes'
        React.DOM.h1
          className: ''
          "Welcome To Quotelist " + @state.quotes.length 
        React.DOM.h2
          className: 'title'
          'Quotes'
        React.createElement QuoteForm, handleNewQuote: @addQuote
        React.DOM.table
          className: 'ui celled table'
          React.DOM.thead null,
            React.DOM.tr null,
              React.DOM.th null, 'Id'
              React.DOM.th null, 'Content'
              React.DOM.th null, 'Url'
              React.DOM.th null, 'Notes'
              React.DOM.th null, 'Actions'
          React.DOM.tbody null,
            for quote in @state.quotes
              React.createElement Quote, key: quote.id, quote: quote, handleDeleteQuote: @deleteQuote