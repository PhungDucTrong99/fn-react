import React, {Component} from "react";

const CardList = ({data, deleteBook}) => (
    <table className="table table-sm">
        <thead>
            <tr>
                <th scope="col">Book</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((dt) => {
                    return (
                        <tr>
                            <th scope="row">{dt.book}</th>
                            <td>{dt.quantity}</td>
                            <td>{dt.price}</td>
                            <td>
                                <button className="btn btn-danger m-1" onClick ={() => {
                                    deleteBook(dt.book);
                                }}><i className="fa fa-remove"></i></button>
                            </td>
                        </tr>
                    );
                })
            }
        </tbody>
    </table>
)
export default CardList