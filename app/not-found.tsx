import React from 'react';

//also error
//error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)
//

// loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
//

// route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

function NotFound() {
  return <div>I am lost. Page not found.</div>;
}

export default NotFound;
