import React from "react";

const footerSections = [
    {
        title: "Account",
        links: [
            "Open demat account",
            "Minor demat account",
            "NRI demat account",
            "Commodity",
            "Dematerialisation",
            "Fund transfer",
            "MTF",
            "Referral program",
        ],
    },
    {
        title: "Support",
        links: [
            "Contact us",
            "Support portal",
            "How to file a complaint?",
            "Status of your complaints",
            "Bulletin",
            "Circular",
            "Z-Connect blog",
            "Downloads",
        ],
    },
    {
        title: "Company",
        links: [
            "About",
            "Philosophy",
            "Press & media",
            "Careers",
            "BookMyStock Cares (CSR)",
            "BookMyStock.tech",
            "Open source",
        ],
    },
    {
        title: "Quick Links",
        links: [
            "Upcoming IPOs",
            "Brokerage charges",
            "Market holidays",
            "Economic calendar",
            "Calculators",
            "Markets",
            "Sectors",
        ],
    },
];

function Footer() {
    return (
        <footer className="border-top site-footer">
            <div className="container">
                <div className="row mt-5 footer-grid">
                    <div className="col-12 col-md-6 col-xl-3 footer-brand">
                        <img src="media/images/BookMyStockLogonew.png" alt="BookMyStock logo" />
                        <p className="mt-3 mb-0">&copy; 2010 - 2026, BookMyStock Ltd. All rights reserved.</p>
                    </div>

                    {footerSections.map((section) => (
                        <div className="col-6 col-md-3 col-xl footer-links" key={section.title}>
                            <h4>{section.title}</h4>
                            {section.links.map((link) => (
                                <a href="/" key={link}>{link}</a>
                            ))}
                        </div>
                    ))}
                </div>

                <p className="fw-light mt-4 footer-disclaimer">BookMyStock Ltd.: Member of NSE, BSE &amp; MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through BookMyStock Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered Address: BookMyStock Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities please write to complaints@BookMyStock.com, for DP related to dp@BookMyStock.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF <br /><br />
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances <br /><br />
                    Smart Online Dispute Resolution | Grievances Redressal Mechanism <br /><br />
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing. <br /><br />
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br /><br />
                    India's largest broker based on networth as per NSE. NSE broker factsheet <br /><br />
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of BookMyStock and offering such services, please create a ticket here. <br /><br />
                    *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products. <br /></p>

                <div className="text-center mb-3 footer-bottom-links">
                    {[
                        "NSE",
                        "BSE",
                        "MCX",
                        "Terms & conditions",
                        "Policies & procedures",
                        "Privacy policy",
                        "Disclosure",
                        "For investor's attention",
                        "Investor charter",
                    ].map((link) => (
                        <a href="/" style={{ textDecoration: "none" }} className="text-muted" key={link}>{link}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
