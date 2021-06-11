import React, { Component } from 'react';

class MovieRow extends Component {
  render() {
    const { _id, title, genre, numberInStock, dailyRentalRate } = this.props.movie;

    return (
      <tr key={_id}>
        <td>{title}</td>
        <td>{genre.name}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <button onClick={() => this.props.onDelete(_id)} className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default MovieRow;
