import { Link } from "react-router-dom";

export const ErrorPage = () => {
  // const reloadPage = () => {
  //     if(confirm("The page is going to reload, your progress may be lost")){

  //     }
  // }
  return (
    <div>
      <h1>Something is wrong</h1>
      <p>Try reloading the page or</p>
      <Link to="/">go back</Link>
    </div>
  );
};
