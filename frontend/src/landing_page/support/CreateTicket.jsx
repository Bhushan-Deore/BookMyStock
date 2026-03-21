import React from "react";

const ticketGroups = [
  {
    title: "Account Opening",
    items: ["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"],
  },
  {
    title: "Your BookMyStock Account",
    items: ["Your Profile", "Account modification", "Client Master Report (CMR) and Depository Participant (DP)", "Nomination", "Transfer and conversion of securities"],
  },
  {
    title: "Kite",
    items: ["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"],
  },
  {
    title: "Funds",
    items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    title: "Console",
    items: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
  },
  {
    title: "Coin",
    items: ["Mutual funds", "National Pension Scheme (NPS)", "Fixed Deposit (FD)", "Features on Coin", "Payments and Orders", "General"],
  },
];

function CreateTicket() {
  return (
    <section className="container responsive-section-block">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-8">
          <div className="support-ticket-grid">
            {ticketGroups.map((group) => (
              <article className="support-ticket-card" key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}><a href="/">{item}</a></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="support-side-panel support-alert-panel">
            <h3>Announcements</h3>
            <ul>
              <li><a href="/">Introduction of Gold 10 grams Futures contracts in NSE Commodity segment</a></li>
              <li><a href="/">Surveillance measure on scrips – February 2026</a></li>
            </ul>
          </div>

          <div className="support-side-panel mt-4">
            <h3>Quick links</h3>
            <ul>
              <li><a href="/">Track account opening</a></li>
              <li><a href="/">Track segment activation</a></li>
              <li><a href="/">Intraday margins</a></li>
              <li><a href="/">Kite user manual</a></li>
              <li><a href="/">Learn how to create a ticket</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
