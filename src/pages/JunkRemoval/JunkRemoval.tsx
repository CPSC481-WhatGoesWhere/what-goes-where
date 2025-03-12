import FlexBackGround from "@/Components/FlexBackGround";
import FlexRow from "@/Components/FlexRow";
import Block from "@/Components/Block";
import styles from "./JunkRemoval.module.css";
import { JUNK_REMOVAL_SERVICES } from "./constants";

function JunkRemoval() {
  const handleBlockClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <FlexBackGround style={{ justifyContent: "flex-start", overflowY: "auto" }}>
      <FlexRow style={{ flex: "none" }}>
        <Block>
          <div className={styles.container}>
            <h1>Junk Removal</h1>
            <p>
              Contact a trusted junk removal service from below to take care of
              disposing large waste items for you.
            </p>

            {JUNK_REMOVAL_SERVICES.map((service) => (
              <div
                key={service.id}
                className={styles.blockClickable}
                style={{ width: "100%" }}
                onClick={() => handleBlockClick(service.website)}
              >
                <Block>
                  <FlexRow style={{ justifyContent: "space-between" }}>
                    <div>
                      <strong>{service.name}</strong>
                      <p>{service.description}</p>
                    </div>
                    <div>
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact Information
                      </a>
                    </div>
                  </FlexRow>
                </Block>
              </div>
            ))}
          </div>
        </Block>
      </FlexRow>
    </FlexBackGround>
  );
}

export default JunkRemoval;
