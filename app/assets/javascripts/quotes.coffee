@Quotes = React.createClass
    getInitialState: ->
      quotes: @props.data
    getDefaultProps: ->
      quotes: []
    render: ->
      React.DOM.div
        className: 'quotes'
        React.DOM.h2
          className: 'title'
          'Quotes'
        React.DOM.table
          className: 'table table-bordered'
          React.DOM.thead null,
            React.DOM.tr null,
              React.DOM.th null, 'Date'
              React.DOM.th null, 'Title'
              React.DOM.th null, 'Amount'
          React.DOM.tbody null,
            for quote in @state.quotes
              React.createElement Quote, key: quote.id, quote: quote