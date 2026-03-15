import React from "react";

function CreateTicket() {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-9 px-5">
                        <div className="accordion" id="supportAccordion">
                            {/* Account Opening */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accountOpening"
                                    >
                                        <i className="bi bi-plus-circle me-3 text-primary"></i>
                                        Account Opening
                                    </button>
                                </h2>

                                <div
                                    id="accountOpening"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#supportAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul >
                                            <li><a href="#">Resident individual</a></li>
                                            <li><a href="#">Minor</a></li>
                                            <li><a href="#">Non Resident Indian (NRI)</a></li>
                                            <li><a href="#">Company, Partnership, HUF and LLP</a></li>
                                            <li><a href="#">Glossary</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Your BookMystock Account */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#BookMyStockAccount"
                                    >
                                        <i className="bi bi-person-circle me-3 text-primary"></i>
                                        Your BookMyStock Account
                                    </button>
                                </h2>

                                <div
                                    id="BookMyStockAccount"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#supportAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul >
                                            <li><a href="#">Your Profile</a></li>
                                            <li><a href="#">Account modification</a></li>
                                            <li><a href="#">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                            <li><a href="#">Nomination</a></li>
                                            <li><a href="#">Transfer and conversion of securities</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Kite */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#kite"
                                    >
                                        <i class="bi bi-speedometer2 me-3 text-primary"></i>
                                        Kite
                                    </button>
                                </h2>

                                <div
                                    id="kite"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#supportAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul >
                                            <li><a href="#">IPO</a></li>
                                            <li><a href="#">Trading FAQs</a></li>
                                            <li><a href="#">Margin Trading Facility (MTF) and Margins</a></li>
                                            <li><a href="#">Charts and orders</a></li>
                                            <li><a href="#">Alerts and Nudges</a></li>
                                            <li><a href="#">General</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Funds */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#funds"
                                    >
                                        <i class="bi bi-currency-rupee me-3 text-primary"></i>
                                        Funds
                                    </button>
                                </h2>

                                <div
                                    id="funds"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#supportAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul >
                                            <li><a href="#">Add money</a></li>
                                            <li><a href="#">Withdraw money</a></li>
                                            <li><a href="#">Add bank accounts</a></li>
                                            <li><a href="#">eMandates</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Console*/}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#console"
                                    >
                                        <i class="bi bi-display me-3 text-primary"></i>
                                        Console
                                    </button>
                                </h2>

                                <div
                                    id="console"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#supportAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul >
                                            <li><a href="#">Portfolio</a></li>
                                            <li><a href="#">Corporate actions</a></li>
                                            <li><a href="#">Funds statement</a></li>
                                            <li><a href="#">Reports</a></li>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Segments</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Coin*/}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#coin"
                                    >
                                        <i class="bi bi-coin me-3 text-primary"></i>
                                        Coin
                                    </button>
                                </h2>

                                <div
                                    id="coin"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#supportAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul >
                                            <li><a href="#">Mutual funds</a></li>
                                            <li><a href="#">National Pension Scheme (NPS)</a></li>
                                            <li><a href="#">Fixed Deposit (FD)</a></li>
                                            <li><a href="#">Features on Coin</a></li>
                                            <li><a href="#">Payments and Orders</a></li>
                                            <li><a href="#">General</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-3">
                        {/* Announcement / Alert */}
                        <div
                            className="alert alert-warning d-flex align-items-start"
                            role="alert"
                            style={{ borderLeft: "6px solid #ff9800" }}
                        >
                            <ul className="mb-0 ps-3">
                                <li>
                                    <a href="" className="text-decoration-none">
                                        Introduction of Gold 10 grams Futures contracts in NSE Commodity (NCO)
                                        segment
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="" className="text-decoration-none">
                                        Surveillance measure on scrips – February 2026
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="card mt-3">
                            <div className="card-header fw-semibold">
                                Quick links
                            </div>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="" className="text-decoration-none">
                                        1. Track account opening
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="" className="text-decoration-none">
                                        2. Track segment activation
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="" className="text-decoration-none">
                                        3. Intraday margins
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="" className="text-decoration-none">
                                        4. Kite user manual
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="" className="text-decoration-none">
                                        5. Learn how to create a ticket
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateTicket;