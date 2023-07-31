import CommonBanner from "../common/comonBanner/ComonBanner";
import "../rentalService/rentalService.css";
import { BiSolidChevronsRight } from "react-icons/bi";
function RentalService() {
  const commonName = { title: "Rental Service" };
  return (
    <>
      <CommonBanner commonName={commonName.title} />
      <section className="services py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="full">
                <div class="main_heading main_heading-2 text_align_center">
                  <h2>Rental Services </h2>
                  <p class="large">
                    We package the rental service with best services to make you
                    a happy customer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="rental-content">
                <h1 className="rental-head">
                  RENTING: A FINANCIALLY SMART OPTION
                </h1>
                <p>
                  Renting is an option for every type of business equipment.
                  This option comes with many advantages and these advantages
                  come in many forms:
                </p>
                <h4>
                  COST SAVING
                  <BiSolidChevronsRight />
                  <span>
                    Renting IT equipment is often more cost-effective than
                    buying it outright for your business. This is especially
                    true for businesses that need latest technology as they only
                    need to pay the rental as per the small, medium or long term
                    project and can return the equipment once the project is
                    completed. This can help businesses save money on upfront
                    costs.
                  </span>
                </h4>
                <h4>
                  Cash Flow Benefit
                  <BiSolidChevronsRight />
                  <span>
                    You can tailor your payment schemes at your specific cash
                    flow or budget needs. The rent can be paid in advance,
                    monthly or quarterly as per our mutually convenient. Renting
                    IT equipment allows businesses to conserve their cash flow
                    for other important investments.
                  </span>
                </h4>
                <h4>
                  Obsolescence Protection
                  <BiSolidChevronsRight />
                  <span>
                    Renting option allows you to protect your equipment against
                    obsolescence. Required upgradation could be quick with
                    reasonable additional costs and without disposal related
                    hassles.{" "}
                  </span>
                </h4>
                <h4>
                  Freedom to choose Latest Technology
                  <BiSolidChevronsRight />
                  <span>
                    By renting IT equipment, you can have access to the latest
                    technology and can upgrade to newer equipment more
                    frequently.
                  </span>
                </h4>
                <h4>
                  Reduce total cost of Ownership (TCO)
                  <BiSolidChevronsRight />
                  <span>
                    Acquisition costs, opting for direct outright purchase get
                    enlarged by costs of installation, deployment,
                    decommissioning and trouble-shooting, etc. Renting option
                    thus works out cost-effective, reducing the TCO.
                  </span>
                </h4>
                <h4>
                  Shielding from Inflation
                  <BiSolidChevronsRight />
                  <span>
                    Every business has indirect other expenses such as employee
                    salaries, administrative expenses, utilities, etc. but IT
                    hardware equipment rental payments are fixed and do not
                    amplify overtime. This allows more precise profit and
                    cash-flow planning.
                  </span>
                </h4>
                <h4>
                  Reduce maintenance costs
                  <BiSolidChevronsRight />
                  <span>
                    With rented IT equipment, hardware maintenance and repair
                    costs are covered with us. This reduces the burden on the
                    renter and helps them to save money on maintenance costs.
                  </span>
                </h4>
                <h4>
                  Project Based Requirement
                  <BiSolidChevronsRight />
                  <span>
                    Renting of IT hardware is available for duration ranging
                    from 1 month to 3 years
                  </span>
                </h4>
                <h4>
                  Tax Saving
                  <BiSolidChevronsRight />
                  <span>
                    Rented equipment is considered not as a liability, but an
                    expense. Equipment renting payments are considered external
                    expenses and are therefore deductible from the company's
                    taxable profit.
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default RentalService;
