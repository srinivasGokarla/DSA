import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function ResizableLayout() {
  const [layout, setLayout] = useState([
    { i: 'a', x: 0, y: 0, w: 4, h: 4 },
    { i: 'b', x: 4, y: 0, w: 4, h: 4 },
    { i: 'c', x: 0, y: 4, w: 8, h: 4 },
  ]);

  const handleResize = (layout, oldItem, newItem) => {
    const updatedLayout = layout.map((item) => {
      if (item.i === newItem.i) {
        return newItem;
      } else {
        
        const dx = newItem.w - oldItem.w;
        const dy = newItem.h - oldItem.h;

        return { ...item, w: item.w + dx, h: item.h + dy };
      }
    });

    setLayout(updatedLayout);
  };

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      onLayoutChange={handleLayoutChange}
      onResize={handleResize}
      width={400}
      rowHeight={80}
      margin={[10, 10]}
      isResizable={true}
      resizeHandles={['se', 'sw', 'ne', 'nw', 'e', 'w', 's', 'n']}
    >
      {layout.map((item) => (
        <div key={item.i} className="component">
          <h2>Component {item.i}</h2>
          <p>Placeholder content for component {item.i}</p>
        </div>
      ))}
    </GridLayout>
  );
}

export default ResizableLayout;
