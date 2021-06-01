import React, { useState } from 'react'
import { Button, Input, Container, Label } from 'semantic-ui-react'

const Test = () => {
  const [token, setToken] = useState('')
  const objectId = '4156723854340680'

  window.onload = () => {
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        console.log(response.authResponse.accessToken);
        setToken(accessToken)
      }
      else
        FB.login()
    });
  }

  function getPostLike() {
    FB.api(
      `/${objectId}/likes?fields=likes.summary(true)&access_token=${token}`,
      "GET",
      function (response) {
        if (response && !response.error) {
          console.log(response.error)
        }
        else console.log(response)
      }
    )
  }

  return (
    <Container style={{ marginBottom: '20px' }}>
      <div style={{ margin: '15px 20px' }}>
        <Label>
          Enter post Id
      </Label>
        <Input focus placeholder='Search...' />
      </div>
      <div style={{ width: '100%' }}></div>
      <Button color='teal' style={{ margin: "0 65px" }} onClick={getPostLike}>
        GET POST LIKE
      </Button>
    </Container>
  )
}

export default Test