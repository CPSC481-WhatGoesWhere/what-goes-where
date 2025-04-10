import { NavLink, useParams } from "react-router-dom";
import { DISPOSAL_INFO } from "./constants";
import styles from "./ItemPage.module.css";
import React from "react";
import FlexBackGround from "@/Components/FlexBackGround";
import Block from "@/Components/Block";
import Button from "@/Components/Button";
function ItemPage() {
  const { item } = useParams<{ item: keyof typeof DISPOSAL_INFO }>();

  const data = item ? DISPOSAL_INFO[item] : null;

  if (!data) {
    return <div>Item not found. Please select a valid disposal item.</div>;
  }

  return (
    <FlexBackGround>
      <Block
        style={{
          alignContent: "center",
          justifyContent: "center",
          flex: "none",
          alignItems: "flex-start",
        }}
      >
        {data.map((item, index) => {
          const [tag, content] = Object.entries(item)[0];

          if (tag === "link") {
            return (
              <NavLink key={index} to={content} className={styles.link}>
                <Button>Learn more!</Button>
              </NavLink>
            );
          }
          if (tag === "ul" || tag === "ol") {
            const ListTag = tag;
            return (
              <ListTag key={index} className={styles.list}>
                {content.map((liItem: { li: string }, liIndex: number) => (
                  <li
                    key={liIndex}
                    className={styles.listItem}
                    dangerouslySetInnerHTML={{ __html: liItem.li }}
                  />
                ))}
              </ListTag>
            );
          }

          return React.createElement(
            tag,
            { key: index, className: styles[tag] || styles.paragraph },
            <span dangerouslySetInnerHTML={{ __html: content }} />
          );
        })}
      </Block>
    </FlexBackGround>
  );
}

export default ItemPage;
