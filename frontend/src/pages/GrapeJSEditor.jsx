import React, { useState, useContext, createContext } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Rnd } from 'react-rnd';
import 'tailwindcss/tailwind.css';

// Context for state management
const EditorContext = createContext();

const ItemTypes = {
  COMPONENT: 'component',
};

const DraggableComponent = ({ id, type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.COMPONENT,
    item: { id, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className="p-2 border mb-2 cursor-move" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 border-r">
      <h3 className="text-lg font-bold mb-4">Components</h3>
      <DraggableComponent id="text1" type="text">Text</DraggableComponent>
      <DraggableComponent id="image1" type="image">Image</DraggableComponent>
      <DraggableComponent id="button1" type="button">Button</DraggableComponent>
    </div>
  );
};

const Canvas = () => {
  const { components, setComponents } = useContext(EditorContext);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.COMPONENT,
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      setComponents((prevComponents) => [
        ...prevComponents,
        { ...item, left: offset.x, top: offset.y, width: 200, height: 100 },
      ]);
    },
  }));

  const handleResize = (index, ref, position) => {
    setComponents((prevComponents) => {
      const newComponents = [...prevComponents];
      newComponents[index] = {
        ...newComponents[index],
        width: ref.style.width,
        height: ref.style.height,
        ...position,
      };
      return newComponents;
    });
  };

  return (
    <div ref={drop} className="relative w-full h-screen border">
      {components.map((component, index) => (
        <Rnd
          key={index}
          size={{ width: component.width, height: component.height }}
          position={{ x: component.left, y: component.top }}
          onDragStop={(e, d) => handleResize(index, { style: { width: component.width, height: component.height } }, { x: d.x, y: d.y })}
          onResizeStop={(e, direction, ref, delta, position) => handleResize(index, ref, position)}
        >
          {component.type === 'text' && <div className="w-full h-full">Text Component</div>}
          {component.type === 'image' && <img src="https://via.placeholder.com/100" alt="Placeholder" className="w-full h-full" />}
          {component.type === 'button' && <button className="w-full h-full">Button Component</button>}
        </Rnd>
      ))}
    </div>
  );
};

const PropertiesPanel = () => {
  return (
    <div className="w-1/4 p-4 border-l">
      <h3 className="text-lg font-bold mb-4">Properties</h3>
      {/* Add properties form here */}
    </div>
  );
};

const DragDropEditor = () => {
  const [components, setComponents] = useState([]);

  return (
    <EditorContext.Provider value={{ components, setComponents }}>
      <DndProvider backend={HTML5Backend}>
        <div className="flex">
          <Sidebar />
          <Canvas />
          <PropertiesPanel />
        </div>
      </DndProvider>
    </EditorContext.Provider>
  );
};

export default DragDropEditor;