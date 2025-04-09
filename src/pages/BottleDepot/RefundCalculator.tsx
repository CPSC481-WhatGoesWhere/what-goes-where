import { useState } from "react";
import Block from "@/Components/Block";
import TextInput from "@/Components/TextInput";
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

  return (
    <Block style={{ height: "100%", flex: 1, maxWidth: "600px" }}>
        <h3>Calculate refund estimate</h3>
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
            title="Amount of Aluminium Bottles:"
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
        </div>
    </Block>
  );
}

export default RefundCalculator;
