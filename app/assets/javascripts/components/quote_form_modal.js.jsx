var Modal = require('react-modal');
var QuoteFormModal = React.createClass({
  getInitialState: function() {
    return {
      content: '1',
      url: '2',
      notes: '3',
      modalIsOpen: false
    };
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  componentDidMount: function() {
    // $('.modal')
    //   .modal({
    //     closable  : false,
    //     onDeny    : function(){
    //       window.alert('Wait not yet!');
    //       return false;
    //     },
    //     onApprove : function() {
    //       console.log(this);
    //       this.props.handleNewQuote(quote);
    //     }
    //   });
  },
  handleChange: function(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },
  handleShowClick: function(e) {
    e.preventDefault();
    $('.modal').modal('show');
  },
  render: function() {
    return (
      <div>
        <button className='ui button' onClick={this.openModal}>Add New Quote</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}>
 
          <h2>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

      </div>
    );
  }
});

module.exports = QuoteFormModal;