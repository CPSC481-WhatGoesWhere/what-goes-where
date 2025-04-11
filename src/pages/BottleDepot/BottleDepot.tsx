import FlexRow from "@/Components/FlexRow";
import LocationsMap from "@/Components/LocationsMap";
import { useState } from "react";
import { RECYCLING_DEPOTS } from "./constants";
import { Location } from "@/Components/LocationsMap/LocationsMap";
import styles from "./BottleDepot.module.css";
import Block from "@/Components/Block";
import FlexBackGround from "@/Components/FlexBackGround";
import ScrollList from "@/Components/ScrollList";
import RefundCalculator from "./RefundCalculator";
import { NavLink } from "react-router-dom";
import CanIMG from "@/assets/can.png";
import PlasticBottleIMG from "@/assets/plastic-bottle.png";
import GlassBottleIMG from "@/assets/glass-bottle.png";

function ItemCard({
  label,
  img,
  url,
}: {
  label: string;
  img: string;
  url: string;
}) {
  return (
    <NavLink to={url} className={styles.itemCard}>
      <img src={img} alt={label} width={96} height={96} />
      <h3>{label}</h3>
    </NavLink>
  );
}

function BottleDepot() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  return (
    <FlexBackGround
      style={{ gap: "var(--spacing-none)", padding: "var(--spacing-none)" }}
    >
      <ScrollList
        style={{ maxWidth: "100%" }}
        bottomFade={false}
        topFade={true}
      >
        <FlexRow style={{ flex: "none", alignItems: "stretch" }}>
          <Block style={{ flex: 1, alignItems: "center" }}>
            <div className={styles.container}>
              <h1>Bottles and Cans Recycling</h1>
              <p>
                Turn your empty bottles and cans into cash while helping the
                environment. Find nearby recycling depots and start making a
                difference today!
              </p>

              <div style={{ width: "100%" }}>
                <h3>Learn More</h3>
                <FlexRow
                  style={{ width: "100%", justifyContent: "space-evenly" }}
                >
                  <ItemCard
                    label={"Aluminum Cans"}
                    img={CanIMG}
                    url={"/item/aluminumcans"}
                  />
                  <ItemCard
                    label={"Plastic Bottles"}
                    img={PlasticBottleIMG}
                    url={"/item/plasticbottles"}
                  />
                  <ItemCard
                    label={"Glass Bottles"}
                    img={GlassBottleIMG}
                    url={"/item/glassbottles"}
                  />
                </FlexRow>
              </div>
            </div>
          </Block>
          <RefundCalculator />
        </FlexRow>
        <FlexRow style={{ flex: "none" }}>
          <Block style={{ height: "100%" }}>
            <LocationsMap
              locations={RECYCLING_DEPOTS}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </Block>
        </FlexRow>
      </ScrollList>
    </FlexBackGround>
  );
}

export default BottleDepot;
