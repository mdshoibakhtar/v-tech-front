import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function BlogListContentRight() {
  return (
    <div className="site_content-right">
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <Button variant="primary" className="mx-2">
          Search
        </Button>
      </InputGroup>
      <h2 className="widget-title">Subscribe</h2>
      <Form>
        <Form.Group
          as={Col}
          controlId="validationCustom01"
          className="blog_input"
        >
          <Form.Label>
            First name <span>*</span>
          </Form.Label>
          <Form.Control required type="text" />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="validationCustom01"
          className="blog_input"
        >
          <Form.Label>
            Last name <span>*</span>
          </Form.Label>
          <Form.Control required type="text" />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="validationCustom01"
          className="blog_input"
        >
          <Form.Label>
            Email <span>*</span>
          </Form.Label>
          <Form.Control required type="text" />
        </Form.Group>

        <Button type="submit" className="mt-4" variant="warning">
          Sign up{" "}
        </Button>
      </Form>
      <div className="wp_block_group_inner_container">
        <h3 className="wp-block-heading">Recent Posts</h3>
        <ul className="wp-block-latest-posts">
          <li>
            <a href="" className="wp-block-latest-post-title">
              Cloud Migration: How to Make it Easy to Move Your Business to the
              Cloud
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Why Should Your Business Move to the Cloud?
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              The Trouble With IT Troubleshooting
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Protect Your Business with an Information Technology Audit: A
              Must-Read Guide for Small Business Owners
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Why Vulnerability Scanning is a Must-Have Addition to Your IT
              Security Toolbox
            </a>
          </li>
        </ul>
      </div>

      <div className="wp_block_group_inner_container">
        <h3 className="wp-block-heading">Categories</h3>
        <ul className="wp-block-latest-posts">
          <li>
            <a href="" className="wp-block-latest-post-title">
              Backups
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Cloud Services
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Cyber Security
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              EZSolutionIT News
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Maintenance
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Security
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Software
            </a>
          </li>
          <li>
            <a href="" className="wp-block-latest-post-title">
              Tips
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default BlogListContentRight;
