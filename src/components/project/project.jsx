import React from "react";
import "./project.css";
import { BiCheck } from "react-icons/bi";

// import {HiOutlineArrowSmallRight} from 'react-icons/hi'

const project = () => {
  return (
    <section id="projects">
      <h5> Projects I have worked</h5>
      <h2> Projects </h2>

      <div className="container projects__container">
        <article id="project">
          <div className="project__head">
            <h3>Self Service Integration</h3>
          </div>

          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                {" "}
                Developed an integrated self-project web payment application
                using .NET Core, ReactJS, SQL, Web API, JWT, Swagger, and Azure,
                resulting in a 7% improvement in user experience.{" "}
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                {" "}
                Led a Scrum team of seven, achieving timely project completion,
                reducing time-to-market by 4%, and ensuring high-quality outputs
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Managed SQL queries and procedures for backend data updates and
                resolved production issues during client transitions, improving
                customer experience by 6%.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Created custom HTML tags with React.js and developed ASP.NET
                Core Web API with JWT token-based authentication.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Led Data Migration projects, from analysis to acceptance, and
                managed unit testing, code integration, and releases.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Designed complex SQL stored procedures, triggers, and cursors,
                and maintained consistent UI with CSS.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Analyzed and met business, functional, and technical
                requirements, collaborating with users and resolving support
                issues.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Provided status updates to management and clients, working with
                multiple client teams and projects
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Conducted unit testing using JUnit and documented unit test
                results.
              </p>
            </li>
          </ul>
        </article>
        {/* End of paycor */}
        <article id="project">
          <div className="project__head">
            <h3>CardActivation</h3>
          </div>
          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Conducted thorough assessments using security tools like HP
                Fortify, Black Duck, and Veracode to identify security
                vulnerabilities present in the applications.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Addressed various vulnerabilities such as HTML injection, SQL
                injection, Cross-Site Scripting (XSS), and input validation
                issues by implementing appropriate fixes and security patches.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Ensured that encryption methods used in the applications were
                up-to-date and complied with industry best practices for
                securing sensitive data.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Reviewed and updated the coding standards in the applications to
                adhere to secure coding practices, reducing the risk of
                introducing new vulnerabilities.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Implemented server-side security checks to validate and sanitize
                user inputs, preventing potential security exploits
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Acted upon the results of penetration tests, addressing and
                resolving the identified security weaknesses and flaws to
                strengthen application security.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Proactively updated third-party libraries and dependencies to
                the latest secure versions, mitigating potential security risks
                associated with outdated or vulnerable libraries
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Ensured that the applications complied with licensing
                requirements for third-party components and libraries, avoiding
                legal issues and ensuring a secure and compliant software
                environment.
              </p>
            </li>
          </ul>
        </article>
        {/* End of CardActivation */}

        <article id="project">
          <div className="project__head">
            <h3>QAS</h3>
          </div>
          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Actively processed files, generated reports, and ensured timely
                data delivery for clients across regions.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Led end-to-end development of application modules, enhancing
                user mapping and customization.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Migrated legacy report application (QAS) to modern tech (ASP.NET
                Core, Web API, ReactJS, T-SQL) for improved performance.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Optimized user sessions and SQL transactions, enhancing
                application performance and response times.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Utilized SQL Server Integration projects (SSIS) for data
                extraction, loading, and transformation.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Created reports with graphs and charts using SQL Server
                Reporting projects (SSRS).
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Implemented data export functionality to .csv and .xlsx formats
                for client analysis.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Collaborated closely with clients, documented codebase, and
                ensured the application met specific report and data processing
                needs.
              </p>
            </li>
          </ul>
        </article>

        {/* End of QAS */}

        <article id="project">
          <div className="project__head">
            <h3>BalanceTransfer</h3>
          </div>
          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Design, develop, and maintain the BalanceTransfer application
                using a stack of technologies, including C# 5, MVC 4, .NET 4.6,
                AngularJS, HTML, CSS, JavaScript, jQuery, and MS SQL.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Implement account number masking and session management features
                to enhance the application's security and improve the user
                experience during transactions.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Ensure all transactions adhere to proper validation rules and
                meet business requirements, guaranteeing data accuracy and
                integrity. Optimize the application code for performance to
                ensure efficient and responsive operation
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Collaborate with the project team, including developers,
                testers, and stakeholders, to ensure seamless project
                development and delivery.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Prepare and maintain thorough documentation to support clear
                communication, facilitate easy maintenance, and enable future
                enhancements for the application.
              </p>
            </li>
          </ul>
        </article>
        {/* End of BalanceTransfer */}
        <article id="project">
          <div className="project__head">
            <h3>FISLoginGateWay</h3>
          </div>
          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Collaborated with stakeholders to gather requirements and define
                security goals for a tailored Multi-Factor Authentication (MFA)
                solution.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Designed MFA system architecture with seamless integration using
                technologies like VB.NET, ASP.NET, ASP.NET MVC, RESTful API, and
                RSA.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Implemented and integrated RSA-based MFA into existing systems,
                enabling time-sensitive OTP generation and verification.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Conducted security testing and code reviews, ensuring robust
                protection and documented technical specifications for setup and
                usage
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Managed deployment, monitored system performance, and provided
                user training and support for the MFA solution in production
                environments.
              </p>
            </li>
          </ul>
        </article>

        {/* End of FISLoginGateWay */}
        <article id="project">
          <div className="project__head">
            <h3>eReports</h3>
          </div>
          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Managed file processing system, ensuring accurate report
                generation from .dat files in various formats and validating
                data formatting.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Verified and updated configurations to align with client
                preferences, accommodating changes in requirements or system
                updates.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Set up a new server for eReports, configured IIS for hosting the
                website, installed Windows projects, and ensured security
                compliance.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Conducted database scripting for data integrity, configured
                Oracle client connectivity, and established communication with
                SQL and Oracle servers.
              </p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>
                Updated licenses and passwords for proper functionality and
                compliance, ensuring validity per licensing agreements.
              </p>
            </li>
          </ul>
        </article>
        {/* End of eReports */}
      </div>
    </section>
  );
};

export default project;
