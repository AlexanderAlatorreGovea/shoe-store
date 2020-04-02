import React, { Component } from 'react'

export default class ShippingBilling extends Component {
    render() {
        return (
            <div> 
                 <form>
                        <div className="form-group">
                            <label for="fname">First Name</label>
                            <input id="fname" type="text" name="fname"></input>
                        </div>
                        <div className="form-group">
                            <label for="lname">Last Name</label>
                            <input id="lname" type="text" name="lname"></input>
                        </div>
                        <div className="form-group">
                            <label for="address1">Address #1</label>
                            <input id="address1" type="text" name="address1"></input>
                        </div>
                        <div className="form-group">
                            <label for="address2">Address #2</label>
                            <input id="address2" type="text" name="address2"></input>
                        </div>
                        <div className="form-group">
                            <label for="city">City</label>
                            <input id="city" type="text" name="city"></input>
                        </div>
                        <div className="form-group">
                            <label for="zipcode">Zipcode</label>
                            <input id="zipcode" type="text" name="zipcode"></input>
                        </div>
                        <div className="form-group">
                            <label for="country">Country</label>
                            <input id="country" type="text" name="country"></input>
                        </div>
                        </form>

                        <h3>Billing Information</h3>
                        <form>
                        <div className="form-group">
                            <label for="fname">First Name</label>
                            <input id="fname" type="text" name="fname"></input>
                        </div>
                        <div className="form-group"> 
                            <label for="lname">Last Name</label>
                            <input id="lname" type="text" name="lname"></input>
                        </div>
                        <div className="form-group">
                            <label for="address1">Address #1</label>
                            <input id="address1" type="text" name="address1"></input>
                        </div>
                        <div className="form-group">
                            <label for="address2">Address #2</label>
                            <input id="address2" type="text" name="address2"></input>
                        </div>
                        <div className="form-group">
                            <label for="city">City</label>
                            <input id="city" type="text" name="city"></input>
                        </div>
                        <div className="form-group">
                            <label for="zipcode">Zipcode</label>
                            <input id="zipcode" type="text" name="zipcode"></input>
                        </div>
                        <div className="form-group">
                            <label for="country">Country</label>
                            <input id="country" type="text" name="country"></input>
                        </div>
                </form>
            </div>
        )
    }
}
