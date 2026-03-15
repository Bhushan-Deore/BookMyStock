import React from "react";

function Hero() {
    return (
        <div style={{backgroundColor:"rgb(247, 247, 247)"}}>

            {/* Top Row */}
            <div className="d-flex justify-content-between align-items-center p-4" style={{width:""}}>
                <h2 className="fw-semibold mx-5">Support Portal</h2>

                <button className="btn btn-primary px-4 me-5">
                    My tickets
                </button>
            </div>

            {/* Search Bar */}
            <div className=" px-5 ">
                <div className="input-group input-group-lg">
                    <span className="input-group-text bg-white border-end-0 mb-5">
                        <i className="bi bi-search text-muted"></i>
                    </span>

                    <input
                        type="text"
                        className="form-control border-start-0 mb-5"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                    />
                </div>
            </div>

        </div>
    );
}

export default Hero;