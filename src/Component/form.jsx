import React from "react";

const Form = () => {
    return (
        <form>
        <div class="form-row">
          <div class="form-group col-md-12 pe-2">
            <label>Book</label>
            <input type="text" class="form-control" id="books" placeholder=""/>
          </div>
        </div>
        <div class="form-row d-flex">
            <div class="form-group col-md-4 pe-2">
                <label>Type</label>
                <input type="text" class="form-control" id="types" placeholder=""/>
            </div>
            <div class="form-group col-md-4 pe-2">
                <label>Author</label>
                <input type="text" class="form-control" id="authors" placeholder=""/>
            </div>
            <div class="form-group col-md-4 pe-2">
                <label>Public date</label>
                <input type="text" class="form-control" id="publicdates" placeholder=""/>
            </div>
        </div>
        <div class="form-row d-flex">
            <div class="form-group col-md-4 pe-2">
                <label>Price</label>
                <input type="text" class="form-control" id="prices" placeholder=""/>
            </div>
            <div class="form-group col-md-4 pe-2">
                <label>Quantity</label>
                <input type="text" class="form-control" id="quanties" placeholder=""/>
            </div>
            <div class="form-group col-md-4 pe-2">
                <label>Total</label>
                <input type="text" class="form-control" id="totals" placeholder=""/>
            </div>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-primary my-2 me-2">Add to Card</button>
            <button type="button" class="btn btn-light my-2 me-2">Cancel</button>
        </div>
        
      </form>
    );
}
export default Form;