import Accordion from "react-bootstrap/Accordion";
import './FaqAccordion.css'
function FaqAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Why is renting of IT equipment better than buying it?</strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            It is a conventional belief that a V-Tech Solution is more expensive
            than an outright purchase.
          </p>
          <p>
            This is not true in the case of IT equipment, due to the speed at
            which technology upgrades, and rapid technological developments.
          </p>
          <p>
            Most technology products face a dramatic drop in value from the day
            they are delivered and installed. Every business must stay up to
            date with technology to remain competitive and productive. However,
            due to budgetary problems, it is hard to upgrade to the latest
            equipment now and then.
          </p>
          <p>
            V-Tech Solutions offers a smarter way to keep up with technology and
            maximize your investment in technology that rapidly depreciates.
          </p>
          <p>
            Renting of IT equipment proves to be more advantageous for the
            following reasons:
          </p>
          <ul>
            <li>
              No capital expenditure and no interest liability means more
              liquidity in the business
            </li>
            <li>
              No recurring expenses for maintaining and repairing IT equipment
            </li>
            <li> A reduced "Total Cost of Ownership"</li>
            <li>
              Outsourcing IT needs to means no cost of an IT department to
              maintain the equipment
            </li>
            <li>No inventory maintenance/management</li>
            <li>Faster addition of equipment to support your business plans</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <strong>Who can rent IT equipment from V-Tech Solutions?</strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Any Corporate houses, Small & Medium companies/partnership firms,
            Event organizers, NGOs, Educational Institutions, Design Studios,
            Professionals, Executives, Individuals, etc. can avail of V-Tech
            Solution from us.
          </p>
          <p>
            <a href="">Contact our team</a> to get a tailor-made solution for
            your business.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <strong>
            What is required from the client to rent from V-tech Solutions?
          </strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Any Corporate houses, Small & Medium companies/partnership firms,
            Event organizers, NGOs, Educational Institutions, Design Studios,
            Professionals, Executives, Individuals, etc. can avail of V-Tech Solution
            facility from us.
          </p>
          <p>
            <a href="">Contact our team</a> to get a tailor-made solution for
            your business.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <strong>
            What if we require equipment that is not currently displayed on the
            website?
          </strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Any Corporate houses, Small & Medium companies/partnership firms,
            Event organizers, NGOs, Educational Institutions, Design Studios,
            Professionals, Executives, Individuals, etc. can avail of V-Tech Solution
             from us.
          </p>
          <p>
            <a href="">Contact our team</a> to get a tailor-made solution for
            your business.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <strong>
            What if I am not sure what equipment is best suited for my business?
          </strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            We are here to help. Just send in your requirements and our team
            will provide you with the minimum equipment list to suit your
            requirement. This will help you to select the best options and avoid
            unnecessary costs.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <strong>What is the V-Tech Solution period?</strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            The V-Tech Solution period will be determined as per your requirements. There
            are no restrictions on the period, but once a V-Tech Solution period is
            committed, we will expect that you abide by the same.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>
          <strong>What is the cost of the V-Tech Solution?</strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            V-Tech Solution rates depend on the number of equipment, duration & location
            of V-Tech Solution. Our team will understand your requirement and then give
            you the best possible quote for V-Tech Solution. Get a quote as per your
            requirements.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          <strong>
            Why does the V-Tech Solution cost vary according to the duration?
          </strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Our V-Tech Solution costs are attached to the types of two costs. One is the
            fixed cost (cost of procuring the equipment) and the second is
            operational cost. For a shorter period of V-Tech Solution, the operational
            cost is high. For longer V-Tech Solution durations, the operational costs
            reduce over time, and we are always keen to extend extra support for
            a long term association by forwarding the reducing cost advantage to
            our clients.
          </p>
          <p>
            <a href="">Contact our team</a> to get a tailor-made solution for
            your business.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default FaqAccordion;
