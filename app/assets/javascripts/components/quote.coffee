@Quote = React.createClass
  getInitialState: ->
    hover: false
  mouseOver: ->
    @setState hover: true
  mouseOut: ->
    @setState hover: false
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
    React.DOM.blockquote
      onMouseOver: @mouseOver
      onMouseOut: @mouseOut
      React.DOM.p null, @props.quote.content
      React.DOM.footer null, @props.quote.author
      React.DOM.p null, 
        @props.quote.notes
        React.DOM.a
          href: @props.quote.url
          target: "_blank"
          @props.quote.url        
      React.DOM.button
        type: "button"
        className: 'btn btn-danger delete btn-xs'
        onClick: @handleDelete
        React.DOM.span
          className: "glyphicon glyphicon-trash"
        'Delete'
      if @state.hover
        React.DOM.p null, "Over"

module.exports = @Quote