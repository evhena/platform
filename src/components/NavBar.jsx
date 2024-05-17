import React from 'react';

export default function NavBar() {
  return (
    <div>
      NavigationBar
      <line />
      <Link to="/">Your Designs</Link>
      <Link to="/profile">Profile page</Link>
      <Link to="/social">Social Accounts</Link>
      <Link to="/templates">Templates List</Link>
      <Link to="/templates/:id">TemplateEditor</Link>
    </div>
  );
}
