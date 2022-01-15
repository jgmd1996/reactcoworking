import React from 'react';
import Cars from './Cars';
import DestroctionProps from './DestroctionProps';


// para destruir o props e so mudar o Cars por DestroctionProps
function Props() {
  return (
    <div className="contact">
      
      <Cars 
      modelo="joao gabriel"
      ano="981745600"
      placa="jgmd1996@gmail.com"
      ispun={true}
      upvotes={10}
      downvotes={2}
      comments={[{by:"", bory: "", title: ""}]}
      />
      
    </div>
  );
}

export default Props;
