import Bathrooms from "../components/Bathrooms";
import { Query } from "react-apollo";

const BathroomsPage = props => (
  <div>
    <Bathrooms page={parseFloat(props.query.page) || 1} />
  </div>
);

export default BathroomsPage;
