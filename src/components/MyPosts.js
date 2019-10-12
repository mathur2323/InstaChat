import React, { Component } from 'react'
import fire from './config';

class MyPosts extends Component {
    constructor() {
        super()
        this.state = {
            postImageUrl:'',
            caption:'',
            uploaded:false
        }
    }
    
    handleChange = e => {
        this.setState({
            caption:e.target.value
        })
    }
    handlePicture = (e) => {
        const uid = sessionStorage.getItem("access_token");
        // let date = e.target.files[0].lastModified
        let filename = e.target.files[0].name;
        let storageRef = fire.storage().ref();
        let metadata = {
            contentType: 'image/jpeg'
        };
        let mountainImagesRef = storageRef.child('my_posts/' + uid + '/' + filename)
        let onUploadTask = mountainImagesRef.put(e.target.files[0], metadata);

        onUploadTask.on('state_changed',  (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            this.setState({
                uploaded:true
            })
        })
    }

    submitPost = e => {
        e.preventDefault();
        const uid = sessionStorage.getItem("access_token");
        fire.database().ref('my_posts/' + uid).set({
            postImageUrl:this.state.postImageUrl,
            caption:this.state.caption
          });
    }

    componentDidMount(){
        let storageRef = fire.storage().ref();
        const uid = sessionStorage.getItem("access_token");

        storageRef.child('my_posts/' + uid).getDownloadURL()
            .then((url) => {
                this.setState({
                    postImageUrl: url
                })
            }).catch((error) => {
                this.setState({
                    postImageUrl: ''
                })
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitPost}>
                <input type='text' placeholder="...." onChange={this.handleChange}  />
                <input type="file"  onChange={this.handlePicture} />
                <button>Add Post</button>
                </form>
            </div>
        )
    }
}

export default MyPosts
