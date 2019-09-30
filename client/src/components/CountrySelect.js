class CountrySelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'destination'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your happy place is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose Your Destination:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Armenia">Armenia</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahrain">Bahrain</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }