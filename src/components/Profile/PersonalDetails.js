import React, * as react from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom'
import fire from './../config';
import { connect } from 'react-redux';

class PersonalDetails extends react.Component {
    constructor() {
        super()

        this.state = {
            profilePictureUrl: ''
        }
    }


    handlePicture = (e) => {
        const uid = sessionStorage.getItem("access_token");
        // let date = e.target.files[0].lastModified
        let filename = 'myprofilepicture'
        let storageRef = fire.storage().ref();
        let metadata = {
            contentType: 'image/jpeg'
        };
        let mountainImagesRef = storageRef.child('profile_pictures/' + uid + '/' + filename)
        let onUploadTask = mountainImagesRef.put(e.target.files[0], metadata);

        onUploadTask.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        })

    }


    componentDidMount() {
        let storageRef = fire.storage().ref();
        const uid = sessionStorage.getItem("access_token");

        storageRef.child('profile_pictures/' + uid + '/myprofilepicture').getDownloadURL()
            .then((url) => {
                this.setState({
                    profilePictureUrl: url
                })
            }).catch((error) => {
                this.setState({
                    profilePictureUrl: ''
                })
            });

    }



    render() {
        console.log(this.state.profilePictureUrl)
        return (
            <Row>
                <Col md={3}>
                    <Image src={!!this.state.profilePictureUrl ? this.state.profilePictureUrl : 'https://via.placeholder.com/100'}
                        style={{ width: '200px' }} />
                    <input type='file' onChange={this.handlePicture} />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h2>Username</h2>
                        </Col>


                        <Col>
                            <button><NavLink to='/edit/account' style = {{textDecoration : 'none'}}>Edit Profile</NavLink></button>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <span>342 Posts</span>
                        </Col>
                        <Col>
                            <span>342 Followers</span>
                        </Col>
                        <Col>
                            <span>342 Following</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Bio</p>
                        </Col>
                    </Row>
                </Col>
            </Row>


        )
    }
}

const mapStateToProps = state => ({
    userToken: state.userToken
})

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails)