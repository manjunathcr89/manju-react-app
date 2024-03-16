import React, { useState } from "react";
import { Alert } from "manju-ui-lib/dist/Alert";
// import { Accordion } from "manju-ui-lib/dist/Accordion";
import { Button } from "manju-ui-lib/dist/Button";
import { Checkbox } from "manju-ui-lib/dist/Checkbox";
import { Input } from "manju-ui-lib/dist/Input";
import { Link } from "manju-ui-lib/dist/Link";
import { Tooltip } from "manju-ui-lib/dist/Tooltip";

function AboutUs() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <div className="App">
        <Alert message="Success alert message" />
        <Button>Test Btn 2</Button>
        {/* <div>
          <Accordion title="Section 1" content="Content for section 1" />{" "}
        </div> */}
        <Input type="text" value={""}></Input>
        <div>
          <Link href="https://visible.com">Example website</Link>
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <Tooltip text="Tooltip"></Tooltip>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
