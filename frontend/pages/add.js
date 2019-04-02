import CreateBathroom from "../components/CreateBathroom";
import PleaseSignIn from "../components/PleaseSignIn";

const Add = props => (
  <div>
    <PleaseSignIn>
      <CreateBathroom />
    </PleaseSignIn>
  </div>
);

export default Add;
