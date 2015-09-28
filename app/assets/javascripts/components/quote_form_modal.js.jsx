var QuoteFormModal = React.createClass({
  getInitialState: function() {
    return {
      content: '',
      url: '',
      notes: ''
    };
  },
  render: function() {
    return (
      <div className='ui modal'>
        <i className='close icon'></i>
        <div className='header'>
          Profile Picture
        </div>
        <div className='image content'>
          <div className='description'>
            <div className='ui header'>Weve auto-chosen a profile image for you.</div>
            <div className="ui form">
              <div className="field">
                <label>Quote</label>
                <textarea></textarea>
              </div>
              <div className="field">
                <label>Notes</label>
                <textarea rows="2"></textarea>
              </div>
              <div className="ui form">
                <div className="field">
                  <label>URL</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='actions'>
          <div className='ui black deny button'>
            Nope
          </div>
          <div className='ui positive right labeled icon button' onClick={this.handleSaveClick}>
            Yep, thats me
            <i className='checkmark icon'></i>
          </div>
        </div>
      </div>
    );
  }
});