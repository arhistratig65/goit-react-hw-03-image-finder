import { Component } from 'react';
import { toast } from 'react-toastify';

import { Form, Button, ButtonLabel, Input } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    searchQuery: ``,
  };

  handleQueryChange = ({ currentTarget: { value } }) => {
    this.setState({ searchQuery: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchQuery = this.state.searchQuery.trim();

    if (searchQuery.trim() === '') {
      toast.error('🦄 Please, enter search request!');
      return;
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          className="input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={this.handleQueryChange}
        />
      </Form>
    );
  }
}
