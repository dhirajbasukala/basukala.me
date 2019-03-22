import { connect } from 'react-redux';
import { fetchGists } from './action'

const mapStateToProps = state => ({
  gists: state.gists,
  searchedUser: state.searchedUser,
  searchGists: state.searchGists
})

const mapDispatchToProps = ({
  fetchGists
});

function Gists (){
  return <div> Gists it is. </div>
}


export default  connect(mapStateToProps, mapDispatchToProps)(Gists);