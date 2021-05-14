import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <table>
        <tr>
          <td>
            <Form.Control
              type='text'
              name='q'
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='Search Products Here'
              className='mr-sm-2 ml-sm-5'
              size="sm"
            ></Form.Control>
          </td>
          <td>
            <Button type='submit' variant='info' className='p-2'>Search</Button>
          </td>
        </tr>
      </table>
    </Form>
  )
}

export default SearchBox
