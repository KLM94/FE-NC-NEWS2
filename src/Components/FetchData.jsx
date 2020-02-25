// class DogsList extends Component {
//     state = { Dogs: [] }

//   componentDidMount() {
//     this.fetchDogs()
//   }

//   componentDidUpdate(prevState) {
//     if (this.state.sortBy !== prevState.sortBy){
//         this.fetchDogs()
//     }
// }

//   fetchDogs = () => {
//     getDogs(this.props.topic, this.state.sortBy)
//     .then(response => {
//       this.setState({ Dogs: response.data.Dogs, isLoading: false });
//     })
//     .catch(err => console.dir(err));
//   }

//     render() {
//         return (  );
//     }
// }

// export default ;
