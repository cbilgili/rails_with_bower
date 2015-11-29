var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var QuoteFormModal = React.createClass({
  getInitialState: function() {
    return {
      content: '',
      author: '',
      url: '',
      notes: '',
      showModal: false
    };
  },
  open: function() {
        this.setState({ showModal: true });
  },

  close: function() {
    this.setState({ showModal: false });
  },

  handleChange: function(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.post('/quotes',
           { quote: this.state },
           function(data) {
             this.props.handleNewQuote(data);
             this.setState(this.getInitialState());
           }.bind(this),
           'JSON'
    );
  },


  render: function() {
    return (
      <div>

        <Button
          bsStyle="primary"
          bsSize="medium"
          onClick={this.open}
        >
          Add New Quote
        </Button>
        <hr />
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group form-group-lg">
                <label for="exampleInputEmail1">Quote</label>
                <textarea type="text" className="form-control" name="content" placeholder="Quote" value={this.state.content} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Author</label>
                <input type="text" className="form-control" name="author" placeholder="Author" value={this.state.author} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Notes</label>
                <textarea className="form-control" name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">URL</label>
                <input type="text" className="form-control" name="url" placeholder="URL" value={this.state.url} onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
module.exports = QuoteFormModal;