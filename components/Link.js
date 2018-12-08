import React from 'react'
import Link  from 'next/link'


export default ({page, query, params, children}) => 
<Link as={`/${page}/${params}`} href={`/${page}${query}`}> 
    <a>
        {children}
    </a>
</Link>