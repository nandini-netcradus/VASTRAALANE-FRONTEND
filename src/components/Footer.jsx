import React from "react";
import "../scss/_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      {/* <p>© 2025 Vastraaalane. All rights reserved.</p> */}

      <div className="policy-info">
        <h3>Need Help?</h3>
        <p>
          For any queries, reach us at{" "}
          <a href="mailto:info@vastraalane.com">info@vastraalane.com</a>{" "}
          or call <strong>+91-9910678434</strong>.
        </p>

        <div className="policy-points">
          <p>✔ Returns accepted within 7 days (unused with tags).</p>
          <p>✔ Customized or sale items are non-returnable.</p>
          <p>✔ Refunds processed within 7–10 business days.</p>
          <p>✔ Monday – Saturday: 10:00 AM – 8:00 PM | Sunday: Closed</p>
        </div>
      </div>
      <p>© 2025 Vastraaalane. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
