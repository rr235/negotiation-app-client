import React, { useState } from 'react';
import { arrayOf, node, string } from 'prop-types';
import styles from './tabs.styles.scss';

/**
 * Tabs component has tab list and tab panels.
 * Tab list contains tabs. Active tab has aria-selected=true (a11y) and active class (styles).
 * Tab Panel is controlled by tab (aria-controls=<panel-id>)
 */
const Tabs = ({ children, id }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClick = (index) => setActiveIndex(index);

  return (
    <div>
      <div role="tablist">
        {children.map((child, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-panel-${index}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onClick(index)}
              className={`${styles.tab} ${isActive ? styles.active : ''}`}
              key={child.props.tabname}
            >
              {child.props.tabname}
            </button>
          );
        })}
      </div>
      {children.map((child, index) => (
        <div
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          tabIndex={0}
          hidden={activeIndex !== index}
          className={styles.tabPanel}
          key={child.props.tabname}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  children: arrayOf(node),
  id: string.isRequired,
};

Tabs.defaultProps = {
  children: [],
};

export default Tabs;
