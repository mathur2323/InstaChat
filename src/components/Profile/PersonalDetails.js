import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom'
import fire from './../config';
import { connect } from 'react-redux';

class PersonalDetails extends Component {

    handlePicture = (e) => {
        const uid = this.props.userToken.accessToken;
        // let date = e.target.files[0].lastModified
        let filename = e.target.files[0].name
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

    render() {
        return (



            <Row>
                <Col md={3}>
                    <Image src="https://via.placeholder.com/150" />
                    <input type='file' onChange={this.handlePicture} />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h2>Username</h2>
                        </Col>


                        <Col>
                            <button><NavLink to='/edit'>Edit Profile</NavLink></button>
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