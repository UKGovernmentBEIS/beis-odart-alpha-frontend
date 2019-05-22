import React from "react";

import BaseLocale from "../../../locale/base"

const Directory = () => (
  <section className="home-directory">
    <h2 className="govuk-heading-l">{BaseLocale.homeHeaderTwo}</h2>
    <ul className="govuk-list govuk-list--bullet">
      <li>
        <a href={BaseLocale.searchLink}>{BaseLocale.searchTitle}</a>
      </li>
      <li>
        <a href={BaseLocale.orderLink}>{BaseLocale.orderTitle}</a>
      </li>
      <li>
        <a href={BaseLocale.dashboardLink}>{BaseLocale.dashboardTitle}</a>
      </li>
    </ul>
  </section>
);

export default Directory;