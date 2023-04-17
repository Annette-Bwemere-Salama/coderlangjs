import React from "react";

export default function User({ id, role, permissions, details }) {
  return (
    <div>
      <h2>{id}. {details.name}, <small><i>{details.email}</i></small></h2>
      <div>Role: {role}</div>
      {permissions && <div>Permissions: {permissions.join(', ')}</div>}
    </div>
  );
}
