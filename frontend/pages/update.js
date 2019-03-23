import UpdateBathroom from "../components/UpdateBathroom";

const Update = ({ query }) => (
  <div>
    <UpdateBathroom id={query.id} />
  </div>
);

export default Update;
