import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class Status extends Component {
    render() {
        return <div style={styles.statusContainer}>
            <Image src={this.props.source} roundedCircle />
            {
                this.props.id == 0 ? <div style={styles.iconContainer}>
                <FontAwesomeIcon icon={faPlus} style={styles.plusIcon} />
            </div> : null
            }
        </div>
    }
}

const styles = {
    iconContainer:{
        border:'1px solid #333',
        borderRadius:'50%',
        position:'absolute',
        top:'50%',
        left:'50%',
        height:'50px',
        width:'50px',
        transform:'translate(-50%,-50%)'
    },
    statusContainer:{
        position:'relative',
    },
    plusIcon:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    }
}

export default Status
