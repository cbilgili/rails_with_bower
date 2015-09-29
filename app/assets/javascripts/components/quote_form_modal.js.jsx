var Modal = require('modal');

var QuoteFormModal = React.createClass({
  getInitialState: function() {
    return {
      content: '1',
      url: '2',
      notes: '3',
      isOpened: false
    };
  },
  open: function(){
    this.setState({isOpened: true});
  },
  close: function(){
    this.setState({isOpened: false});
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
        <button className='ui button blue' onClick={this.open.bind(this)}>Click me</button>
        <Modal style='standard' size='fullscreen' isOpened={this.state.isOpened} closeIcon closeOnOutsideClick onClose={this.close.bind(this)}>
          <div className='header'>
            Profile Picture
          </div>
          <div className='image content'>
            <div className='ui medium image'>
              <img src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
            </div>
            <div className='description'>
              <div className='ui header'>We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href='https://www.gravatar.com' target='_blank'>gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div className='actions'>
            <div className='ui black deny button' onClick={this.close.bind(this)}>
              Nope
            </div>
            <div className='ui positive right labeled icon button'>
              Yep, thats me
              <i className='checkmark icon'></i>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
});
module.exports = QuoteFormModal;