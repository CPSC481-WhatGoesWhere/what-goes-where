

// JunkRemoval.tsx


import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import styles from "./JunkRemoval.module.css";
import { JUNK_REMOVAL_SERVICES } from "./constants";
import ClickableBlock from "@/Components/Block/ClickableBlock";
import Spacer from "@/Components/Spacer";
import ScrollList from "@/Components/ScrollList";

function JunkRemoval() {

  const handleBlockClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <FlexBackGround style={{ gap: "var(--spacing-none)", padding: "var(--spacing-none)"}}>
      <ScrollList 
        style={{maxWidth: "100%"}}
        bottomFade={false}
        topFade={true}
      >
        <Spacer height={20} />
        <Block
          style={{
            maxWidth: "70%",
            margin: "var(--spacing-none) auto", 
            justifyContent: 'center'
          }}
        >
          <h2>Junk Removal</h2>
          <p>
            Contact a trusted junk removal service from below to take care of
            disposing large waste items for you.
          </p>
        </Block>
        <Spacer height={24} />
          {JUNK_REMOVAL_SERVICES.map((service) => (
            <>
              <ClickableBlock
                style={{
                  maxWidth: "70%",
                  margin: "var(--spacing-none) auto",
                }}
                key={service.id}
                onClick={handleBlockClick}
                clickArgs={[service.website]}
              >
                <div className={styles.clickableBlockContainer}>
                  <div className={styles.clickableBlockTopContainer}>
                    {service.name}
                  </div>
                  <div className={styles.clickableBlockBottomContainer}>
                    {service.description}
                  </div>
                </div>
              </ClickableBlock>
              <Spacer height={24} />
            </>
          ))}
      </ScrollList>
    </FlexBackGround>
  );
}

export default JunkRemoval;
