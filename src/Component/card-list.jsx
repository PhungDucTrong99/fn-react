import React, {Component} from "react";

const BookList = ({data}) => (
    <table className="table table-sm">
        <thead>
            <tr>
                <th scope="col">Book</th>
                <th scope="col">Type</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th scope="col">Public Date</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((dt) => {
                    return (
                        <tr>
                            <th scope="row">{dt.book}</th>
                            <td>{dt.type}</td>
                            <td>{dt.author}</td>
                            <td>{dt.price}</td>
                            <td>{dt.publicdate}</td>
                        </tr>
                    );
                })
            }
        </tbody>
    </table>
)
export default BookList