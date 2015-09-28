  @Quote = React.createClass
    render: ->
      React.DOM.tr null,
        React.DOM.td null, @props.quote.id
        React.DOM.td null, @props.quote.content
        React.DOM.td null, ""