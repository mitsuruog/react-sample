import * as React from "react";

export const Fragments = () => {
  return (
    <dl>
      {[1,2,3,4,5].map(index => (
        <React.Fragment key={index}>
          <dt>{`Title ${index}`}</dt>
          <dd>{`Name ${index}`}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};
