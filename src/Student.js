import React, {Component} from 'react';

import {connect} from 'react-redux'
import {selectStudent} from './Action/Action'
import {bindActionCreators} from 'redux'

class Student extends Component{
    render(){
        return(
            <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Students</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {this.props.list.map((student) => {
                        return(
                        <tr key={student.id}> 
                            <td >{student.id} </td>
                            <td onClick ={() =>this.props.handleClick(student)}> {student.name}</td>
                        </tr>

                        )
                    })
                }
                </tr>
            </tbody>
            
            </table>
            <h1>Selected Student is:<span>{this.props.selected.name}</span></h1>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return ({
        list:state.students,
        selected :state.selected
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        handleClick:selectStudent
    },dispatch
    )
}

export default connect (mapStateToProps,mapDispatchToProps)(Student);