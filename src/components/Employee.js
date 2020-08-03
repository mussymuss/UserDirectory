import React from "react";



// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
class Employee extends React.Component {
  render() {
    return (
      <li className="list-group-item">
       
        <div className="row">
          <p className="col-md-2">{this.props.employee.name}</p>
          <p className="col-md-2">{this.props.employee.number}</p>
          <p className="col-md-2"><a href={"mailto:" + this.props.employee.email} target="__blank">
                {this.props.employee.email}</a></p>
          <p className="col-md-2">{this.props.employee.department}</p>
          <p className="col-md-2">{this.props.employee.location}</p>
          <p className="col-md-2">{this.props.employee.birth}</p>
        </div>
      </li>
    );
  }
}

export default Employee;