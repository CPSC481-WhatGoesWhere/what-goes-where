import { useState } from "react";
import Block from "@/Components/Block";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button/Button";
import styles from "./BottleDepot.module.css";
import { calculateEstimatedRefund } from "./utils";

function RefundCalculator() {
  const [glassBottles, setGlassBottles] = useState<number | undefined>(
    undefined
  );
  const [plasticBottles, setPlasticBottles] = useState<number | undefined>(
    undefined
  );
  const [aluminiumCans, setAluminiumCans] = useState<number | undefined>(
    undefined
  );

  const handleInputChange =
    (setter: (val: number | undefined) => void) => (v: string) => {
      setter(v ? parseInt(v) : undefined);
    };

  const clearInputs = () => {
    setGlassBottles(undefined);
    setPlasticBottles(undefined);
    setAluminiumCans(undefined);
    document.querySelectorAll("input[type='number']").forEach((input) => {
      (input as HTMLInputElement).value = "";
    });
  };

  const isClearDisabled = !glassBottles && !plasticBottles && !aluminiumCans;

  return (
    <Block style={{ flex: 1, maxWidth: "600px" }}>
      <h3>Calculate Refund Estimate</h3>
      <div className={styles.refundInputsContainer}>
        <TextInput
          title="Amount of Glass Bottles:"
          type="number"
          placeholder="Enter number of glass bottles"
          value={glassBottles}
          onChange={handleInputChange(setGlassBottles)}
          min={0}
        />
        <TextInput
          title="Amount of Plastic Bottles:"
          type="number"
          placeholder="Enter number of plastic bottles"
          value={plasticBottles}
          onChange={handleInputChange(setPlasticBottles)}
          min={0}
        />
        <TextInput
          title="Amount of Aluminium Cans:"
          type="number"
          placeholder="Enter number of aluminium cans"
          value={aluminiumCans}
          onChange={handleInputChange(setAluminiumCans)}
          min={0}
        />
        <p>
          <strong>Estimated refund: </strong>$
          {calculateEstimatedRefund(
            glassBottles,
            plasticBottles,
            aluminiumCans
          ).toFixed(2)}
        </p>
        <Button onClick={clearInputs} disabled={isClearDisabled}>
          Clear All
        </Button>
      </div>
    </Block>
  );
}

export default RefundCalculator;
