//we are doing this in different folder because it will not be rendered as routes but instead it will embedded and visible constantly,e its a navigation bar!!
import { Link } from "react-router-dom";
//link is not sending new request but instead just parse the url we want to go to, change it in the browser url bar and then loads the appropriate component on the screen using js and react
function Navigation() {
  return (
    <header>
      <div>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link> Something </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
