import React from 'react';
import { connect } from 'react-redux';
// import Blockes from '../html/BlocksHtml';

// const Blocks = () => {
//     return 
//         {
//         Array.apply(0, Array(10)).map(function (x, i) {
//             return <Blockes  />;
//         })
//     }
    
// }

const NewHtml = ({ dispatch }) => {
    
    return (
        <div className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className="column-div text-center">
                            <p className="filter-span">Filter</p>
                            <div className="div-sidebar">
                                <button type="button" className="btn btn-primary btn-custom">Recent</button>
                                <button type="button" className="btn btn-primary btn-custom">Private</button>
                            </div>
                        </div>
                        <div className="sidebar-div">
                            <div className="content-div">
                                <p>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore libero, illo iusto repellat dolores error laudantium perferendis doloremque enim eos.</p>
                                <p>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore libero, illo iusto repellat dolores error laudantium perferendis doloremque enim eos.</p>
                                <p>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore libero, illo iusto repellat dolores error laudantium perferendis doloremque enim eos.</p>
                                <p>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore libero, illo iusto repellat dolores error laudantium perferendis doloremque enim eos.</p>
                                <p>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore libero, illo iusto repellat dolores error laudantium perferendis doloremque enim eos.</p>
                                <p>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore libero, illo iusto repellat dolores error laudantium perferendis doloremque enim eos.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 col-sm-9">
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
                        
                    </div>
                </div> 
            </div>
        </div>

    );

 };
//NewHtml = connect()(NewHtml);

export default NewHtml