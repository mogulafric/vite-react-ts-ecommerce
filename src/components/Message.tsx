import React from 'react'
import { Alert } from 'react-bootstrap'
type MessagesPros ={
  variant:string,
  children:[]
}
export function Message({ variant, children }:MessagesPros){
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}


