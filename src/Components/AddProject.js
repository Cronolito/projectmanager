import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super()
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('title is none');
    } else{
      this.setState({newProject:{
        title: this.refs.title.valuwé,
        category: this.refs.category.value
      }}, function(){
        console.log(this.state);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
