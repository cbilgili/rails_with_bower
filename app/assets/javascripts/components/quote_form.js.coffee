@QuoteForm = React.createClass
    getInitialState: ->
      content: ''
      url: ''
      notes: ''

    handleChange: (e) ->
      name = e.target.name
      @setState "#{ name }": e.target.value

    handleSubmit: (e) ->
      e.preventDefault()
      $.post '/quotes', { quote: @state }, (data) =>
        @props.handleNewQuote data
        @setState @getInitialState()
      , 'JSON'

    handleShowModalClick: (e) ->
      e.preventDefault()
      $('.modal').modal('show')
      
    valid: ->
      @state.content
        
    render: ->
      React.DOM.div null,
        React.createElement QuoteFormModal, handleNewQuote: @addQuote
        React.DOM.a
          className: 'btn'
          onClick: @handleShowModalClick
          'Click me'
      # React.DOM.form
      #   className: 'form-inline'
      #   onSubmit: @handleSubmit
      #   React.DOM.input
      #     type: 'text'
      #     className: 'form-control'
      #     placeholder: 'Content'
      #     name: 'content'
      #     value: @state.content
      #     onChange: @handleChange
      #   React.DOM.input
      #     type: 'text'
      #     className: 'form-control'
      #     placeholder: 'URL'
      #     name: 'url'
      #     value: @state.url
      #     onChange: @handleChange
      #   React.DOM.input
      #     type: 'text'
      #     className: 'form-control'
      #     placeholder: 'Notes'
      #     name: 'notes'
      #     value: @state.notes
      #     onChange: @handleChange
      #   React.DOM.button
      #     type: 'submit'
      #     className: 'btn btn-primary'
      #     disabled: !@valid()
      #     'Create quote'