import React, { Component } from 'react';
import axios from 'axios';


class checkboxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            allCategories: ['nike', 'Dolce & Gabbana', 'adidas'],
            selectedCategory: ['nike']
        }
    }

    componentDidMount() {
        axios
            .get('/api/v1/products')
            .then((res) => {
                let items = res.data.data.data;
                this.setState({
                    items,
                    isLoading: false
                })   
            })
            .catch(function (error) {
                console.log(error);
        })
    }

    fetchItems = () => {

    }

    handleDropdown = (event)  => {
        if(this.isSelected(event.target.name)) {
            const clone = this.state.selectedCategory.slice();
            const index = this.state.selectedCategory.indexOf(event.target.name);
            clone.splice(index, 1);
            this.setState({
                selectedCategory: clone
            })
        }
        else {
            this.setState({
                selectedCategory: this.state.selectedCategory.concat([event.target.name])
            })
        }
    }

    getVisibleItems = () => {
        return this.state.items.filter(item => this.isSelected(item.brand))
    }

    isSelected = (name) => this.state.selectedCategory.indexOf(name) >= 0;

    render() {
        return (
            <div>
                <div>
                {
                this.state.allCategories.map((categoryName) => {
                    return(
                        <Checkbox 
                            key={categoryName}
                            name={categoryName}
                            onChange={this.handleDropdown}
                            checked={this.isSelected(categoryName)}
                        />)
                    })
                }

                {
                    this.state.items.map((item) => {
                        return (
                            <div>
                                <img src={item.image} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}


export default checkboxes;

const Checkbox = ({name, onChange, checked}) => {
    return (
        <div style={{paddingTop: '8rem', paddingLeft: '3rem'}} >
            <label >
                {name}
                <input
                    style={{paddingTop: '30rem', display: 'flex', paddingLeft: '10rem'}} 
                    name={name}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}
