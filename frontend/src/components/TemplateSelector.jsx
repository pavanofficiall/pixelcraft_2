import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { templates } from '../templates';

const TemplateSelector = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateKey) => {
    navigate(`/editor?template=${templateKey}`);
  };

  return (
    <div className="template-selector">
      <h1>Select a Template</h1>
      <div className="templates">
        {Object.keys(templates).map((key) => (
          <div key={key} className="template-preview">
            <div dangerouslySetInnerHTML={{ __html: templates[key] }} />
            <button onClick={() => handleTemplateSelect(key)}>Select Template</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;