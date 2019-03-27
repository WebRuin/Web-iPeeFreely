import SingleBathroom from "../components/SingleBathroom";

const Bathroom = props => (
  <div>
    <SingleBathroom id={props.query.id} />
  </div>
);

export default Bathroom;
