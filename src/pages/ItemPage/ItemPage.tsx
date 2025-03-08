import { useParams } from "react-router-dom";
import { DISPOSAL_INFO } from "./constants";
import styles from "./ItemPage.module.css";
import React from "react";
function ItemPage() {
  const { item } = useParams<{ item: keyof typeof DISPOSAL_INFO }>();

  const data = item ? DISPOSAL_INFO[item] : null;

  if (!data) {
    return <div>Item not found. Please select a valid disposal item.</div>;
  }

  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        const [tag, content] = Object.entries(item)[0];

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
    </div>
  );
}

export default ItemPage;
