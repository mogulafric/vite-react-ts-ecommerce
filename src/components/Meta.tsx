import React from 'react'
import { Helmet } from 'react-helmet'
type metaProps={
  title:string,
  description?:string,
  keywords?:string
}
export function Meta({ title, description, keywords }:metaProps){
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to eliphice group',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electroincs',
}


