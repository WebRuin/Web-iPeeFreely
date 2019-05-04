import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import Table from './styles/Table';
import Inner from './styles/Inner';

const possiblePermissions = [
  'ADMIN',
  'USER',
  'BATHROOMCREATE',
  'BATHROOMUPDATE',
  'BATHROOMDELETE',
  'PERMISSIONUPDATE'
];

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) =>
      console.log(data) || (
        <Inner>
          <Error error={error} />
          <div>
            <h2>Manage Permessions</h2>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  {possiblePermissions.map(permission => (
                    <th>{permission}</th>
                  ))}
                  <th>⮟</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => (
                  <User user={user} />
                ))}
              </tbody>
            </Table>
          </div>
        </Inner>
      )
    }
  </Query>
);

class User extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {possiblePermissions.map(permission => (
          <td>
            <lable htmlFor={`${user.id}-permission-${permission}`}>
              <input type="checkbox" />
            </lable>
          </td>
        ))}
      </tr>
    );
  }
}

export default Permissions;
