import React, { Component } from 'react'
import {connect} from 'react-redux';

class SearchResultPage extends Component {
    componentDidMount(){
        let value = window.location.href.split("?")[1]
        
    }

      // handleSearch = e => {
    //     e.preventDefault();
    //     var starCountRef = fire.database().ref('users/');
    //     starCountRef.on('value', (snapshot) => {
    //         let users = [];
    //         for(let user in snapshot.val()){
    //             users.push(snapshot.val()[user])
    //         }
    //         let searchedUsersList = users.filter(item => item.name == this.state.searchValue)
    //         this.props.searchResult(searchedUsersList)
    //         this.props.history.push("/results")
    //     });
    // }

    render() {
        console.log(this.props.users)
        return (
            <div>
                <h1>Search Result Page</h1>                
                {
                    this.props.users.users.length !==0 && <div>
                        <h1>this.props.users.users[0].name</h1>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users:state.searchResult
})

export default connect(mapStateToProps, null)(SearchResultPage)