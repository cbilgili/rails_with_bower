  @Quote = React.createClass
    handleDelete: (e) ->
      e.preventDefault()
      # yeah... jQuery doesn't have a $.delete shortcut method
      $.ajax
        method: 'DELETE'
        url: "/quotes/#{ @props.quote.id }"
        dataType: 'JSON'
        success: () =>
          @props.handleDeleteQuote @props.quote
    render: ->
      React.DOM.tr null,
        React.DOM.td null, @props.quote.id
        React.DOM.td null, @props.quote.content
        React.DOM.td null, ""
        React.DOM.td null, ""
        React.DOM.td null,
          React.DOM.a
            className: 'btn btn-danger'
            onClick: @handleDelete
            'Delete'