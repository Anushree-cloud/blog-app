/* first create a new folder blog-app

The app will have 4 pages for now

/blogs
/blogs/add
/blogs/edit/:id
/blogs/details/:id

/blogs
====

Blogs listing - use meterial ui cards to show blog items, 

id, name, image, date, description

/blogs/details/:id
============

Single blog details


/blogs/add    |  /blogs/edit/:id
====================

Blog creation form - name, image, date, description */

import React from 'react'

export default function Blog() {
    return (
        <h1>
            This is my Blog Page.
        </h1>
    )
}
