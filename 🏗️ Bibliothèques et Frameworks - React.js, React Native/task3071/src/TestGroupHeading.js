import React from "react";

function HeadingA() {
  return <h2>This is heading for test group A</h2>
}

function HeadingB() {
  return <h3>Group B heading</h3>
}

export default function TestGroupHeading({ testGroup }) {
  return <HeadingB />;
}