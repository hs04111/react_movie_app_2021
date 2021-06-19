import React, { useEffect } from "react";

function Detail({ location, history }) {
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
}

// class Detail extends React.Component {
//   componentDidMount() {
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push("/");
//     }
//   }

//   render() {
//     const { location } = this.props;
//     if (location.state) {
//       return <span>{location.state.title}</span>;
//     } else {
//       return null;
//     }
//   }
// }
export default Detail;
