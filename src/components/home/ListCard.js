import React from 'react';

function ListCard(props) {
  return <div>
      <b>Title: {props.title}</b> <br />
      List: <br />
      {props.tasks}
  </div>;
}
export default ListCard
