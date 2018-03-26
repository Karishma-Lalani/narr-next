import React from 'react';
import { connect } from 'react-redux';
//import sbublockes from './html/subBlocksHtml';

let BlocksHtml = ({ dispatch }) => {
    return (
        <div className="row bottom-m-20">
            <div className="col-md-6 col-sm-6">
                <div className="column-div">
                    <p className="head-text">Common</p>

                    <div className="btn-custom-group">
                        <button type="button" className="btn btn-primary btn-custom">Primary</button>
                        <button type="button" className="btn btn-secondary btn-custom">Second</button>
                        <button type="button" className="btn btn-success btn-custom">Success</button>
                        <button type="button" className="btn btn-info btn-custom">Info</button>
                        <button type="button" className="btn btn-danger btn-custom">Danger</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-6">
                <div className="column-div">
                    <p className="head-text">Common</p>

                    <div className="btn-custom-group">
                        <button type="button" className="btn btn-primary btn-custom">Primary</button>
                        <button type="button" className="btn btn-secondary btn-custom">Second</button>
                        <button type="button" className="btn btn-success btn-custom">Success</button>
                        <button type="button" className="btn btn-info btn-custom">Info</button>
                        <button type="button" className="btn btn-danger btn-custom">Danger</button>
                    </div>
                </div>
            </div>
        </div> 

    );
};
BlocksHtml = connect()(BlocksHtml);

export default BlocksHtml